import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import HomeMain from "../components/home/HomeMain";
import Dashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "50px",
  },
}));

function Home() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();

  //console.log("user info", user);

  const display = user ? (
    user.prof ? (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.root}
      >
        <Dashboard />
      </Grid>
    ) : (
      <HomeMain />
    )
  ) : (
    <HomeMain />
  );

  return display;
}

export default Home;
