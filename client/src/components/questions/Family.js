import React, { Component } from "react";
import {Grid} from '@material-ui/core'
import {Card} from '@material-ui/core'
import {withStyles} from '@material-ui/core'
import famTree from './famTree.png'
import famTree1 from './famTree1.png'
import famTree2 from './famTree2.png'


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
    return (

      /*<p style={{ display: "inline-block" }}>
          언어문제를 가진 가족이 있습니까?{" "}
        </p>
        <br />
        <div style={{ margin: "40px" }}>
          <input
            type="radio"
            value="Yes"
            name="familyHistory"
            id="familyHistory"
            onChange={this.props.onChange}
            checked={this.props.personal.familyHistory === "Yes"}
          />{" "}
          네
          <input
            type="radio"
            value="No"
            name="familyHistory"
            id="familyHistory"
            onChange={this.props.onChange}
            checked={this.props.personal.familyHistory === "No"}
          />{" "}
          아니오
        </div> */
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        xs={12}
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
              value= {this.state.paternalGrandparents}
              onClick = { () => this.setState({
                paternalGrandparents : !this.state.paternalGrandparents
              })}
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
                value= {this.state.maternalGrandparents}
                onClick = { () => this.setState({
                  maternalGrandparents : !this.state.maternalGrandparents
                })}
                checked={this.state.maternalGrandparents === true}
              />{" "}
              외할아버지/외할머니
          </Card>
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems = "center"
          xs={6}
        >
          <img src={famTree} width="250px" />
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems = "center"
          xs={6}
        >
          <img src={famTree} width="250px"/>
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
                value= {this.state.uncleAuntPaternal}
                onClick = { () => this.setState({
                  uncleAuntPaternal : !this.state.uncleAuntPaternal
                })}
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
              value= {this.state.father}
              onClick = { () => this.setState({
                father : !this.state.father
              })}
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
              value= {this.state.mother}
              onClick = { () => this.setState({
                mother : !this.state.mother
              })}
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
              value= {this.state.uncleAuntMaternal}
              onClick = { () => this.setState({
                uncleAuntMaternal : !this.state.uncleAuntMaternal
              })}
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
              value= {this.state.cousinPaternal}
              onClick = { () => this.setState({
                cousinPaternal : !this.state.cousinPaternal
              })}
              checked={this.state.cousinPaternal === true}
            />{" "}
            자녀(사촌)
          </Card>
        </Grid>
        <Grid
          container
          xs={6}
          justify= "center"
          alignItems="center"
        >
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
              value= {this.state.cousinMaternal}
              onClick = { () => this.setState({
                cousinMaternal : !this.state.cousinMaternal
              })}
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
            <p style = {{display:"inline-block"}}> 대상 아동</p>
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
              value= {this.state.brotherSister}
              onClick = { () => this.setState({
                brotherSister : !this.state.brotherSister
              })}
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

        <button style={btnStyle} onClick={this.props.onBack}>
          Back
        </button>
        <button style={btnStyle} onClick={this.props.onContinue}>
          Continue
        </button>
      </Grid>

      </Grid>

      
      /*<div  style ={{fontSize:'18px'}}>
        
          <div>
            <input
              type="checkbox"
              name="paternalGrandparents"
              id="paternalGrandparents"
              value= {this.state.paternalGrandparents}
              onClick = { () => this.setState({
                paternalGrandparents : !this.state.paternalGrandparents
              })}
              checked={this.state.paternalGrandparents === true}
            />{" "}
            친할아버지/친할머니
            <input
              type="checkbox"
              name="maternalGrandparents"
              id="maternalGrandparents"
              value= {this.state.maternalGrandparents}
              onClick = { () => this.setState({
                maternalGrandparents : !this.state.maternalGrandparents
              })}
              checked={this.state.maternalGrandparents === true}
            />{" "}
            외할아버지/외할머니
          </div>
          <br />
          <div>
            <input
              type="checkbox"
              name="uncleAuntPaternal"
              id="uncleAuntPaternal"
              value= {this.state.uncleAuntPaternal}
              onClick = { () => this.setState({
                uncleAuntPaternal : !this.state.uncleAuntPaternal
              })}
              checked={this.state.uncleAuntPaternal === true}
            />{" "}
            삼촌, 고모
            <input
              type="checkbox"
              name="father"
              id="father"
              value= {this.state.father}
              onClick = { () => this.setState({
                father : !this.state.father
              })}
              checked={this.state.father === true}
            />{" "}
            부
            <input
              type="checkbox"
              name="mother"
              id="mother"
              value= {this.state.mother}
              onClick = { () => this.setState({
                mother : !this.state.mother
              })}
              checked={this.state.mother === true}
            />{" "}
            모
            <input
              type="checkbox"
              name="uncleAuntMaternal"
              id="uncleAuntMaternal"
              value= {this.state.uncleAuntMaternal}
              onClick = { () => this.setState({
                uncleAuntMaternal : !this.state.uncleAuntMaternal
              })}
              checked={this.state.uncleAuntMaternal === true}
            />{" "}
            외삼촌/이모
          </div>
          <br />
          <div>
            <input
              type="checkbox"
              name="cousinPaternal"
              id="cousinPaternal"
              value= {this.state.cousinPaternal}
              onClick = { () => this.setState({
                cousinPaternal : !this.state.cousinPaternal
              })}
              checked={this.state.cousinPaternal === true}
            />{" "}
            자녀(사촌)
            <input
              type="checkbox"
              name="cousinMaternal"
              id="cousinMaternal"
              value= {this.state.cousinMaternal}
              onClick = { () => this.setState({
                cousinMaternal : !this.state.cousinMaternal
              })}
              checked={this.state.cousinMaternal === true}
            />{" "}
            자녀(사촌)
          </div>
          <br />
          <div>
            <p style = {{display:"inline-block"}}> 대상 아동</p> {" "}
            
            <input
              type="checkbox"
              name="brotherSister"
              id="brotherSister"
              value= {this.state.brotherSister}
              onClick = { () => this.setState({
                brotherSister : !this.state.brotherSister
              })}
              checked={this.state.brotherSister === true}
            />{" "}
            형제/자매
          </div>
        
        <br />
        <br />

        <button style={btnStyle} onClick={this.props.onBack}>
          Back
        </button>
        <button style={btnStyle} onClick={this.props.onContinue}>
          Continue
        </button>
      </div>*/
    );
  }
}
const btnStyle = {
  margin: "50px 20px",
  color: "#6C2DC7",
  backgroundColor: "white",
  border: "2px solid",
  borderColor: "#6C2DC7",
  fontSize: "13px",
  padding: "8px 13px",
};

const cardStyle= {
  padding:'15px 20px',
  margin: '10px 5px'
}

export default Family;
