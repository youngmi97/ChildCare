import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ReactPlayer from "react-player";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "25px",
    marginLeft: "90px",
    marginRight: "90px",
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Noto Sans KR', sans-serif;",
  },
  title2: {
    marginTop: "50px",
    marginLeft: "90px",
    marginRight: "90px",
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Noto Sans KR', sans-serif;",
  },
  video: {
    margin: "30px 0px",
  },
  checkbox: {
    margin: "10px 0px",
  },
}));

export default function NWRSR(props) {
  const classes = useStyles();
  var result = 0;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state, setState] = useState({
    nwr1: false,
    nwr2: false,
    nwr3: false,
    nwr4: false,
    nwr5: false,
    nwr6: false,
    nwr7: false,
    nwr8: false,
    nwr9: false,
    nwr10: false,
    nwr11: false,
    nwr12: false,
    nwr13: false,
    nwr14: false,
    nwr15: false,
    sr1: false,
    sr2: false,
    sr3: false,
    sr4: false,
    sr5: false,
    sr6: false,
    sr7: false,
    sr8: false,
    sr9: false,
    sr10: false,
    sr11: false,
    sr12: false,
  });

  const calcScore = () => {
    Object.values(state).map((value) => {
      if (value === false) {
        result = result + 1;
      }
    });
    return result;
  };
  console.log(calcScore());

  return (
    <div style={{ margin: "0px" }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.title}
        >
          NWR
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.video}
        >
          <ReactPlayer url="./서하책일기.mp4" width="70%" controls={true} />
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <div>
            1. 누베{" "}
            <Checkbox
              color="primary"
              checked={state.nwr1}
              onChange={handleChange}
              name="nwr1"
            />
          </div>

          <div>
            4. 까다굳 <Checkbox color="primary" />
          </div>
          <div>
            7.토보가인 <Checkbox color="primary" />
          </div>
          <div>
            10.조메누버리 <Checkbox color="primary" />
          </div>
          <div>
            13.로밉띠르저니 <Checkbox color="primary" />
          </div>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <div>
            2. 조나 <Checkbox color="primary" />
          </div>
          <div>
            5. 모단기 <Checkbox color="primary" />
          </div>

          <div>
            8.푸가태지 <Checkbox color="primary" />
          </div>

          <div>
            11.레빌애티머 <Checkbox color="primary" />
          </div>
          <div>
            14.보마데낭까두 <Checkbox color="primary" />
          </div>
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={4}
        >
          <div>
            3. 퍼틱 <Checkbox color="primary" />
          </div>
          <div>
            6.니아토 <Checkbox color="primary" />
          </div>
          <div>
            9.드반거노 <Checkbox color="primary" />
          </div>
          <div>
            12.바즘다거니 <Checkbox color="primary" />
          </div>
          <div>
            15.미기돋아캐바 <Checkbox color="primary" />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.title2}
        >
          SR
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.video}
        >
          <ReactPlayer url="./서하책일기.mp4" width="70%" controls={true} />
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <div>
            1. 그림을 연필로 그려요 <Checkbox color="primary" />
          </div>
          <div>
            3. 엄마가 치마를 입어요 <Checkbox color="primary" />
          </div>
          <div>
            5. 아빠가 힘들어서 하품을 크게 해요 <Checkbox color="primary" />
          </div>
          <div>
            7. 동생이 작은 칫솔로 이빨을 닦아요 <Checkbox color="primary" />
          </div>
          <div>
            9. 친구가 밖에서 그네를 재밌게 타요 <Checkbox color="primary" />
          </div>
          <div>
            11. 동생은 주사를 맞는 것을 싫어해요 <Checkbox color="primary" />
          </div>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={6}
        >
          <div>
            2. 동생이 그림책을 봐요 <Checkbox color="primary" />
          </div>
          <div>
            4. 엄마가 청소를 하고 걸레를 빨아요 <Checkbox color="primary" />
          </div>
          <div>
            6. 동생이 추우면 엄마가 이불을 줘요 <Checkbox color="primary" />
          </div>
          <div>
            8. 아빠가 동생한테 맛있는 빵을 줘요 <Checkbox color="primary" />
          </div>
          <div>
            10. 아빠가 청소를 하는 엄마를 불러요 <Checkbox color="primary" />
          </div>
          <div>
            12. 아빠가 창문을 세게 닫으라고 해요 <Checkbox color="primary" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
