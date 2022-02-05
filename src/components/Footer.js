import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
 height: 20vh;
 background-color: #F9BE00;
 font-family: 'payboocBold';

`



function Footer({change}) {


  //모바일 여부 감지
  const [isMobile, setIsMobile] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)
  const resizingHandler = () => {
    if (window.innerWidth <= 430) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    if (window.innerWidth <= 430) {
      setIsMobile(true)
    }

    window.addEventListener('resize', resizingHandler)
    return () => {
      window.removeEventListener('resize', resizingHandler)
    }
  }, [])

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: '3vh',
          marginBottom: '3vh',
        }}
      >
        <img src="/002.png" width="60px" height="60px" />
      </div>
      <div
        style={
          isMobile
            ? {
                backgroundColor: '#F9BE00',
                display: 'flex',
                fontWeight: 'bold',
                fontSize: '10px',
                alignItems: 'center',
                flexDirection: 'column',
                paddingBottom: '20px',
              }
            : {
                backgroundColor: '#F9BE00',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                fontWeight: 'bold',
                fontSize: '16px',
                marginTop: '1.2vh',
                justifyContent: 'center',
              }
        }
      >
        <div> {change == 'kor' ? '대표전화번호 : 02-540-5242' : 'Tel. 02.540.5242'} </div>
        {isMobile ? <></> : <div style={{ margin: '0px 1vw' }}>|</div>}
        <div>
        {change == 'kor' ? '대표이메일 : isaylab2020@gmail.com' : 'Email : isaylab2020@gmail.com '}</div>
        {isMobile ? <></> : <div style={{ margin: '0px 1vw' }}>|</div>}
        <div>
        {change == 'kor' ? '주소: 서울특별시 강남구 압구정로 29길 68, 금강아케이드상가 2층' : '2F Geumgangarcade 68, Apgujeong-ro 29-gil, Gangnam-gu, Seoul'}
          
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
