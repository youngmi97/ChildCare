import React, { Component } from "react";
import Scatter from '../components/charts/Scatter'
import Bar from '../components/charts/Bar'
import Column from '../components/charts/Column'
import Report from '../components/charts/Report'


class Results extends Component {
    
    state = {
        data: [{name:'교육력', y:2}, {name:'발달력', y:3}, {name:'병력', y:1}, {name:'가족력', y:4}],
        data1: [{name:'비단어 따라말하기', y:90}, {name:'문장 따라말하기', y:70}],
        data2: 
          [{name:'부모', y:70}, {name:'아동', y:30}] 
      }
    
    
    render() {
      return (
        <div className="row" style={{}}> 
          <div style={{width:'40%', float:'left'}} >
            
            <Scatter
            data={this.state.data}
             />

            <div style={{display:"inline-block"}}>
              <h3 style= {{textAlign:'center'}}>비디오 분석</h3>
              <div style={{padding:0, margin:0, float:'left'}}>
                <Column 
                  data={this.state.data2}           
                  />
              </div>
              <div style={{marginTop:'70px', padding:'30px', float:'right'}}>
                  <h3>MLU: 4.21단어 </h3>
                  <h3>Turn-taking: 3.42회</h3>
              </div>
            </div>

            <Bar 
            data={this.state.data1}
            />

          </div>
          <div class="col" style={{width:'55%', float:'right'}}>
            <Report />
          </div>
        </div>
          
      );
    }
  }

export default Results
