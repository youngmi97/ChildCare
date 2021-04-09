import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class StackedBar extends Component {
  state = {
    parent: this.props.parent,
    child: this.props.child,
  };

  render() {
    //App.js에서 데이터를 보내줄 예정
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
        categories: ["비율"],
        labels: "none",
      },

      yAxis: {
        title: null,
        tickInterval: 20,
        min: 0,
        max: 100,
      },

      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        series: {
          stacking: "percent",
          dataLabels: {
            enabled: false,
          },
          series: {
            stacking: "percent",
            dataLabels: {
              enabled: false,
            },
          },
        },
      },
      series: [{ data: [this.state.child] }, { data: [this.state.parent] }],
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
export default StackedBar;
