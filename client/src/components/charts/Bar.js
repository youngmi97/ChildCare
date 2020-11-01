import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Scatter extends Component {
    render() {
        const series2 = this.props.data;    //App.js에서 데이터를 보내줄 예정
        const options = {
            chart: {
                type: 'bar'		// bar차트. 아무 설정이 없으면 line chart가 된다.
            },
            title: {
                text: '기본정보'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'category',
            },
            yAxis:{
                title: null
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
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
        );
    }
}
export default Scatter;