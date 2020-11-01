import React, { useState, useContext, useEffect, useMemo } from "react";
import Scatter from "../components/charts/Scatter";
import Bar from "../components/charts/Bar";
import Column from "../components/charts/Column";
import Report from "../components/charts/Report";
import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHILD_FORM } from "../Mutations";

export default function Results() {
  const { user } = useContext(AuthContext);

  //const [formData, setFormData] = useState({});

  //console.log("user Id", user.id);
  const { loading, error, data } = useQuery(GET_CHILD_FORM, {
    variables: { userId: user.id },
  });

  if (loading) {
    console.log("loading");
  } else {
    console.log("got data", data);
  }

  const [eduScore, setEduScore] = useState(1);
  const [devScore, setDevScore] = useState(2);
  const [illScore, setIllScore] = useState(3);
  const [famScore, setFamScore] = useState(4);
  const [nwrScore, setNwrScore] = useState(90);
  const [srScore, setSrScore] = useState(70);
  const [parent, setParent] = useState(70);
  const [child, setChild] = useState(30);

  // setEduScore(formData.educationScore);
  // setDevScore(formData.developmentScore);
  // setIllScore(formData.illnessScore);
  // setFamScore(formData.familyScore);

  useMemo(() => {
    if (!error && !loading) {
      console.log(
        "data.getChildForm",
        parseInt(data.getChildForm.educationScore, 10)
      );
      setEduScore(parseInt(data.getChildForm.educationScore, 10));
      setDevScore(parseInt(data.getChildForm.developmentScore, 10));
      setIllScore(parseInt(data.getChildForm.illnessScore, 10));
      setFamScore(parseInt(data.getChildForm.familyScore, 10));
    }
  }, [data, error, loading]);

  return (
    <div className="row">
      <div style={{ width: "40%", float: "left" }}>
        <Scatter
          eduScore={eduScore}
          devScore={devScore}
          illScore={illScore}
          famScore={famScore}
        />

        <div style={{ display: "inline-block" }}>
          <h3 style={{ textAlign: "center" }}>자발화 분석</h3>
          <div style={{ padding: 0, margin: 0, float: "left" }}>
            <Column parent={parent} child={child} />
          </div>
          <div style={{ marginTop: "70px", padding: "30px", float: "right" }}>
            <h3>MLU: 4.21단어 </h3>
            <h3>Turn-taking: 3.42회</h3>
          </div>
        </div>

        <Bar nwrScore={nwrScore} srScore={srScore} />
      </div>
      <div class="col" style={{ width: "55%", float: "right" }}>
        <Report />
      </div>
    </div>
  );
}
