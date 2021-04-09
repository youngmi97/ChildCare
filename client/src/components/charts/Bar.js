import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Scatter extends Component {
  state = {
    data: [
      { name: "비단어 따라말하기", y: this.props.nwrScore },
      { name: "문장 따라말하기", y: this.props.srScore },
    ],
  };

  render() {
    const series2 = this.state.data; //App.js에서 데이터를 보내줄 예정
    const options = {
      chart: {
        type: "bar",
        width: 1000,
        height: 400, // bar차트. 아무 설정이 없으면 line chart가 된다.
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
        categories: ["비단어 따라말하기", "문장 따라말하기"],
        labels: {
          x: 10,

          align: "left",
          style: {
            fontSize: "16px",
            color: "white",
          },
        },
      },

      yAxis: {
        title: null,
        tickInterval: 20,
        plotLines: [
          {
            color: "#FF0000",
            width: 2,
            value: 50,
            label: {
              text: "평균",
              rotation: 0,
              x: 12,
              z: 0,
              style: {
                fontSize: "16px",
              },
            },
          },
        ],
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
          bar: {
            threshold: 20,
          },
          color: "#4863A0",
        },
      },
      series: [{ name: "기본정보", data: series2 }, { color: "#4863A0" }],
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
export default Scatter;
