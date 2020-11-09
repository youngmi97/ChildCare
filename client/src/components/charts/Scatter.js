import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


class Scatter extends Component {
    state = {
        data: [
            {name:"교육력", y: this.props.eduScore},
            {name:"발달력", y: this.props.devScore},
            {name:"병력", y: this.props.illScore},
            {name:"가족력", y: this.props.famScore}
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
                text: '기본정보',
                style:{
                    fontWeight:"bold",
                },
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['교육력', '발달력', '병력', '가족력'],
                labels:{
                    x: 2,
                    align: 'left',
                    style:{
                        fontWeight:'bold'
                    },
                    
                }    

            },

            yAxis:{
                title: null,
                min:0,
                max:5
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
                        enabled: false,
                    },
                    zones: [
                        {value:1, color:'green'},
                        {value:4, color:'yellow'},
                        {value:5, color:'red'}
                    ]
                },
                
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