import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
// import Switch from "@material-ui/core/Switch";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles({
  root: {
    marginTop: "15vh",
    width: "50vw",
    marginLeft: "25vw",
  },
});

function Login(props) {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const [userType, setUserType] = useState(0);

  const handleToggleUser = (event, userType) => {
    setUserType(userType);
  };

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });
  // For Parent aka User
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/");
      console.log("executing USER login", userData);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  // For Professionals
  const [loginProf, { loadingProf }] = useMutation(LOGIN_PROFESSIONAL, {
    update(_, { data: { loginProfessional: userData } }) {
      context.loginProf(userData);
      props.history.push("/dashboard");
      console.log("executing PROF login");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCallback() {
    if (userType) {
      loginProf();
    } else {
      loginUser();
    }
  }

  const LoginForm = (
    <Form
      onSubmit={onSubmit}
      noValidate
      className={loading ? "loading" : ""}
      style={{ paddingTop: "20px" }}
    >
      <h1>사용자 로그인</h1>
      <Form.Input
        label="Username"
        placeholder="Username.."
        name="username"
        type="text"
        value={values.username}
        error={errors.username ? true : false}
        onChange={onChange}
      />
      <Form.Input
        label="Password"
        placeholder="Password.."
        name="password"
        type="password"
        value={values.password}
        error={errors.password ? true : false}
        onChange={onChange}
      />
      <Button type="submit" primary>
        로그인
      </Button>
    </Form>
  );
  return (
    <div className={classes.root}>
      {LoginForm}

      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      assignee
      canWatch
      token
      canWatch
    }
  }
`;

const LOGIN_PROFESSIONAL = gql`
  mutation loginProfessional($username: String!, $password: String!) {
    loginProfessional(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
