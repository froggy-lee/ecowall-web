import React from 'react'
import * as S from './styles'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const DataEmpty = () => {
  const { t } = useTranslation('leaderboard')
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }

  return (
    <S.Wrapper>
      <S.Logo />
      <S.Container>
        <S.Title>{t('dataEmpty')}</S.Title>
        <S.BackToHome onClick={handleClick}>{t('back')}</S.BackToHome>
      </S.Container>
    </S.Wrapper>
  )
}

export default DataEmpty
