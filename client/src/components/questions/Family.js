import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import famTree from "./famTree.png";
import famTree1 from "./famTree1.png";
import famTree2 from "./famTree2.png";

const styles = (theme) => ({
  title: {
    marginTop: "25px",
    marginLeft: "90px",
    marginRight: "90px",
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Noto Sans KR', sans-serif;",
  },
  subtitle: {
    margin: "10px 0px",
    marginLeft: "110px",
    marginRight: "110px",
    marginBottom: "30px",
    fontSize: "13px",
    fontWeight: "normal",
    fontFamily: "'Roboto KR', sans-serif;",
  },
  tree: {
    fontFamily: " 'Roboto KR', sans-serif;",
    fontSize: "15px",
    fontWeight: "400",
  },
});

class Family extends Component {
  state = {
    paternalGrandparents: false,
    maternalGrandparents: false,
    uncleAuntMaternal: false,
    uncleAuntPaternal: false,
    cousinMaternal: false,
    cousinPaternal: false,
    father: false,
    mother: false,
    target: false,
    brotherSister: false,
  };

  componentDidUpdate() {
    var result = "";
    for (var name in this.state) {
      if (this.state[name] === true) {
        result = result + " " + name;
      }
    }
    this.props.personal.familyMember = result;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.title}
        >
          <p>가족력</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.subtitle}
        >
          <p>언어문제를 가진 가족을 모두 선택해 주세요.</p>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.tree}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="paternalGrandparents"
                id="paternalGrandparents"
                value={this.state.paternalGrandparents}
                onClick={() =>
                  this.setState({
                    paternalGrandparents: !this.state.paternalGrandparents,
                  })
                }
                checked={this.state.paternalGrandparents === true}
              />{" "}
              친할아버지/친할머니
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="maternalGrandparents"
                id="maternalGrandparents"
                value={this.state.maternalGrandparents}
                onClick={() =>
                  this.setState({
                    maternalGrandparents: !this.state.maternalGrandparents,
                  })
                }
                checked={this.state.maternalGrandparents === true}
              />{" "}
              외할아버지/외할머니
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <img src={famTree} width="250px" />
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <img src={famTree} width="250px" />
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="uncleAuntPaternal"
                id="uncleAuntPaternal"
                value={this.state.uncleAuntPaternal}
                onClick={() =>
                  this.setState({
                    uncleAuntPaternal: !this.state.uncleAuntPaternal,
                  })
                }
                checked={this.state.uncleAuntPaternal === true}
              />{" "}
              삼촌, 고모
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="father"
                id="father"
                value={this.state.father}
                onClick={() =>
                  this.setState({
                    father: !this.state.father,
                  })
                }
                checked={this.state.father === true}
              />{" "}
              부
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="mother"
                id="mother"
                value={this.state.mother}
                onClick={() =>
                  this.setState({
                    mother: !this.state.mother,
                  })
                }
                checked={this.state.mother === true}
              />{" "}
              모
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="uncleAuntMaternal"
                id="uncleAuntMaternal"
                value={this.state.uncleAuntMaternal}
                onClick={() =>
                  this.setState({
                    uncleAuntMaternal: !this.state.uncleAuntMaternal,
                  })
                }
                checked={this.state.uncleAuntMaternal === true}
              />{" "}
              외삼촌/이모
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <img src={famTree1} width="200px" />
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={6}
          >
            <img src={famTree2} width="250px" />
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <img src={famTree1} width="200px" />
          </Grid>

          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="cousinPaternal"
                id="cousinPaternal"
                value={this.state.cousinPaternal}
                onClick={() =>
                  this.setState({
                    cousinPaternal: !this.state.cousinPaternal,
                  })
                }
                checked={this.state.cousinPaternal === true}
              />{" "}
              자녀(사촌)
            </Card>
          </Grid>
          <Grid container xs={6} justify="center" alignItems="center">
            <img src={famTree} width="250px" />
          </Grid>

          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="cousinMaternal"
                id="cousinMaternal"
                value={this.state.cousinMaternal}
                onClick={() =>
                  this.setState({
                    cousinMaternal: !this.state.cousinMaternal,
                  })
                }
                checked={this.state.cousinMaternal === true}
              />{" "}
              자녀(사촌)
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <p style={{ display: "inline-block" }}> 대상 아동</p>
            </Card>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={3}
          >
            <Card style={cardStyle}>
              <input
                type="checkbox"
                name="brotherSister"
                id="brotherSister"
                value={this.state.brotherSister}
                onClick={() =>
                  this.setState({
                    brotherSister: !this.state.brotherSister,
                  })
                }
                checked={this.state.brotherSister === true}
              />{" "}
              형제/자매
            </Card>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
          >
            <button style={btnStyle1} onClick={this.props.onBack}>
              이전 단계로 이동
            </button>
            <button style={btnStyle} onClick={this.props.onContinue}>
              다음 단계로 이동
            </button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const btnStyle = {
  margin: "50px",
  backgroundColor: "#FFEBB8",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  outlineColor: "#FFB800",
  fontWeight: "600",
};

const btnStyle1 = {
  margin: "50px",
  backgroundColor: "#E4E4E4",
  width: "150px",
  height: "50px",
  border: "none",
  fontSize: "13px",
  outlineColor: "#626567",
  fontWeight: "600",
};

const cardStyle = {
  padding: "15px 20px",
  margin: "10px 5px",
};

export default withStyles(styles)(Family);
