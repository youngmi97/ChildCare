import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { makeStyles } from "@material-ui/core/styles";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function Register(props) {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const [userType, setUserType] = useState(0);

  const handleToggleUser = (event, userType) => {
    setUserType(userType);
  };

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  const RegisterForm = userType ? (
    <Form
      onSubmit={onSubmit}
      noValidate
      className={loading ? "loading" : ""}
      style={{ paddingTop: "20px" }}
    >
      <h1>전문가 회원가입</h1>
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
        label="Email"
        placeholder="Email.."
        name="email"
        type="email"
        value={values.email}
        error={errors.email ? true : false}
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
      <Form.Input
        label="Confirm Password"
        placeholder="Confirm Password.."
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        error={errors.confirmPassword ? true : false}
        onChange={onChange}
      />
      <Button type="submit" primary>
        회원가입
      </Button>
    </Form>
  ) : (
    <Form
      onSubmit={onSubmit}
      noValidate
      className={loading ? "loading" : ""}
      style={{ paddingTop: "20px" }}
    >
      <h1>사용자 회원가입</h1>
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
        label="Email"
        placeholder="Email.."
        name="email"
        type="email"
        value={values.email}
        error={errors.email ? true : false}
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
      <Form.Input
        label="Confirm Password"
        placeholder="Confirm Password.."
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        error={errors.confirmPassword ? true : false}
        onChange={onChange}
      />
      <Button type="submit" primary>
        회원가입
      </Button>
    </Form>
  );

  return (
    <div className="form-container">
      <Paper elevation={1} className={classes.root}>
        <Tabs
          value={userType}
          onChange={handleToggleUser}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<PersonPinIcon />} label="사용자" />
          <Tab icon={<PersonPinIcon />} label="전문가" />
        </Tabs>
      </Paper>

      {RegisterForm}
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

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
