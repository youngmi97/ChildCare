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
    marginTop: "15vh",
    width: "50vw",
    marginLeft: "25vw",
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

  // How to use two different forms
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: "",
    birthday: "",
    address: "",
    occupation: "",
    institution: "",
    objective: "",
    email: "",
  });

  // For User
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/");
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: {
      username: values.username,
      password: values.password,
      confirmPassword: values.confirmPassword,
      email: values.email,
    },
  });

  // For Prof
  const [addProf, { loadingProf }] = useMutation(REGISTER_PROFESSIONAL, {
    update(_, { data: { registerProfessional: userData } }) {
      context.loginProf(userData);
      props.history.push("/");
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values,
  });

  function registerUser() {
    if (userType) {
      addProf();
    } else {
      addUser();
    }
  }

  const RegisterForm = userType ? (
    <Form
      onSubmit={onSubmit}
      noValidate
      className={loadingProf ? "loading" : ""}
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
      <Form.Input
        label="Name"
        placeholder="Name.."
        name="name"
        type="text"
        value={values.name}
        error={errors.name ? true : false}
        onChange={onChange}
      />
      <Form.Input
        label="Gender"
        placeholder="Gender.."
        name="gender"
        type="text"
        value={values.gender}
        error={errors.gender ? true : false}
        onChange={onChange}
      />
      <Form.Input
        label="Birthday"
        placeholder="Birthday.."
        name="birthday"
        type="text"
        value={values.birthday}
        error={errors.birthday ? true : false}
        onChange={onChange}
      />
      <Form.Input
        label="Address"
        placeholder="Address.."
        name="address"
        type="text"
        value={values.address}
        error={errors.address ? true : false}
        onChange={onChange}
      />
      <Form.Input
        label="Occupation"
        placeholder="Occupation.."
        name="occupation"
        type="text"
        value={values.occupation}
        error={errors.occupation ? true : false}
        onChange={onChange}
      />
      <Form.Input
        label="Institution"
        placeholder="Institution.."
        name="institution"
        type="text"
        value={values.institution}
        error={errors.institution ? true : false}
        onChange={onChange}
      />
      <Form.Input
        label="Objective"
        placeholder="Objective.."
        name="objective"
        type="text"
        value={values.objective}
        error={errors.objective ? true : false}
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
    <div className={classes.root}>
      <Paper elevation={1}>
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
      assignee
      token
    }
  }
`;

const REGISTER_PROFESSIONAL = gql`
  mutation registerProfessional(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $name: String!
    $gender: String!
    $birthday: String!
    $address: String!
    $occupation: String!
    $institution: String!
    $objective: String!
    $email: String!
  ) {
    registerProfessional(
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
        name: $name
        gender: $gender
        birthday: $birthday
        address: $address
        occupation: $occupation
        institution: $institution
        objective: $objective
        email: $email
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
