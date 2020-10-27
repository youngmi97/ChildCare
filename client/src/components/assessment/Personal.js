import React from 'react'

export default function Personal() {

    const brothers = "형제 있음, 장애 없음"
    const homeLang = "한국어"
    const schoolLang = "한국어, 영어"
    const problem = "이해는 하는 거 같은데 표현을 전혀 못한다"
    const cause = "어릴 때 너무 힘들어서 자극을 잘 못 준 것 같다"
    const improvement = "개선되고 있다고 생각한다"
    const awareness = "인지하는거 같다" 


    return (
        <div style={{marginBottom:"40px"}}>
            형제 자매 여부:  <span style={{fontWeight:"bold", fontSize:"15px"}}>{brothers}</span><br/>
            가정에서 주로 사용하는 언어: <span style={{fontWeight:"bold"}}>{homeLang}</span><br/>
           어린이집/유치원에서 주로 사용하는 언어: <span style={{fontWeight:"bold"}}>{schoolLang}</span><br/>
            아동이 가지고 있는 언어문제: <span style={{fontWeight:"bold", fontSize:"15px"}}>{problem}</span><br/>
            아동의 언어문제의 원인이 무엇이라고 생각하는지: <span style={{fontWeight:"bold", fontSize:"15px"}}>{cause}</span><br/>
            개선 여부: <span style={{fontWeight:"bold", fontSize:"15px"}}>{improvement}</span><br/>
            아동이 언어문제를 인지하는지: <span style={{fontWeight:"bold", fontSize:"15px"}}>{awareness}</span><br/>

        </div>
    )
}
