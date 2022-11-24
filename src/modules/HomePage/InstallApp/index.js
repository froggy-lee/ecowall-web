/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

const InstallAppSection = () => {
  const { t } = useTranslation('homepage')

  return (
    <S.Wrapper>
      <S.ImageTop>
        <S.ImageBig>
          <S.ImageMobileBig />
        </S.ImageBig>
        <S.ImageSmall>
          <S.ImageMobileSmall />
        </S.ImageSmall>
      </S.ImageTop>
      <S.ContentBot>
        <S.Title>
          <S.TitleTop>{t('easierFaster')}</S.TitleTop>
          <S.TitleBot>{t('earning')}</S.TitleBot>
          <S.GetTheApp>{t('getApp')}</S.GetTheApp>
        </S.Title>
        <S.DownLoad>
          <S.CHPlay>
            <Image
              src="/images/googleplay.png"
              atl=""
              width={180}
              height={52}
              alt=""
            />
          </S.CHPlay>
          <S.Appstore>
            <Image
              src="/images/appstore.png"
              atl="avatar"
              width={180}
              height={52}
            />
          </S.Appstore>
        </S.DownLoad>
      </S.ContentBot>
    </S.Wrapper>
  )
}

export default InstallAppSection
