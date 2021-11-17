import React, { useContext, useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import { useHistory } from 'react-router-dom'

import { AuthContext } from '../context/auth'

function MenuBar({ change }) {
  const { user, logout } = useContext(AuthContext)
  const pathname = window.location.pathname
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const [prof, setProf] = useState(false)
  const [message, setMessage] = useState('')
  const [langState, setLangState] = useState(now)

  const path = pathname === '/' ? 'home' : pathname.substr(1)
  const [activeItem, setActiveItem] = useState(path)
  console.log(window.location.pathname.split('/'))
  let now = window.location.pathname.split('/')[1]

  const onLanguage = () => {
    setTimeout(() => {
      setLangState('kor')
      history.push(`/${now}/kor`)
    }, 100)
  }
  const onLanguage2 = () => {
    setTimeout(() => {
      setLangState('eng')
      history.push(`/${now}/eng`)
    }, 100)
  }
  const menuBar =
    change == 'kor' ? (
      <Menu
        secondary
        pointing
        size="massive"
        fixed="top"
        style={{
          height: '7vh',
          backgroundColor: '#F9BE00',
          padding: '5px',
          margin: '0px',
          borderBottom: 'none',
          fontSize: '1.8vh',
          alignItems: 'center',
        }}>
        <a
          style={{
            marginRight: '30px',
            marginLeft: '50px',
            color: '#FFFFFF',
            fontSize: '25px',
            fontWeight: '600',
          }}
          href="/main/kor">
          {' '}
          <img src="/002.png" width="50px" height="50px" />
        </a>

        <Menu.Menu position="right" style={{ marginRight: '30px' }}>
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="홈"
            onClick={() => history.push(`/main/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="연구소소개"
            onClick={() => history.push(`/lab/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="프로그램소개"
            onClick={() => history.push(`/program/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="게시판"
            onClick={() => history.push(`/board/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            onClick={onLanguage2}
            name="Eng"
          />
        </Menu.Menu>
      </Menu>
    ) : (
      <Menu
        secondary
        pointing
        size="massive"
        fixed="top"
        style={{
          height: '7vh',
          backgroundColor: '#F9BE00',
          padding: '5px',
          margin: '0px',
          borderBottom: 'none',
          fontSize: '1.8vh',
          alignItems: 'center',
        }}>
        <a
          style={{
            marginRight: '30px',
            marginLeft: '50px',
            color: '#FFFFFF',
            fontSize: '25px',
            fontWeight: '600',
          }}
          href="/main/eng">
          {' '}
          <img src="/002.png" width="50px" height="50px" />
        </a>

        <Menu.Menu position="right" style={{ marginRight: '30px' }}>
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="Home"
            onClick={() => history.push(`/main/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="Lab"
            onClick={() => history.push(`/lab/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="Program"
            onClick={() => history.push(`/program/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="Board"
            onClick={() => history.push(`/board/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="한국어"
            onClick={onLanguage}
          />
        </Menu.Menu>
      </Menu>
    )

  return <div style={{ height: '70px', margin: '0px' }}>{menuBar}</div>
}

export default MenuBar
