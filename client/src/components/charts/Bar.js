import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


class Scatter extends Component {
    state = {
        data:[
            {name:'비단어 따라말하기', y: this.props.nwrScore},
            {name:'문장 따라말하기', y: this.props.srScore}
        ]
    }

    render() {
        const series2 = this.state.data;    //App.js에서 데이터를 보내줄 예정
        const options = {
            chart: {
                type: 'bar',
                width: 400,
                height: 250			// bar차트. 아무 설정이 없으면 line chart가 된다.
            },
            title: {
                text: '',
                style:{
                    fontWeight:"bold",
                },
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['비단어 따라말하기', '문장 따라말하기'],
                labels:{
                    x: 2,
                    y: -35,
                    align: 'left',
                    style:{
                        fontWeight:'bold'
                    }
                }    

            },

            yAxis:{
                title: null,
                plotLines: [{
                    color: '#FF0000',
                    width: 2,
                    value: 70,
                    label: {text:'평균', rotation: 0, z:0}
                }]
            },

            legend: {
                enabled: false
            },
            tooltip: {
                enabled:false
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                    },
                    bar:{
                        threshold:80
                    }
                }
            },
            series: [{ name: '기본정보' , data: series2 }]

        }
        return (
            <Fragment>
                 <div style={{padding:'50px 0'}}>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </Fragment>
        );
    }
}
export default Scatter;