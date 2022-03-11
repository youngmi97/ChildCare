import React, { useState, useContext, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuBar from '../../MenuBar'
import '../../../App.css'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Button, Table, Modal, Typography } from 'antd'
import Fade from 'react-reveal/Fade'
import BackgroundImage from './Main1.jpg'
import ISSCengkor from './ISSCengkor.jpg'
import ECSNU from "./ECSNU.jpg"
import ISSC2 from "./ISSC2.jpg"

const ImageWrapper = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 310px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #f7f7f7;

  @media (max-width: 430px) {
    height: auto;
  }
`

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
  min-height: 200vh;
  width: 100%;
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

  @media (max-width: 430px) {
    width: 100%;
    padding: 100px 0px;
  }
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

  @media (max-width: 430px) {
    margin: 0px;
    justify-content: center;
    font-size: ${props => props.size - 6 || 12}px;
  }
`
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  padding-top: 30px;

  @media (max-width: 430px) {
    width: 100%;
    height: auto;
  }
`

function BoardPage({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const [lang, setLang] = useState(match.params.lang)
  const classes = useStyles()
  const [numState, setNumState] = useState(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(() => setLang(match.params.lang), [match.params.lang])
  const { Title, Paragraph, Text, Link } = Typography
  const [newsState, setNewsState] = useState({
    status: 'idle',
    member: newsData[0],
  })
  const onChange = ({ num }) => {
    setNewsState({
      member: newsData[num],
    })
  }
  const showModal = num => {
    setTimeout(() => {
      setNewsState({
        member: newsData[num],
      })
      setIsModalVisible(true)
    }, 300)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const newsColumns = [
    //뉴스테이블
    {
      title: '번호',
      dataIndex: 'source',
      width: 80,
    },
    {
      title: '작성일',
      dataIndex: 'date',
      width: 150,
    },
    {
      title: '작성자',
      dataIndex: 'theme',
      width: 150,
    },

    {
      title: '제목',
      dataIndex: 'title',
      render: (text, record, index) => (
        <a onClick={() => showModal(index)}> {text} </a>
      ),
    },
  ]

  return (
    <div>
      <Wrapper>
        <MenuBar change={lang} />

        <RowWrapper>
          <ImageWrapper src={BackgroundImage}>
            <TextColumnWrapper>
              <TextWrapper size="25">
                {' '}
                {lang == 'kor' ? ' 연구소 게시판' : 'Board'}
                <br />
                <br />{' '}
              </TextWrapper>
              <TextWrapper size="18">
                {' '}
                {lang == 'kor'
                  ? ' ISayLab의 새로운 소식을 확인해보세요.'
                  : 'Check out ISayLAb`s news.'}{' '}
              </TextWrapper>
            </TextColumnWrapper>
          </ImageWrapper>
        </RowWrapper>

        <ContentsWrapper>
          <Fade cascade>
            <Table
              columns={newsColumns}
              size="large"
              rowKey={'id'}
              dataSource={newsData}
            />
          </Fade>
          <Modal
            title=" "
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
          >
            <Title
              level={4}
              style={{
                fontFamily: 'payboocExtraBold',
                marginTop: '2%',
                marginBottom: '2%',
              }}
            >
              {newsState.member.title}
            </Title>
            <img src={newsState.member.image} style={{width:'80%'}}/>
            <Paragraph
              style={{
                fontFamily: 'payboocMedium',
              }}
            >
              {newsState.member.contents}
            </Paragraph>
            <Paragraph
              style={{
                fontFamily: 'payboocMedium',
              }}
            >
              {newsState.member.contentsEng}
            </Paragraph>
            <Paragraph
              style={{
                fontFamily: 'payboocBold',
              }}
            >
              {newsState.member.theme}
            </Paragraph>
            <Paragraph
              style={{
                fontFamily: 'payboocBold',
              }}
            >
              {newsState.member.date}
            </Paragraph>
          </Modal>
        </ContentsWrapper>
      </Wrapper>
    </div>
  )
}

export default BoardPage

