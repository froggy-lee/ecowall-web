import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  pressedReceiveAction,
  selectPressedReceive,
  dailyRewardAction,
  getMeAction,
  selectProfile
} from '/src/store/slice/users'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { PRESSED_RECEICE_STATUS } from '/src/constants'

function StreakRewards() {
  const { t } = useTranslation('rewards')
  const dispatch = useDispatch()
  const data = useSelector(selectPressedReceive)
  const profile = useSelector(selectProfile)
  const [listDay, setlistDay] = useState([])

  const setClassName = useCallback(item => {
    const { pressedReceiveStatus } = item
    return clsx({
      claimed: pressedReceiveStatus === PRESSED_RECEICE_STATUS.claimed,
      claim_active: pressedReceiveStatus === PRESSED_RECEICE_STATUS.claim,
      claim:
        pressedReceiveStatus === PRESSED_RECEICE_STATUS.notToDay ||
        pressedReceiveStatus === PRESSED_RECEICE_STATUS.notEnough1000coins
    })
  }, [])

  useEffect(() => {
    profile && dispatch(pressedReceiveAction())
  }, [dispatch, profile])

  useEffect(() => {
    setlistDay(data?.pressReceive)
  }, [data])

  const handleClaim = async () => {
    try {
      await dispatch(dailyRewardAction()).unwrap()
      await dispatch(pressedReceiveAction())
      await dispatch(getMeAction())
      toast.success('Claim success')
    } catch (error) {
      toast.error(error?.message)
    }
  }

  return (
    <S.Wrapper>
      <h1 className="title">{t('dayRewards')}</h1>
      <div className="list-data">
        {listDay?.map((item, index) => (
          <div key={index} className={setClassName(item)}>
            <div>
              <Image
                src={
                  item.pressedReceiveStatus === PRESSED_RECEICE_STATUS.claim ||
                  item.pressedReceiveStatus === PRESSED_RECEICE_STATUS.claimed
                    ? '/images/icons/clock-active.png'
                    : '/images/icons/clock1.png'
                }
                width={20}
                height={20}
                alt="clock"
              />
            </div>
            <div className="day">
              {t('day')} {item.dayCount[3]}
            </div>
            <div className="coins">
              {item.point} {t('coins')}
            </div>
            <div>
              <button
                disabled={
                  !(item.pressedReceiveStatus === PRESSED_RECEICE_STATUS.claim)
                }
                onClick={handleClaim}
              >
                {item.pressedReceiveStatus === PRESSED_RECEICE_STATUS.claimed
                  ? 'Claimed'
                  : 'Claim'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="note">
        <div className="icon-note">
          <Image src="/images/icons/infor.png" width={25} height={25} alt="" />
        </div>
        <div className="des">
          {t('earn')} <span>{t('coinsToday')}</span> {t('timeLeft')}{' '}
          <span>15h 35m 04s</span>
        </div>
      </div>
      <S.Twitter>
        <div className="twitter">
          <div>
            <S.ButtonTwitter>
              <Image
                src="/images/icons/birdtwitter.png"
                width={28}
                height={23}
                alt="twitter"
              />
            </S.ButtonTwitter>
          </div>
          <div className="follow">
            <h1>{t('followUs')}</h1>
            <h2>{t('claimCoins')}</h2>
          </div>
        </div>
      </S.Twitter>
    </S.Wrapper>
  )
}

export default StreakRewards
