import React, { Component } from 'react'
import Sidebar2 from '../components/Sidebar2'
import TextField from '@material-ui/core/TextField';
import Personal from '../components/assessment/Personal'


class Assessment extends Component {
    state = {
        step:1,
        personalCriticality:"",
        personalRecommendation: ""
    }
    
    onChange = (e) => this.setState({ [e.target.id]: e.target.value });

    render() {
        switch(this.state.step){
            case 1:
                return (
                    <div class="container" style={{display:"flex"}}>
                        <div style={{position:"absolute", top:"20%", width:"10%"}}>
                            <Sidebar2 step={this.state.step}/>
                        </div>
                        <div style={{position:"absolute", top:"20%", left:"30%"}}>
                            <Personal />
                            <div style={{marginBottom:"40px"}}>
                                <p>평가 결과:</p>{" "}
                                <input
                                    type="radio"
                                    value="high"
                                    name="criticality"
                                    id="personalCriticality"
                                    onChange={this.onChange}
                                />{" "}상{" "}
                                <input
                                    type="radio"
                                    value="middle"
                                    name="criticality"
                                    id="personalCriticality"
                                    onChange={this.onChange}
                                />{" "}중{" "}
                                <input
                                    type="radio"
                                    value="low"
                                    name="criticality"
                                    id="personalCriticality"
                                    onChange={this.onChange}
                                />{" "}하
                                <br />
                                
                            </div>
                            <div>
                                <TextField
                                    id="personalRecommendation"
                                    onChange={this.onChange}
                                    label="제언사항"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    style={{width:"100%"}}
                                />
                            </div>
                        </div>
                    </div>
                )

        }
        
    }
}

export default Assessment

