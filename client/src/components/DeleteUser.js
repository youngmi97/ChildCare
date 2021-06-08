import React from "react";
import { Button } from "@material-ui/core";

export default function DeleteUser(props) {
  return (
    <div
      style={{
        marginLeft: "40vw",
        marginTop: "40vh",
        width: "20vw",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        fontSize: "17px",
      }}
    >
      <div>해당 사용자를 삭제 하시겠습니까?</div>
      <div>
        <Button
          style={{
            backgroundColor: "#F9BE00",
            fontSize: "17px",
            color: "white",
            margin: "0px 1vw",
          }}
        >
          예
        </Button>
        <Button
          style={{
            backgroundColor: "gray",
            fontSize: "17px",
            color: "white",
            margin: "0px 1vw",
          }}
          onClick={() => props.setDeleteOpen(false)}
        >
          아니오
        </Button>
      </div>
    </div>
  );
}
