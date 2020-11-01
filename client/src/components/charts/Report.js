import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      width: '700px',
      height: '850px',
      margin: '60px 0',
      float: 'right'
    },
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined"> 
      <h3 style= {headerStyle}>전문가 평가</h3>

      <div style= {divStyle}> 
        <a style={style1}>기본정보</a>
          <ul style={{listStyleType:'circle', padding:'20px 50px'}}>
            <li>기본정보 : 평가내용 평가내용 평가내용 평가내용</li>
            <li>교육력 : 평가내용평가내용평가내용평가내용</li>
            <li>발달력: 평가내용평가내용평가내용평가내용평가내용</li>
            <li>병력 : 평가내용평가내용평가내용평가내용</li>
            <li>가족력 : 평가내용평가내용평가내용평가내용</li>
          </ul>
        <hr style= {{borderTop: '2px dotted #bbb'}} />
      </div>
      <div style= {divStyle}>
        <a style={style2}>자발화 분석</a>

        <ul style={{listStyleType:'circle', padding:'20px 50px'}}>
            <li>평가내용 평가내용 평가내용 평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
            <li>발평가내용평가내용평가내용평가내용평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
          </ul>

        <hr style= {{borderTop: '2px dotted #bbb'}} />
      </div>
      <div style= {divStyle}>
        <a style={style3}>처리능력</a>

        <ul style={{listStyleType:'circle', padding:'20px 50px'}}>
            <li>평가내용 평가내용 평가내용 평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
            <li>발평가내용평가내용평가내용평가내용평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
          </ul>

        <hr style= {{borderTop: '2px dotted #bbb'}} />
      </div>
      <div style= {divStyle}>
        <a style={style4}>총평</a>
        <p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
        
        
      </Paper>
    </div>
  );
}

const style1 = {
  fontWeight: "bold",
  fontSize:"12px",
  padding:"5px",
  background: "#1589FF",
  color:"#FFFFFF"
}
const style2 = {
  fontWeight: "bold",
  fontSize:"12px",
  padding:"5px",
  background: "#FFA62F",
  color:"#FFFFFF"
}
const style3 = {
  fontWeight: "bold",
  fontSize:"12px",
  padding:"5px",
  background: "#C12267",
  color:"#FFFFFF"
}
const style4 = {
  fontWeight: "bold",
  fontSize:"12px",
  padding:"5px",
  background: "#4CC417",
  color:"#FFFFFF"
}

const divStyle = {
  padding:' 5px 20px'
}

const headerStyle = {
  padding:' 30px 20px'
}