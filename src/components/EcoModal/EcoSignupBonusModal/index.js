import React from 'react'
import { useCallback } from 'react'
import * as S from './styles'
import EcoModal from '/src/components/EcoModal'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectShowSignupBonus,
  showSignupBonusModal
} from '/src/store/slice/modal'
import Image from 'next/image'
import WinLine from '/public/svgs/win-line'
import InputSignupBonus from '/public/svgs/icon-input-bonus'
import { IconLeaderboard } from '/public/svgs/leaderboard'
import { useTranslation } from 'next-i18next'

const dataUser = [
  {
    id: 1,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 2,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 3,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 4,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 5,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 6,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 7,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 8,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 9,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  },
  {
    id: 10,
    name: 'iamshin',
    title: 'ECOWALL',
    coin: 209
  }
]

const dataWin = [
  {
    id: 1,
    coin: 0.25,
    class: 'win-size-1'
  },
  {
    id: 2,
    coin: 0.25,
    class: 'win-size-1'
  },
  {
    id: 3,
    coin: 250,
    class: 'win-size-3'
  },
  {
    id: 4,
    coin: 0.25,
    class: 'win-size-1'
  },
  {
    id: 5,
    coin: 2.5,
    class: 'win-size-2'
  },
  {
    id: 6,
    coin: 0.25,
    class: 'win-size-1'
  },
  {
    id: 7,
    coin: 2.5,
    class: 'win-size-2'
  },
  {
    id: 8,
    coin: 0.25,
    class: 'win-size-1'
  },
  {
    id: 9,
    coin: 2.5,
    class: 'win-size-2'
  },
  {
    id: 10,
    coin: 0.25,
    class: 'win-size-1'
  }
]

function SignupBonusModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation('header')
  const showSignupBonus = useSelector(selectShowSignupBonus)

  const onToggle = useCallback(() => {
    dispatch(showSignupBonusModal(!showSignupBonus))
  }, [dispatch, showSignupBonus])

  return (
    <EcoModal
      isOpen
      onToggle={onToggle}
      background="rgba(0,0,0,0)"
      width={90}
      signupbonus="true"
    >
      <S.Wrapper>
        <S.Head>
          <S.FreeCase>
            <S.Image>
              <Image
                src={'/images/icons/bonus-signup.png'}
                height={92}
                width={92}
                alt=""
              />
            </S.Image>
            <p>{t('freeCase')}</p>
            <S.Title>{t('win')} $250.00</S.Title>
          </S.FreeCase>
        </S.Head>
        <S.RewardSlideContainer>
          <S.WinLine>
            <WinLine />
          </S.WinLine>
          <ul>
            {dataWin?.map(item => {
              return (
                <li className={`${item.class}`} key={item.id}>
                  <div className="icon"></div>
                  <p>{t('youWin')}</p>
                  <span>${item.coin.toFixed(2)}</span>
                </li>
              )
            })}
          </ul>
        </S.RewardSlideContainer>
        <S.RewardAction>
          <div className="wrapper-action-input">
            <div className="action-input">
              <InputSignupBonus />
              <input />
            </div>
            <div className="action-button">
              <button>{t('openCase')}</button>
            </div>
          </div>
          <div className="des-action">
            <Image
              src={'/images/icons/infor.png'}
              width={13}
              height={13}
              alt=""
            />
            <p>
              {t('if')}
              <span>“Free”</span>.
            </p>
          </div>
        </S.RewardAction>
        <S.Bottom>
          <S.Possible>
            <div className="title">
              <div className="icon">
                <Image
                  src={'/images/Econet.png'}
                  width={14}
                  height={14}
                  alt=""
                />
              </div>
              {t('titleWallet')}
            </div>
            <div className="possible-item">
              <div className="item-1">
                <div>
                  <Image
                    src={'/images/icons/item-1.png'}
                    width={53}
                    height={60}
                    alt=""
                  />
                </div>
                <span>$250.00</span>
              </div>
              <div className="item-2">
                <div>
                  <Image
                    src={'/images/icons/item-2.png'}
                    width={59}
                    height={60}
                    alt=""
                  />
                </div>
                <span>$2.50</span>
              </div>
              <div className="item-3">
                <div>
                  <Image
                    src={'/images/icons/item-3.png'}
                    width={39}
                    height={38}
                    alt=""
                  />
                </div>
                <span>$0.25</span>
              </div>
              <div className="item-4">
                <div>
                  <Image
                    src={'/images/icons/item-4.png'}
                    width={37}
                    height={30}
                    alt=""
                  />
                </div>
                <span>$0.05</span>
              </div>
            </div>
          </S.Possible>
          <S.TopWinner>
            <div className="title">
              <div className="icon">
                <IconLeaderboard />
              </div>
              {t('topWin')}
            </div>
            <S.ListItem>
              {dataUser?.map(item => {
                return (
                  <S.Item key={item.id}>
                    <div className="avatar">
                      <Image
                        src={'/images/no-avatar.png'}
                        width={27}
                        height={27}
                        alt=""
                      />
                    </div>
                    <S.WinnerUser>
                      <span>{item.title}</span>
                      <p>{item.name}</p>
                    </S.WinnerUser>
                    <S.Coin>
                      <span>{item.coin}</span>
                    </S.Coin>
                  </S.Item>
                )
              })}
            </S.ListItem>
          </S.TopWinner>
        </S.Bottom>
      </S.Wrapper>
    </EcoModal>
  )
}

export default SignupBonusModal
