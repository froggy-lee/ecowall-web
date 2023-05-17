import React from 'react'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

const PrizeColumn = ({ prize }) => {
  const { t } = useTranslation('leaderboard')
  return (
    <S.Prize>
      {prize.toFixed(3)} {`${t('coins')}`}
    </S.Prize>
  )
}

export default PrizeColumn
