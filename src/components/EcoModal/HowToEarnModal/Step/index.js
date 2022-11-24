import Image from 'next/image'
import React, { useCallback } from 'react'
import * as S from '../styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectShowHowToEarn,
  showHowToEarnModal
} from '/src/store/slice/modal.js'
import { useTranslation } from 'next-i18next'

function Step(props) {
  const { titleTop, titleBot, des, image, button } = props
  const showHowToEarn = useSelector(selectShowHowToEarn)
  const dispatch = useDispatch()
  const { t } = useTranslation('header')

  const onToggle = useCallback(() => {
    dispatch(showHowToEarnModal(!showHowToEarn))
  }, [dispatch, showHowToEarn])

  return (
    <>
      <S.Container>
        <S.Head>
          <S.TitleTop>{titleTop}</S.TitleTop>
          <div className="cancel">
            <Image
              src={'/images/icons/cancel-modal.png'}
              width={28}
              height={28}
              alt=""
              onClick={onToggle}
            />
          </div>
        </S.Head>
        <S.WrapperBanner>
          <S.Banner>
            <Image
              src={image}
              width={551}
              height={282}
              alt=""
              className="image"
            />
          </S.Banner>
        </S.WrapperBanner>
        <S.Footer>
          <S.FooterLeft button={button}>
            <S.TitleBot>{titleBot}</S.TitleBot>
            <S.Des>{des}</S.Des>
          </S.FooterLeft>
          <S.WrapperButton button={button}>
            <S.Button>{t('startEarn')}</S.Button>
          </S.WrapperButton>
        </S.Footer>
        <S.Line />
      </S.Container>
    </>
  )
}

export default Step
