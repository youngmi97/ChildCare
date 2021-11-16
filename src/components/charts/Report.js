import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      width: "700px",
      height: "900px",
      margin: "60px 0",
      float: "right",
    },
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <h3 style={headerStyle}>전문가 평가</h3>

        <div style={divStyle}>
          <a style={style1}>기본정보</a>
          {/* <ul style={{ listStyleType: "circle", padding: "20px 50px" }}>
            <li>기본정보 : 평가내용 평가내용 평가내용 평가내용</li>
            <li>교육력 : 평가내용평가내용평가내용평가내용</li>
            <li>발달력: 평가내용평가내용평가내용평가내용평가내용</li>
            <li>병력 : 평가내용평가내용평가내용평가내용</li>
            <li>가족력 : 평가내용평가내용평가내용평가내용</li>
          </ul> */}
          <p style={{ padding: "20px 50px" }}>
            채 00 아동은 5세 9개월의 남아로서， 표현이 서툴고 발음이 불분명하여
            가족들과 유치원 친구들이 아동의 말을 잘 못 알아들으며， 이로 인하여
            가족 및 또래 친구 들과의 의사소통에 곤란을 겪고 있어 유치원에서의
            제반 생활 적응이 어렵다는 것을 주소로 언어치료실에 내원하였다．
            어머니 보고에 의하면， 임신 중 특이한 이상 은 없었으며， 태어날 때
            체중 3.2 kg으로 정상 분만하였으며 건강상태나 정서상태 역시
            양호했다고 한다． 신체발달 및 대소변 가리기 역시 정상적으로
            이루어졌으 나， 3세 때 중이염을 앓은 병력이 있었다고 한다．{" "}
          </p>
          <hr style={{ borderTop: "2px dotted #bbb" }} />
        </div>
        <div style={divStyle}>
          <a style={style2}>자발화 분석</a>

          {/* <ul style={{ listStyleType: "circle", padding: "20px 50px" }}>
            <li>평가내용 평가내용 평가내용 평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
            <li>발평가내용평가내용평가내용평가내용평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
          </ul> */}
          <p style={{ padding: "20px 50px" }}>
            아동은 검사 시， 웃는 얼굴로 검사자의 지시에 순순히 잘 따랐고，
            놀이에서 공동 주의（(joint attention)를 형성하는 능력 역시 또래
            아동에 비하여 볼 때 적절하 였다． 이는 아동의 적절한 주의집중 능력
            및 호혜적인（reciprocal) 관계 형성 능력을 시사해주는 것이었다． 다만
            놀이에 대한 관심이 자동차 놀이에 집중되어 있 어 대행자 놀이（agent
            play), 사회적인 역할 놀이（role play)와 같은 상징행동이 관찰되지
            않았다．{" "}
          </p>

          <hr style={{ borderTop: "2px dotted #bbb" }} />
        </div>
        <div style={divStyle}>
          <a style={style3}>처리능력</a>

          {/* <ul style={{ listStyleType: "circle", padding: "20px 50px" }}>
            <li>평가내용 평가내용 평가내용 평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
            <li>발평가내용평가내용평가내용평가내용평가내용</li>
            <li>평가내용평가내용평가내용평가내용</li>
          </ul> */}
          <p style={{ padding: "20px 50px" }}>
            체언을 표현할 때 아동이’수혜자’를 사용하지 않고， 수식을 사용할 때，
            이유I, 비교‘,’양보’를 사용하지 않으며， 기능적 구성요소에서’접속’을
            사용하지 않았는데， 이 결과는 김영태（1998）의 자료에 의하면，
            아동의 의미유형 발달이 3세 수준에도 미치지 못하고 있음을 알 수
            있다． 의미관계 유형에서， 3낱말．4낱말 사용이 매우 제한적이었으며，
            문장간 의미관계유형은 출현하지 않았다． 총 80개의 발화 중 낱말
            조합수에 따라 가장 많이 산출한 순서대로 의미관계 유형을 정리하면
            다음과 같 다．{" "}
          </p>

          <hr style={{ borderTop: "2px dotted #bbb" }} />
        </div>
        <div style={divStyle}>
          <a style={style4}>총평</a>
          <p style={{ padding: "20px 50px" }}>
            요약하면， 채 00 (5;9）는 조음문제를 동반한 수용 및 표현 언어
            발달지체로 진단되었다． 아동의 수용 및 표현 언어연령이 대략 3세
            6개월 정도로 평가되어 아동 의 생활연령（5세 9개월）에 비해 많이
            지체되어 있는 것으로 나타났다． 또래 아동의 발달을 따라가고 있는
            수준에 있는（5세r5세 5개월） 어휘 이해능력에 비하여 어휘 다양도가
            낮았고， 사용하고 있는 문장은 주로 단문 이며， 형태소의 이해 및
            표현의 제한성으로 인하여 복잡한 구문을 기능적으로 구성할 수 없었다．{" "}
          </p>
        </div>
      </Paper>
    </div>
  );
}

const style1 = {
  fontWeight: "bold",
  fontSize: "12px",
  padding: "5px",
  background: "#1589FF",
  color: "#FFFFFF",
};
const style2 = {
  fontWeight: "bold",
  fontSize: "12px",
  padding: "5px",
  background: "#FFA62F",
  color: "#FFFFFF",
};
const style3 = {
  fontWeight: "bold",
  fontSize: "12px",
  padding: "5px",
  background: "#C12267",
  color: "#FFFFFF",
};
const style4 = {
  fontWeight: "bold",
  fontSize: "12px",
  padding: "5px",
  background: "#4CC417",
  color: "#FFFFFF",
};

const divStyle = {
  padding: " 5px 20px",
};

const headerStyle = {
  padding: " 30px 20px",
};
