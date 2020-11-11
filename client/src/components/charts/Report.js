import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      width: "700px",
      height: "850px",
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
            이루어졌으 나， 3세 때 중이염을 앓은 병력이 있었다고 한다． 주
            양육자는 어머니였으나 직장이 있어서 아동을 놀이방에 맡겨 왔다고
            한다． 4년 째 해외에서 근무하고 있는 아 버지와 24개월된 여동생이
            있다． 언어발달 과정은， 의미있는 첫 낱말을 산출한 시기가 19개월경
            이었고， 두 낱말 조합의 문장을 사용하기 시작한 시기는
            27개월경이었다고 한다． 28개월경에 00 대학병원 소아정신과에서’신체
            발달 및 인지 발달에는 문제가 없으니 말을 많이 해주면서 기다려
            보라’는 진단 소견을 받은 바 있고， 5세 6개뭘에 00대학병원 이
            비인후과와 000신경정신과에서 각각 구강구조 및 청력 검사와， 심리
            검사를 받았다． 두 소견서에 의하면， 채 00 아동은 청력 및 신경상의
            문제나 정서 및 행동 발달 문제， 그리고 구강 구조에는 문제가 없다．
            다만， 한국 웩슬러 유아지능검사（K-WPPSI) 결과， 경계선급의 지능을
            가진 것으로 나타났다（전체 1Q79, 동작성 IQ 82, 언어성 IQ 76).{" "}
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
            표현의 제한성으로 인하여 복잡한 구문을 기능적으로 구성할 수 없었다．
            기본적 대 화가 가능하나 의문사 이해 능력 부족과 참조적
            의사소통（referential communication) 기술 부족은， 구문과
            문법형태소， 그리고 어휘 문제와 함께 대화의 단 절을 더욱더
            가중시키고 있었다． 또한 인과관계 인지 및 추론 능력 부족으로 인하여
            문제 해결력을 요하는 언어이해 및 표현과 과정 설명하기를 적절히
            수행하지 못 하였다． 아동은 조음 문제를 지니고 있다． 늦게 습득이
            되는 경구개음（ㅊ， ㅈ， ㅉ）에서 치조음화를 보이고， /／모음 앞의
            경구개음과 치조음（ㄷ， ㄸ， ㅌ）이 설측음으 로 왜곡된다． 파찰음，
            마찰음， 유음이 파열음화 되는 조음 양상이 두드러지며， 긴장음화
            현상을 보인다． 주변 사람들이 아동의 말을 35% 정도로만 알아듣기 때문
            에 이 같은 조음 능력은 의사소통을 더욱 어렵게 하고 있다． 아동의
            지적 능력은 하위 9%il e에 해당되는 경계선급 수준이나，
            동작성（performance) 지능 지수가 평균 범주에 속하므로， 향후 상위
            언어 기술에 관한 잠재능 력 발달 전망이 밝을 것으로 예상된다． 채 00
            아동은 언어가 폭발적으로 발달하는 시기인 2세에서 5세 까지 주된
            양육자의 언어 자극을 적절히 받지 못하였고， 3 세 이전의 언어발달이
            표현언어지체（Slow Expressive Language Delay）와 유사하기 때문에
            언어치료를 받는다면 언어적 개념화 능력에 진전을 가져올 것으 로
            보인다． 언어치료는 구문 및 문법형태소 이해와 음운적 부호화 능력
            증진을 위하여 청각적 처리（auditory processing）능력 향상을 돕는
            듣기 활동을 단계적으로 실시하 는 것에 초점을 두어야 할 것이다．
            사물에 대한 개념화를 위한 인지적 과제를 실시하고， 사건 포함형
            이야기 구조로 구성된 놀이를 구조화시켜 제공하는 것이 도움 이
            되겠다． 아동의 의사소통기능과 주변 사람들이 아동의 말을 알아듣는
            정도를 고려하면서， 조음 치료를 전반적인 언어 표현 능력 증진
            프로그램에 통합하는 것도 필요할 것이다． 채 00 아동의 언어발달을
            위하여 개별 언어치료를 주 3회 실시하고， 향후 필요하다면 소집단
            언어치료를 병행할 것을 제언한다．{" "}
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
