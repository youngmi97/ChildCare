import React, { useState, useContext, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import MenuBar from '../../MenuBar'
import '../../../App.css'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import BackgroundImage from './Main1.jpg'
import DetailPage from './DetailPage'
import { withRouter } from 'react-router'

const useStyles = makeStyles(theme => ({
  modal: {},
  footer: {
    height: '20vh',
    backgroundColor: '#F9BE00',
    fontFamily: 'payboocBold',
  },
}))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150vh;
  width: 100%;
`

const ImageWrapper = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 70%;
  height: 310px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #f7f7f7;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  height: 100%;
`
const TextColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0);
  height: 50px;
  width: 50%;
  padding: 40px;
`

const TextWrapper = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 12}px;
  font-weight: ${props => props.weight || 'bold'};
  margin-top: 10px;
  margin-right: 30px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    font-size: ${props => props.size - 5 || 12}px;
  }
`

function LabPage({ match }) {
  const [lang, setLang] = useState(match.params.lang)
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const classes = useStyles()
  const [numState, setNumState] = useState(1)
  useEffect(() => setLang(match.params.lang), [match.params.lang])
  return (
    <div>
      <Wrapper>
        <MenuBar change={lang} />
        <RowWrapper>
          <ImageWrapper src={BackgroundImage}>
            <TextColumnWrapper style={{ fontFamily: 'payboocExtraBold' }}>
              <TextWrapper size="25">
                {' '}
                {lang == 'kor' ? '연구소 소개' : 'About Lab'} <br />
                <br />{' '}
              </TextWrapper>
              <TextWrapper size="18">
                {' '}
                {lang == 'kor'
                  ? ' ISayLab 연구소를 소개합니다.'
                  : 'Welcome To ISayLab'}
              </TextWrapper>
            </TextColumnWrapper>
          </ImageWrapper>
          <ColumnWrapper>
            <Button
              block
              onClick={() => {
                setNumState(1)
              }}
              style={{
                color: 'white',
                borderColor: '#F9BE00',
                height: '60px',
                borderRadius: '10px',
                fontFamily: 'payboocBold',
                fontSize: '15px',
                backgroundColor: '#F9BE00',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '연구소 소개' : 'Lab'}
            </Button>
            <Button
              onClick={() => {
                setNumState(2)
              }}
              block
              style={{
                color: 'white',
                borderColor: '#F9BE00',
                height: '60px',
                borderRadius: '10px',
                fontFamily: 'payboocBold',
                fontSize: '15px',
                backgroundColor: '#F9BE00',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '연구원 소개' : 'Researchers'}
            </Button>
            <Button
              onClick={() => {
                setNumState(3)
              }}
              block
              style={{
                color: 'white',
                borderColor: '#F9BE00',
                height: '60px',
                borderRadius: '10px',
                fontFamily: 'payboocBold',
                fontSize: '15px',
                backgroundColor: '#F9BE00',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '연구소 전경' : 'Photo'}
            </Button>
            <Button
              onClick={() => {
                setNumState(4)
              }}
              block
              style={{
                color: 'white',
                borderColor: '#F9BE00',
                height: '60px',
                borderRadius: '10px',
                fontFamily: 'payboocBold',
                fontSize: '15px',
                backgroundColor: '#F9BE00',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '이용안내' : 'Service'}
            </Button>
            <Button
              onClick={() => {
                setNumState(5)
              }}
              block
              style={{
                color: 'white',
                borderColor: '#F9BE00',
                height: '60px',
                borderRadius: '10px',
                fontFamily: 'payboocBold',
                fontSize: '15px',
                backgroundColor: '#F9BE00',
                marginBottom: '1px',
              }}>
              {lang == 'kor' ? '오시는 길' : 'Directions'}
            </Button>
          </ColumnWrapper>
        </RowWrapper>
        <DetailPage num={numState} lang={lang} />
      </Wrapper>

      <div className={classes.footer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: '3vh',
            marginBottom: '3vh',
          }}>
          <img src="/002.png" width="60px" height="60px" />
          <div
            style={{
              fontSize: '16px',
              color: 'white',
              marginBottom: '12px',
              marginLeft: '30px',
              fontWeight: '600',
            }}>
            개인정보 처리방침
          </div>
          <div
            style={{
              fontSize: '16px',
              marginBottom: '12px',
              marginLeft: '30px',
              fontWeight: '600',
            }}>
            이용 약관
          </div>
          <div
            style={{
              fontSize: '16px',
              marginBottom: '12px',
              marginLeft: '30px',
              fontWeight: '600',
            }}>
            윤리 경영
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '1.2vh',
            justifyContent: 'center',
          }}>
          <div>대표전화 02.3277.6720 </div>
          <div style={{ margin: '0px 1vw' }}>|</div>
          <div>대표이메일 sunyim@isay.com </div>
          <div style={{ margin: '0px 1vw' }}>|</div>
          <div>이화여자대학교 교육관A동 502호 </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(LabPage)
