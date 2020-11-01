import React, { Component } from "react";
import Scatter from '../components/charts/Scatter'
import Bar from '../components/charts/Bar'


class Results extends Component {
    
    state = {
        data: [{name:'교육력', y:2}, {name:'발달력', y:3}, {name:'병력', y:1}, {name:'가족력', y:4}],
        data1: [{name:'비단어 따라말하기', y:90}, {name:'문장 따라말하기', y:70}]
    }
    
    render() {
      return (
        <div className="App">
            <Scatter
            data={this.state.data} />
            <Bar 
            data={this.state.data1}
            />
        </div>
      );
    }
  }

export default Results
