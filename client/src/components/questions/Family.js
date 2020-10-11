import React, { Component } from "react";

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

  render() {
    return (
      <div>
        <p style={{ display: "inline-block" }}>
          언어문제를 가진 가족이 있습니까?{" "}
        </p>
        <br />
        <div>
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
          <div>
            <input
              type="checkbox"
              name="paternalGrandparents"
              id="paternalGrandparents"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={this.state.paternalGrandparents === false}
            />{" "}
            친할아버지/친할머니
            <input
              type="checkbox"
              name="maternalGrandparents"
              id="maternalGrandparents"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            외할아버지/외할머니
          </div>
          <br />
          <div>
            <input
              type="checkbox"
              name="uncleAuntPaternal"
              id="uncleAuntPaternal"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            삼촌, 고모
            <input
              type="checkbox"
              name="father"
              id="father"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            부
            <input
              type="checkbox"
              name="mother"
              id="mother"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            모
            <input
              type="checkbox"
              name="uncleAuntMaternal"
              id="uncleAuntMaternal"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            외삼촌/이모
          </div>
          <br />
          <div>
            <input
              type="checkbox"
              name="cousinPaternal"
              id="cousinPaternal"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            자녀(사촌)
            <input
              type="checkbox"
              name="cousinMaternal"
              id="cousinMaternal"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            자녀(사촌)
          </div>
          <br />
          <div>
            <input
              type="checkbox"
              name="target"
              id="target"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            대상 아동
            <input
              type="checkbox"
              name="brotherSister"
              id="brotherSister"
              value={this.checked}
              onChange={this.props.onChange}
              onClick={this.clickMethod}
              checked={false}
            />{" "}
            형제/자매
          </div>
        </div>
      </div>
    );
  }
}

export default Family;
