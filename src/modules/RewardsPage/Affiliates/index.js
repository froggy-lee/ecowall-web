import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { showEcoBonusModal } from '/src/store/slice/modal'
import { selectProfile } from '/src/store/slice/users'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton
} from 'next-share'
import { useRouter } from 'next/router'

function Affiliates() {
  const { t } = useTranslation('rewards')
  const dispatch = useDispatch()
  const profile = useSelector(selectProfile)
  const router = useRouter()

  const [copy, setCopy] = useState({
    value: profile ? profile.referralCode : '',
    copied: false
  })

  const handleCopy = () => {
    setCopy({
      ...copy,
      copied: true
    })
    toast.success('Copied!', {
      position: toast.POSITION.BOTTOM_LEFT
    })
  }

  const onShowBonus = useCallback(() => {
    dispatch(showEcoBonusModal(true))
  }, [dispatch])

  return (
    <S.Wrapper>
      <div className="title">
        <div className="title-text">
          <S.Title>ECO WALL Rewards</S.Title>
        </div>
        <div className="gift-button">
          <button onClick={onShowBonus}>
            <Image src="/images/icons/gift.png" width={23} height={27} alt="" />
            <div className="text">{t('bonusCode')}</div>
          </button>
        </div>
      </div>
      <S.Section>
        <div>
          <S.Title>{t('affiliates')}</S.Title>
          <h2 className="des">
            {t('gift')} <S.Span>{t('freeCase')}</S.Span> {t('and')}{' '}
            <S.Span>{t('earn')} 5%</S.Span> {t('ofEarn')}.
          </h2>
          <div className="users-referred">
            <div className="user-referred">
              <div className="icon">
                <Image
                  src="/images/icons/usersreferred1.png"
                  width={46}
                  height={38}
                  alt=""
                />
              </div>
              <div>
                <S.Coin>{profile ? profile?.referral : 0}</S.Coin>
                <S.UsersReferred
                  className={router.locale === 'vi' ? 'language' : ''}
                >
                  {t('usersReferred')}
                </S.UsersReferred>
              </div>
            </div>
            <div className="user-referred">
              <div className="icon">
                <Image
                  src="/images/icons/usersreferred2.png"
                  width={46}
                  height={38}
                  alt=""
                />
              </div>
              <div>
                <S.Coin>{profile ? profile.referralEarnings : 0}</S.Coin>
                <S.UsersReferred
                  className={router.locale === 'vi' ? 'language' : ''}
                >
                  {t('refEarn')}
                </S.UsersReferred>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="list-socialmedia">
            <TwitterShareButton
              url={'https://test.ecowall.io/'}
              quote={''}
              hashtag={`#ReferralCode${profile ? profile.referralCode : ''}`}
            >
              <Image
                src="/images/icons/twitter1.png"
                width={32}
                height={30}
                alt=""
              />
            </TwitterShareButton>
            <FacebookShareButton
              url={'https://test.ecowall.io/'}
              quote={''}
              hashtag={`#ReferralCode${profile ? profile.referralCode : ''}`}
            >
              <Image
                src="/images/icons/facebook1.png"
                width={32}
                height={30}
                alt=""
              />
            </FacebookShareButton>
            <TelegramShareButton
              url={'https://test.ecowall.io/'}
              quote={''}
              hashtag={`#ReferralCode${profile ? profile.referralCode : ''}`}
            >
              <Image
                src="/images/icons/telegram1.png"
                width={32}
                height={30}
                alt=""
              />
            </TelegramShareButton>
          </div>
          <div className="referral-code">
            <S.ReferralCode>
              {t('referralCode')}{' '}
              <S.Span>{profile ? profile.referralCode : ''}</S.Span>
            </S.ReferralCode>
            <div className="list-btn">
              <CopyToClipboard text={copy?.value} onCopy={handleCopy}>
                <S.Button primary>{t('copyCode')}</S.Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </S.Section>
    </S.Wrapper>
  )
}

export default Affiliates
