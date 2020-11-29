import React, { useEffect, useState } from "react";
import { Grid, Card } from "@material-ui/core";

export default function Diary() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Card style={{ width: "100%", height: "100%" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <p>Time : {date.toLocaleDateString()}</p>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
