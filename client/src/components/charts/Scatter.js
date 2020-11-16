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
                width: this.props.width,
                height: this.props.height			// bar차트. 아무 설정이 없으면 line chart가 된다.
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
                        color: 'white',
                        fontWeight:'bold'
                    },
                    
                }    

            },

            yAxis:{
                title: null,
                plotBands: [
                    {color:'#C3FDB8', from:0 , to: 1},
                    {color:'#FFF8C6',  from:1 , to:4 },
                    {color:'#FF7F50', from:4 , to:5 },
                    
                ],
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
                bar: {
                    color: '#1589FF'
                },

                series: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                    },
                    
                },
                
            },
            series: [{ name: '기본정보' , data: series2 }]

        }
        return (
            <Fragment>
                 <div style={{padding:'50px 0'}}>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                    <div style = {{marginLeft:'60px'}}>
                        <button style={{width:'10px', height:'14px', backgroundColor:'#C3FDB8', margin:'0px 10px', border: 'none'}} />이상없음 
                        <button style={{width:'10px', height:'14px', backgroundColor:'#FFF8C6' , margin:'0px 10px' , border: 'none'}} />주의요망 
                        <button style={{width:'10px', height:'14px', backgroundColor:'#FF7F50' , margin:'0px 10px',  border: 'none'}} /> 위험
                    </div>
                    
                </div>
        
            </Fragment>
        );
    }
}
export default Scatter;