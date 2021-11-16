import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Column extends Component {
  state = {
    data: [
      { name: "이벤트 1", y: this.props.event1 },
      { name: "이벤트 2", y: this.props.event2 },
    ],
  };

  render() {
    const series2 = this.state.data; //App.js에서 데이터를 보내줄 예정
    const options = {
      chart: {
        type: "bar",
        width: 1000,
        height: 200, // bar차트. 아무 설정이 없으면 line chart가 된다.
      },
      title: {
        text: "",
        style: {
          fontWeight: "bold",
        },
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: ["이벤트 1", "이벤트 2"],
        labels: "none",
      },

      yAxis: {
        title: null,
        tickInterval: 1,
        min: 0,
        max: 5,
      },

      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        series: {
          stacking: "normal",
          dataLabels: {
            enabled: false,
          },
          colorByPoint: true,
          colors: this.props.colors,
        },
      },
      series: [{ name: "기본정보", data: series2 }],
    };
    return (
      <Fragment>
        <div style={{ padding: "30px 0" }}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </Fragment>
    );
  }
}
export default Column;
