import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import HomeMain from "../components/home/HomeMain";

function Home() {
  const { user } = useContext(AuthContext);

  console.log("user info", user);

  const display = user ? (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        fontSize: "50px",
        transform: "translate(-50%, -50%)",
      }}
    >
      Hello {user.username} !
    </div>
  ) : (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      direction="row"
    >
      <HomeMain />
    </Grid>
  );

  return display;
}

export default Home;
