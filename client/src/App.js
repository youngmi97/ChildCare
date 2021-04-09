import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
//import ProfRoute from "./util/ProfRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import STT from "./pages/STT";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import { constant } from "lodash";
import Lectures from "./pages/Lectures/Lectures";
import NewResults from "./pages/NewResults";
import { AuthContext } from "./context/auth";
import Diary from "./pages/Lectures/Diary";
import NewLectures from "./pages/Lectures/NewLectures";
import ViewDiary from "./pages/ViewDiary";

const App = (props) => {
  const { user } = useContext(AuthContext);
  //console.log("user prof", user);

  return (
    <AuthProvider>
      <Router>
        <MenuBar client={props.client} />

        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} client={props.client} />
        <Route exact path="/results" component={NewResults} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/assessment" component={Assessment} />
        <Route exact path="/stt" component={STT} />
        <Route exact path="/lectures" component={NewLectures} />
        <Route exact path="/diary" component={ViewDiary} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/posts/:postId" component={SinglePost} />
      </Router>
    </AuthProvider>
  );
};

export default App;
