import React, { Component, Fragment } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Scatter extends Component {
  componentDidUpdate() {
    this.state.data = [
      { name: "교육력", y: this.props.eduScore },
      { name: "발달력", y: this.props.devScore },
      { name: "병력", y: this.props.illScore },
      { name: "가족력", y: this.props.famScore },
    ];
  }

  state = {
    data: [
      { name: "교육력", y: this.props.eduScore },
      { name: "발달력", y: this.props.devScore },
      { name: "병력", y: this.props.illScore },
      { name: "가족력", y: this.props.famScore },
    ],
  };

  render() {
    const series2 = this.state.data; //App.js에서 데이터를 보내줄 예정
    const options = {
      chart: {
        type: "bar",
        width: this.props.width,
        height: this.props.height, // bar차트. 아무 설정이 없으면 line chart가 된다.
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
        categories: ["교육력", "발달력", "병력", "가족력"],
        labels: {
          x: 20,
          align: "left",
          style: {
            fontSize: "14px",
            color: "white",
            fontWeight: "600",
          },
        },
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
        bar: {
          zones: [
            {
              value: 2.01, // Values up to 10 (not including) ...
              color: "#AEAEAE", // ... have the color blue.
            },
            {
              value: 4.01,
              color: "#F9BE00", // Values from 10 (including) and up have the color red
            },
            { color: "#F53535" },
          ],
        },

        series: {
          stacking: "normal",
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [{ name: "기본정보", data: series2 }],
    };
    return (
      <Fragment>
        <div style={{ padding: "30px 0" }}>
          <div style={{ marginBottom: "20px" }}>
            <button
              style={{
                width: "10px",
                height: "14px",
                backgroundColor: "#AEAEAE",
                margin: "0px 10px",
                border: "none",
              }}
            />
            이상없음
            <button
              style={{
                width: "10px",
                height: "14px",
                backgroundColor: "#F9BE00",
                margin: "0px 10px",
                border: "none",
              }}
            />
            주의요망
            <button
              style={{
                width: "10px",
                height: "14px",
                backgroundColor: "#F53535",
                margin: "0px 10px",
                border: "none",
              }}
            />{" "}
            위험
          </div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </Fragment>
    );
  }
}
export default Scatter;
