import React, { Component, Fragment } from "react";
import Highcharts, { Point } from "highcharts";
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
          dataLabels: [
            {
              enabled: true,
            },
          ],
        },
      },
      series: [
        {
          dataLabels: [
            {
              format: "아동",
              style: {
                fontSize: "14px",
                color: "#FFFFFF",
                textDecoration: "none",
              },
            },
          ],
          data: [this.state.child],
          color: "#4863A0",
          name: "아동",
        },
        {
          dataLabels: [
            {
              format: "부모",
              style: { fontSize: "14px", color: "#FFFFFF" },
            },
          ],
          data: [this.state.parent],
          color: "#F9BE00",
          name: "부모",
        },
      ],
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
