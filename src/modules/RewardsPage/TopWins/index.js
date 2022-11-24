import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectPressedReceive,
  getMeAction,
  selectProfile,
  dailyBonusAction,
  selectTop24h,
  top24hAction
} from '/src/store/slice/users'
import { toast } from 'react-toastify'
import EcoDetailUSerModal from '/src/components/EcoModal/EcoDetailUserModal'
import { showDetailTopUserModal } from '/src/store/slice/modal'

const listBonus = [
  {
    url_icon: '/images/rewards/bonus1.png',
    width: 27
  },
  {
    url_icon: '/images/rewards/bonus2.png',
    width: 24.5
  },
  {
    url_icon: '/images/rewards/bonus3.png',
    width: 22.3
  },
  {
    url_icon: '/images/rewards/bonus4.png',
    width: 20.5
  },
  {
    url_icon: '/images/rewards/bonus5.png',
    width: 18.8
  },
  {
    url_icon: '/images/rewards/bonus6.png',
    width: 17
  },
  {
    url_icon: '/images/rewards/bonus7.png',
    width: 15.5
  },
  {
    url_icon: '/images/rewards/bonus8.png',
    width: 13.7
  },
  {
    url_icon: '/images/rewards/bonus9.png',
    width: 12.2
  },
  {
    url_icon: '/images/rewards/bonus10.png',
    width: 11
  },
  {
    url_icon: '/images/rewards/bonus2.png',
    width: 10
  }
]

function TopWins() {
  const { t } = useTranslation('rewards')
  const data = useSelector(selectPressedReceive)
  const profile = useSelector(selectProfile)
  const top24h = useSelector(selectTop24h)
  const [dailyBonus, setDailyBonus] = useState([])
  const [level, setLevel] = useState(0)
  const [showUser, setShowUser] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(top24hAction())
  }, [dispatch])
  useEffect(() => {
    let array = data ? Object.values(data?.dailyBonus) : []
    setDailyBonus(array.reverse())
    setLevel(profile?.level)
  }, [data, profile])

  const handleClaim = useCallback(async () => {
    if (!profile || !profile.level) return toast.error('Not enough level!!!')
    try {
      await dispatch(dailyBonusAction()).unwrap()
      await dispatch(getMeAction())
      toast.success('Claim success')
    } catch (error) {
      toast.error(error.message)
    }
  }, [dispatch, profile])

  const handleDoubleOrNot = useCallback(async () => {
    if (!profile || !profile.level) return toast.error('Not enough level!!!')
    try {
      await dispatch(
        dailyBonusAction({
          nothingOrDouble: true
        })
      ).unwrap()
      await dispatch(getMeAction())
      toast.success('Claim success')
    } catch (error) {
      toast.error(error.message)
    }
  }, [dispatch, profile])

  const handleOpenDetailUser = useCallback(
    id => {
      dispatch(showDetailTopUserModal(true))
      setShowUser(id)
    },
    [dispatch]
  )

  return (
    <S.Wrapper>
      <S.Title>{t('dailyBonus')}</S.Title>
      <div className="daily-bonus">
        {dailyBonus?.map((bonus, index) => {
          return (
            <S.Bonus key={index} width={listBonus[index].width}>
              <Image
                src={listBonus[index].url_icon}
                width={15}
                height={15}
                alt="icon"
              />
              <div>{bonus}</div>
            </S.Bonus>
          )
        })}
      </div>
      <div className="right">
        <div className="list-btn">
          <S.Button onClick={handleDoubleOrNot}>
            <Image
              src="/images/icons/doubleornot.png"
              width={26}
              height={20}
              alt=""
            />
            {t('doubleOr')} 0
          </S.Button>
          <S.Button onClick={handleClaim}>
            <Image
              src="/images/icons/claim.png"
              width={26}
              height={20}
              alt=""
            />
            {t('claim')}{' '}
            {level === 0 ? dailyBonus[9 - level] : dailyBonus[10 - level]}
          </S.Button>
        </div>
        <div className="something">
          <div className="level">
            <div>{t('level')} 0</div>
            <div>{t('level')} 1</div>
          </div>
          <div className="line"></div>
          <div className="number">
            <div>10</div>
            <div>100</div>
          </div>
          <div className="text">{t('reachLevel')}</div>
        </div>
      </div>
      <div>
        <div className="topwins">
          <h1 className="title">{t('topWins')}</h1>
          <div className="list-user">
            {top24h.map(user => {
              return (
                <div
                  key={user._id}
                  className="user"
                  onClick={() => handleOpenDetailUser(user._id)}
                >
                  <div>
                    <Image
                      src={user.avatar ? user.avatar : '/images/no-avatar.png'}
                      width={22}
                      height={22}
                      alt=""
                    />
                  </div>
                  <S.Name>{user.username}</S.Name>
                  <S.Coin>{user.point}</S.Coin>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {showUser && <EcoDetailUSerModal id={showUser} />}
    </S.Wrapper>
  )
}

export default TopWins
