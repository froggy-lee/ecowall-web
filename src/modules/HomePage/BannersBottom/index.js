import React from 'react'
import { useTranslation } from 'next-i18next'
import * as S from './styles'

function BannersBottom() {
  const { t } = useTranslation('homepage')

  return (
    <S.Wrapper>
      <S.Banner>
        <S.WrapperTitle>
          <S.Title>{t('yesterday')}</S.Title>
          <S.Money>$57,469</S.Money>
        </S.WrapperTitle>
      </S.Banner>
      <S.Container>
        <S.Des>{t('visit')}</S.Des>
        <S.Button href="/earn">{t('startEarning')}</S.Button>
      </S.Container>
    </S.Wrapper>
  )
}

export default BannersBottom
