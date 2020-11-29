import React from "react";
import { GET_CHILD_FORM } from "../Mutations";
import { useQuery } from "@apollo/react-hooks";

export default function DashboardQuery(props) {
  const { loading, error, data } = useQuery(GET_CHILD_FORM, {
    variables: { userId: props.userId },
  });

  if (!loading && !error) {
    var name = data.getChildForm.name;
  }

  return name;
}
