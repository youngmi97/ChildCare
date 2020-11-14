import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


class Vertical extends Component {
    state = {
        data:[
            {name:'이벤트1', y: this.props.event1, color:this.props.color},
            {name:'이벤트2', y: this.props.event2, color:this.props.color2}
        ]
    }

    render() {
        const series2 = this.state.data;    //App.js에서 데이터를 보내줄 예정
        const options = {
            chart: {
                type: 'column',
                width: 185,
                height: 170		// bar차트. 아무 설정이 없으면 line chart가 된다.
            },
            title: {
                text: this.props.chartName,
                style:{
                    fontSize:"15px"
                },
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['이벤트1', '이벤트2'],
                labels:{
                    
                }    

            },

            yAxis:{
                title: null,
                max: 4,
                min: 0,
                tickInterval:1,
                plotLines: [{
                    
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
export default Vertical;