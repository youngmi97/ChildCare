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
  var nwrResult = 0;
  var srResult = 0;
  const handleNWRChange = (event) => {
    setNWRState({ ...nwrState, [event.target.name]: event.target.checked });
  };
  const handleSRChange = (event) => {
    setSRState({ ...srState, [event.target.name]: event.target.checked });
  };

  const [nwrState, setNWRState] = useState({
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
  });

  const [srState, setSRState] = useState({
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

  const calcNWRScore = () => {
    Object.values(nwrState).map((value) => {
      if (value === true) {
        nwrResult = nwrResult + 1;
      }
    });
    return nwrResult;
  };

  const calcSRScore = () => {
    Object.values(srState).map((value) => {
      if (value === true) {
        srResult = srResult + 1;
      }
    });
    return srResult;
  };
  console.log(calcNWRScore());
  console.log(calcSRScore());

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
              checked={nwrState.nwr1}
              onChange={handleNWRChange}
              name="nwr1"
            />
          </div>

          <div>
            4. 까다굳{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr4}
              onChange={handleNWRChange}
              name="nwr4"
            />
          </div>
          <div>
            7.토보가인{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr7}
              onChange={handleNWRChange}
              name="nwr7"
            />
          </div>
          <div>
            10.조메누버리{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr10}
              onChange={handleNWRChange}
              name="nwr10"
            />
          </div>
          <div>
            13.로밉띠르저니{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr13}
              onChange={handleNWRChange}
              name="nwr13"
            />
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
            2. 조나{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr2}
              onChange={handleNWRChange}
              name="nwr2"
            />
          </div>
          <div>
            5. 모단기{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr5}
              onChange={handleNWRChange}
              name="nwr5"
            />
          </div>

          <div>
            8.푸가태지{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr8}
              onChange={handleNWRChange}
              name="nwr8"
            />
          </div>

          <div>
            11.레빌애티머{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr11}
              onChange={handleNWRChange}
              name="nwr11"
            />
          </div>
          <div>
            14.보마데낭까두{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr14}
              onChange={handleNWRChange}
              name="nwr14"
            />
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
            3. 퍼틱{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr3}
              onChange={handleNWRChange}
              name="nwr3"
            />
          </div>
          <div>
            6.니아토{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr6}
              onChange={handleNWRChange}
              name="nwr6"
            />
          </div>
          <div>
            9.드반거노{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr9}
              onChange={handleNWRChange}
              name="nwr9"
            />
          </div>
          <div>
            12.바즘다거니{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr12}
              onChange={handleNWRChange}
              name="nwr12"
            />
          </div>
          <div>
            15.미기돋아캐바{" "}
            <Checkbox
              color="primary"
              checked={nwrState.nwr15}
              onChange={handleNWRChange}
              name="nwr15"
            />
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
            1. 그림을 연필로 그려요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr1}
              onChange={handleSRChange}
              name="sr1"
            />
          </div>
          <div>
            3. 엄마가 치마를 입어요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr3}
              onChange={handleSRChange}
              name="sr3"
            />
          </div>
          <div>
            5. 아빠가 힘들어서 하품을 크게 해요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr5}
              onChange={handleSRChange}
              name="sr5"
            />
          </div>
          <div>
            7. 동생이 작은 칫솔로 이빨을 닦아요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr7}
              onChange={handleSRChange}
              name="sr7"
            />
          </div>
          <div>
            9. 친구가 밖에서 그네를 재밌게 타요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr9}
              onChange={handleSRChange}
              name="sr9"
            />
          </div>
          <div>
            11. 동생은 주사를 맞는 것을 싫어해요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr11}
              onChange={handleSRChange}
              name="sr11"
            />
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
            2. 동생이 그림책을 봐요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr2}
              onChange={handleSRChange}
              name="sr2"
            />
          </div>
          <div>
            4. 엄마가 청소를 하고 걸레를 빨아요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr4}
              onChange={handleSRChange}
              name="sr4"
            />
          </div>
          <div>
            6. 동생이 추우면 엄마가 이불을 줘요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr6}
              onChange={handleSRChange}
              name="sr6"
            />
          </div>
          <div>
            8. 아빠가 동생한테 맛있는 빵을 줘요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr8}
              onChange={handleSRChange}
              name="sr8"
            />
          </div>
          <div>
            10. 아빠가 청소를 하는 엄마를 불러요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr10}
              onChange={handleSRChange}
              name="sr10"
            />
          </div>
          <div>
            12. 아빠가 창문을 세게 닫으라고 해요{" "}
            <Checkbox
              color="primary"
              checked={srState.sr12}
              onChange={handleSRChange}
              name="sr12"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
