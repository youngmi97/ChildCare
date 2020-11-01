import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Scatter extends Component {
    render() {
        const series2 = this.props.data;    //App.js에서 데이터를 보내줄 예정
        const options = {
            chart: {
                type: 'scatter',
                width: 400,
                height: 250		// bar차트. 아무 설정이 없으면 line chart가 된다.
            },
            title: {
                text: '기본정보',
                style:{
                    fontWeight:"bold"
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'category',
                labels:{
                    style:{
                        fontFamily:"sans-serifa", 
                        fontSize:'15px'
                    }
                }
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
                    marker:{
                        radius: 7
                    },

                    dataLabels: {
                        enabled: true,
                        y: -15,
                        style:{
                            fontSize: '13px'
                        }
                    }
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