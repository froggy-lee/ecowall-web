import React, { useEffect, useCallback } from 'react'
import * as S from './styles'
import Image from 'next/image'
import LineGraph from '/src/modules/ProfilePage/Profile/LineGraph'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectDetailUser,
  detailUserAction,
  selectRecentEarnByUser,
  recentEarnByUserAction
} from '/src/store/slice/users'
import {
  selectShowDetailTopUser,
  showDetailTopUserModal
} from '/src/store/slice/modal'
import { useTranslation } from 'next-i18next'

const EcoDetailUSerModal = props => {
  const id = props?.id
  const dispatch = useDispatch()
  const detailUser = useSelector(selectDetailUser)
  const showDetailTopUser = useSelector(selectShowDetailTopUser)
  const recentEarnByUser = useSelector(selectRecentEarnByUser)
  const { t } = useTranslation('header')

  useEffect(() => {
    dispatch(detailUserAction(id))
    dispatch(recentEarnByUserAction(id))
  }, [dispatch, id])

  const onToggle = useCallback(() => {
    dispatch(showDetailTopUserModal(false))
  }, [dispatch])

  return (
    <S.Wrapper className={showDetailTopUser ? 'close' : ''}>
      <S.Container>
        <S.Cancel>
          <Image
            src={'/images/Earn-page/Eco-Network/cancel.png'}
            width={20}
            height={20}
            alt=""
            className="cancel"
            onClick={onToggle}
          />
        </S.Cancel>
        <S.Profile>
          <S.Avatar>
            {detailUser?.avatar ? (
              <Image
                className="image"
                src={detailUser?.avatar}
                width={41}
                height={41}
                alt=""
              />
            ) : (
              <div>{detailUser?.username.charAt().toUpperCase()}</div>
            )}
          </S.Avatar>
          <S.InfoUser>
            <S.WrapperUser>
              <S.Level>
                <span>{detailUser?.level}</span>
              </S.Level>
              <S.UserName>{detailUser?.username}</S.UserName>
            </S.WrapperUser>
            {detailUser?.profileVisibility === 'public' ? (
              <S.Exp>
                32 {t('expEarned')} 68 {t('expNextUp')}
              </S.Exp>
            ) : (
              <div></div>
            )}
          </S.InfoUser>
        </S.Profile>
        {detailUser?.profileVisibility === 'public' ? (
          <>
            <S.Progress>
              <div className="determinate" />
            </S.Progress>
            <S.Box>
              <div className="box-item">
                <h2>{detailUser?.completedOffers}</h2>
                <div>{t('completedOffers')}</div>
              </div>
              <div className="box-item">
                <h2>{detailUser?.coinsEarned}</h2>
                <div>{t('coinsEarn')}</div>
              </div>
              <div className="box-item">
                <h2>{detailUser?.referral}</h2>
                <div>{t('userReferred')}</div>
              </div>
            </S.Box>
            <S.LineGraph>
              <LineGraph data={recentEarnByUser} />
            </S.LineGraph>
          </>
        ) : (
          <S.Private>{t('privateProfile')}</S.Private>
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default EcoDetailUSerModal
