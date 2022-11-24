import React from 'react'
import * as S from './styles'

const RankColumn = ({ rank, idxRank }) => {
  return (
    <S.WrapperRank className="rank__wrapper">
      <S.Rank className="rank__id">{idxRank.indexOf(rank) + 1}</S.Rank>
    </S.WrapperRank>
  )
}

export default RankColumn
