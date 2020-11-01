import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Column extends Component {
    state = {
        data:[
            {name:"부모", y:this.props.parent},
            {name:"아동", y:this.props.child}
        ]
    }
    render() {
        const series2 = this.state.data;    //App.js에서 데이터를 보내줄 예정
        const options = {
            chart: {
                type: 'pie',
                width: 200,
                height: 250			// bar차트. 아무 설정이 없으면 line chart가 된다.
            },
            title: {
                text: '발화비율',
                style:{
                    fontSize:'15px',
                },
                y: 30,
            },
            credits: {
                enabled: false
            },

            tooltip: {
                enabled:true
            },
            
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        formatter: function(){
                            var name = this.point.name
                            //var percentage = Math.round(this.percentage*100)/100 + ' %'
                            var result = name;
                            return result
                        },
                        distance: -40
                    },
                },

                pie:{

                }
            },
            series: [{ name: '발화비율' , data: series2 }]

        }
        return (
            <Fragment>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </Fragment>
            
        );
    }
}
export default Column;