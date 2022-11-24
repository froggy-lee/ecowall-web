import Image from 'next/image'
import * as S from './style'
import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectMessage,
  getMessageAction,
  sendMessageAction
} from '/src/store/slice/chat'
import { selectProfile } from '/src/store/slice/users'
import { toast } from 'react-toastify'
import { formatHours } from '/src/utils'
import { useTranslation } from 'next-i18next'

function TextBox(props) {
  const { socket, room } = props
  const currentMessage = useSelector(selectMessage)
  const bottomRef = useRef(null)
  const profile = useSelector(selectProfile)
  const [listMessage, setListMessage] = useState([])
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')
  const { t } = useTranslation('header')

  const handleSubmit = async () => {
    if (message) {
      setMessage('')
      await dispatch(
        sendMessageAction({
          roomId: room[0]._id,
          message
        })
      )
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
  useEffect(() => {
    if (profile && room[0]?._id) {
      try {
        dispatch(getMessageAction(room[0]._id))
      } catch (error) {
        toast.error(error.message)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, room[0]?._id, profile])

  //Get Token
  useEffect(() => {
    profile && setToken(localStorage.getItem('ECO_WALL_TOKEN'))
  }, [profile])

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) //auto
  }, [listMessage])

  useEffect(() => {
    socket?.emit('join_room', {
      token: `Bearer ${token.slice(1, -1)}`,
      roomId: room[0]?._id
    })
  }, [room, socket, token])

  useEffect(() => {
    socket?.on('receive_message', data => {
      setListMessage(list => {
        return [...list, data]
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket])

  return (
    <S.Wrapper>
      <div className="text-box">
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
              <S.Message>{text?.message}</S.Message>
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>
      <div className="input-message">
        <div className="input-text">
          <textarea
            type="text"
            placeholder={t('plaChat')}
            value={message}
            onChange={handleChangeInput}
            onKeyUp={handleKeyUp}
            maxLength="200"
            rows={2}
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

export default TextBox
