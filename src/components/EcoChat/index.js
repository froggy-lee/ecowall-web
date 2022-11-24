import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import TextBox from './UsersChat'
import Admin from './AdminChat'
import { useSelector, useDispatch } from 'react-redux'
import { selectProfile } from '/src/store/slice/users'
import { showLoginModal } from '/src/store/slice/modal'
import {
  selectRoom,
  getRoomAciton,
  createAdminRoomAction
} from '/src/store/slice/chat'
import io from 'socket.io-client'
import { BASE_API_URL } from '/src/constants'
import { toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'

function ChatBox() {
  const [socket, setSocket] = useState(null)
  const profile = useSelector(selectProfile)
  const getRoom = useSelector(selectRoom)
  const dispatch = useDispatch()
  const { t } = useTranslation('header')
  const [chatBoxActive, setChatBoxActive] = useState(false)
  const [buttonActive, setButtonActive] = useState([
    {
      name: `${t('geraralRoom')}`,
      active: true
    },
    {
      name: `${t('supportRoom')}`,
      active: false
    }
  ])

  useEffect(() => {
    const newSocket = io(BASE_API_URL)
    setSocket(newSocket)
    return () => newSocket.close()
  }, [setSocket])

  //Get Room
  useEffect(() => {
    if (profile) {
      try {
        dispatch(getRoomAciton())
      } catch (error) {
        toast.error(error.message)
      }
    }
  }, [dispatch, profile])

  const handleClickButton = button => {
    const { name, active } = button
    const { rows } = getRoom
    if (name === 'Support' && rows.length < 2) {
      dispatch(createAdminRoomAction()).unwrap()
      dispatch(getRoomAciton())
    }
    if (!active) {
      let newButton = buttonActive.map(item =>
        item.name === name
          ? {
              name: item.name,
              active: true
            }
          : {
              name: item.name,
              active: false
            }
      )
      setButtonActive(newButton)
    }
  }

  const handleShowChatBox = () => {
    if (profile) {
      setChatBoxActive(!chatBoxActive)
    } else {
      toast.error('Please login to chat!!!')
      dispatch(showLoginModal(true))
    }
  }

  return (
    <S.Wrapper className={!chatBoxActive ? 'active' : ''}>
      <S.ShowChatBox onClick={handleShowChatBox}>
        <Image
          src={
            chatBoxActive
              ? '/images/icons/arrow-right.png'
              : '/images/icons/arrow-left.png'
          }
          width={6}
          height={12}
          alt=""
        />
      </S.ShowChatBox>
      <div className="list-btn">
        {buttonActive.map((button, index) => {
          return (
            <S.Button
              className={button.active ? 'button-active' : ''}
              key={index}
              onClick={() => handleClickButton(button)}
            >
              {button.name}
            </S.Button>
          )
        })}
      </div>
      {buttonActive[0]?.active ? (
        <TextBox
          socket={socket}
          room={getRoom.rows?.filter(item => item.type == 'publicRoom')}
        />
      ) : (
        <Admin
          socket={socket}
          room={getRoom.rows?.filter(item => item.type == 'support')}
        />
      )}
    </S.Wrapper>
  )
}

export default ChatBox
