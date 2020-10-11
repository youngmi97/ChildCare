import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";

function Home() {
  const { user } = useContext(AuthContext);
  console.log("user info", user);

  const display = user ? (
    <div>You have been logged in!</div>
  ) : (
    <div>Landing Page Goes Here</div>
  );

  return display;
}

export default Home;
