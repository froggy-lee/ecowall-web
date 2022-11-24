import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import Image from 'next/image'
import { formatHours } from '/src/utils'
import {
  selectMessage,
  getMessageAction,
  sendMessageAction
} from '/src/store/slice/chat'
import { selectProfile } from '/src/store/slice/users'
import { toast } from 'react-toastify'
import { useTranslation } from 'next-i18next'

function Admin(props) {
  const { socket, room } = props
  const { t } = useTranslation('header')
  const currentMessage = useSelector(selectMessage)
  const bottomRef = useRef(null)
  const profile = useSelector(selectProfile)
  const [listMessage, setListMessage] = useState([])
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')

  const handleSubmit = async () => {
    if (message) {
      await dispatch(
        sendMessageAction({
          roomId: room[0]._id,
          message
        })
      )
      setMessage('')
    }
  }

  const handleKeyUp = e => {
    e.keyCode == 13 && !e.shiftKey && handleSubmit()
  }

  const handleChangeInput = e => {
    setMessage(e.target.value)
  }

  useEffect(() => {
    setListMessage([...currentMessage.rows].reverse())
  }, [currentMessage])

  //Get Message
  const getMessage = useCallback(() => {
    if (profile && room[0]?._id) {
      try {
        dispatch(getMessageAction(room[0]._id))
      } catch (error) {
        toast.error(error.message)
      }
    }
  }, [dispatch, profile, room])
  useEffect(() => {
    getMessage()
  }, [getMessage])

  //Get Token
  useEffect(() => {
    profile && setToken(localStorage.getItem('ECO_WALL_TOKEN'))
  }, [profile])

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [listMessage])

  const handleEmitSocket = useCallback(() => {
    socket?.emit('join_room', {
      token: `Bearer ${token.slice(1, -1)}`,
      roomId: room[0]?._id
    })
  }, [room, socket, token])

  useEffect(() => {
    handleEmitSocket()
  }, [handleEmitSocket])

  useEffect(() => {
    socket?.on('receive_message', data => {
      setListMessage(list => {
        return [...list, data]
      })
    })
  }, [socket])

  return (
    <S.Wrapper>
      <div className="text-box">
        <div className="message-bot">
          <div className="account">
            <div>
              <Image
                src="/images/icons/avatar-chatbot.png"
                width={25}
                height={25}
                alt=""
              />
              <div className="name">ChatBot</div>
            </div>
          </div>
          <S.Message>
            Send us a support message at any time and we&rsquo;ll get back to
            you as soon as possible!
            <br />
            <br />
            Tip: If you are missing coins, please check the FAQ section before
            contacting support.
          </S.Message>
        </div>
        {listMessage?.map(text => {
          return (
            <div key={text._id} className="message">
              <div className="account">
                <div>
                  <Image
                    src={
                      text.avatarUrl ? text.avatarUrl : '/images/no-avatar.png'
                    }
                    width={25}
                    height={25}
                    alt=""
                  />
                  <S.Level>00</S.Level>
                  <S.Name>{text?.author?.username}</S.Name>
                </div>
                <S.Time>{formatHours(text?.createdAt)}</S.Time>
              </div>
              <S.Message>{text.message}</S.Message>
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>
      <div className="input-message">
        <div className="input-text">
          <input
            type="text"
            placeholder={t('plaChat')}
            value={message}
            onChange={handleChangeInput}
            onKeyUp={handleKeyUp}
          />
          <button>
            <Image
              src="/images/icons/smile.png"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>
        <button className="enter-chatbox" onClick={handleSubmit}>
          <Image
            src="/images/icons/enter-chatbox.png"
            width={20}
            height={20}
            alt=""
          />
        </button>
      </div>
    </S.Wrapper>
  )
}

export default Admin