let newsData = [
  {
    date: '2022-03-10',
    source: 6,
    theme: '아이세이 연구소',
    title: '국제학교, 외국인학교 재학생을 위한 봄방학 캠프(I Say Lab Spring Break Camp for international and foreign school students.)',
    image:ISSC2,
    contents:
      '국제학교, 외국인학교 재학생을 위한 아이세이 연구소 봄방학 캠프가 진행됩니다. 캠프는 1주일 동안 "세상을 바꿔요!"라는 주제로 진행됩니다. 자세한 사항은 첨부이미지를 확인해주시기 바랍니다. 신청 및 문의는 전화(02-540-5242), 이메일(isaylab2020@gmail.com) 혹은 참가신청링크(https://docs.google.com/forms/d/e/1FAIpQLSf5ZzRgVsw2E8zWEY7OHQ9svGHkpcffw62lEtpRwpuOCMCpUg/viewform?usp=sf_link)를 통해 문의주시기 바랍니다.',
    contentsEng:
      'I Say Lab is running Spring Break Camp for international and foreign school students. The Camp is running for a week from March 28th to April 1st and the topic is "Change the world!". Please refer the attched image for more details. For registration or inquiries, cantact us via phone(02-540-5242), e-mail(isaylab2020@gmail.com) or click the participation link(https://docs.google.com/forms/d/e/1FAIpQLSf5ZzRgVsw2E8zWEY7OHQ9svGHkpcffw62lEtpRwpuOCMCpUg/viewform?usp=sf_link) ',
  }, 
  {
    date: '2022-02-22',
    source: 5,
    theme: '아이세이 연구소',
    title: '서울대학교 평생교육원에서 이중언어 부모 교육 프로그램을 개최합니다(Launching a Bilingual Parent training program at Extension College Seoul National University)',
    image:ECSNU,
    contents:
      '2022년 봄학기, 서울대학교 평생교육원에서 우리 아이 이중언어(bilingual)로 키우기 위한 언어 성장 프로젝트 부모교육 프로그램이 개강합니다. 아이세이 연구소 임동선 대표가 직접 강의하며, 국제화 시대 창의적이고 열린사고를 지닌 멀티링구얼 아동을 양육하기 위해 필요한 이론지식, 경험과 상담사례를 나눕니다.  교육은 2022년 3월 15일부터 3월 29일 매주 화요일 오전 10시~12시(총 3회), Zoom을 통한 실시간 온라인 강의로 진행됩니다. 수강신청 및 자세한 사항은 서울대학교 평생교육원(https://snui.snu.ac.kr/el/course/course_info_form.acl?COURSE_SEQ=350&LECTURE_SEQ=501)을 참고하시기 바랍니다.',
    contentsEng:
      'Extension College Seoul National University will run a parent education program called Language growth project to raise my child as bilingual. Dr. Yim will provide lectures via Zoom and share the theoretical knowledge, her clinical experiences and counsel cases. The program is running from March 15th to 29th, from 10 a.m to 12a.m every Tuesday. For registeration and more details, please refer to Extension College Seoul National University website(https://snui.snu.ac.kr/el/course/course_info_form.acl?COURSE_SEQ=350&LECTURE_SEQ=501).',
  }, 
  {
    date: '2022-01-28',
    source: 4,
    theme: '아이세이 연구소',
    title: '제 1회 ISSC 봄방학캠프 책읽기 프로그램을 시작합니다(Launching a brand new ISSC Spring camp; Book Reading Program!)',
    image:ISSCengkor,
    contents:
      '아이세이 연구소(I Say Lab)에서 제 1회 ISSC 봄방학캠프 (I SAY Spring Camp)를 개최합니다. 영어와 한국어 캠프에서 그림책을 매개로 다양한 언어놀이 활동을 함으로써 어휘력, 문해력, 상상력을 기르고 책읽기에 대한 흥미와 관심을 키울 수 있는 기회를 제공하려고 합니다. 많은 관심과 참여를 부탁드립니다. 구체적인 내용은 상단 이미지를 확인해 주시기 바랍니다.',
    contentsEng:
      'I Say Lab is running its first ever I Say Spring Camp (ISSC) this comping spring break. In the Engish and Korean camps, children will be able to develop vocabulary and literacy skills as well as creativity and a love for reading through a variety of language-related activities using storybooks as mediators. We invite you to join us for this special opportunity. For more information, please check the above image.',
  },
  {
    date: '2021-12-01',
    source: 3,
    theme: '아이세이 연구소',
    title: '주차 안내(Parking guide)',
    image:BackgroundImage,
    contents:
      'I Say Lab은 금강아케이드(서울특별시 강남구 압구정로 29길 68) 2층에 위치하고 있으며, 건물 주위에 유료 또는 무료로 주차할 수 있는 공간들이 있습니다. 주차와 관련된 구체적인 내용은 I Say Lab 홈페이지에서 ‘연구소 소개’의 ‘오시는 길‘ 메뉴를 확인해 주시기 바랍니다.',
    contentsEng:
      'I Say Lab is located on the second floor of Geumgang Arcade (68, Apgujeong-ro 29-gil, Gangnam-gu, Seoul), and there are commercial or free parking spaces around the building. For more parking information, please check the “Directions" and "Parking Guide" menus on the first screen of the I Say Lab website.',
  },
  {
    date: '2021-12-01',
    source: 2,
    theme: '아이세이 연구소',
    title:
      'I Say Lab이 압구정동에서 새롭게 시작합니다. (I Say Lab starts anew in Apgujeong-dong)',
    contents:
      '2020년 11월 이화여자대학교 기술지주회사 자회사로서 이화여자대학교에서 작은 연구소로 시작한 I Say Lab이 강남구 압구정동으로 확장 이전하여 새롭게 시작합니다. 찾아오시는 모든 분들이 늘 설레고 즐거운 마음으로 오실 수 있는 I Say Lab이 되기를 기대하는 마음으로, 아이들과 부모님들이 모두 편안하고 친밀하게 느낄 수 있는 공간으로 새단장했습니다. I Say Lab의 문을 열고 들어오시면 최고의 언어발달 전문가들이 진심을 다해 맞이해드릴 것입니다.',
    contentsEng:
      'I Say Lab, which started as a small research institute at Ewha Womans University as a subsidiary of Ewha Womans University`s technology holding company in November 2020, will expand and move to Apgujeong-dong, Gangnam-gu. With anticipation of making I Say Lab a place where everyone can visit with excitement and joy, we have refurbished it into a space where both children and parents can enjoy and feel comfortable. When you enter the I Say Lab, the best language development experts will greet you with all their hearts.',
  },
  {
    date: '2021-12-01',
    source: 1,
    theme: '아이세이 연구소',
    title: '공지사항 (Notice) ',
    contents:
      '교육 및 프로그램 참여 비용은 전화(02-540-5242) 또는 이메일(isaylab2020@gmail.com)로 문의주시기 바랍니다.결제는 신용카드, 계좌이체, 현금 결제 모두 가능하며, 계좌이체 또는 현금 결제 시 현금영수증을 발급해드립니다. * 본 기관은 바우처 제공 기관이 아닙니다.',
    contentsEng:
      'If you would like to inquire about the cost of the program, please call (02-540-5242) or email (isaylab2020@gmail.com). Payment can be made by credit card, account transfer, or cash payment, and a cash receipt will be issued for account transfer or cash payment. * This institution is not a voucher provider.',
  },
]
