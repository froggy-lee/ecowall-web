import React from 'react'
import * as S from './styles'
import Images from 'next/image'

function StatisticalTables(props) {
  return (
    <S.Wrapper>
      {props.data.map((item, index) => (
        <div key={index}>
          <S.Title>
            <Images src={item.image} width={15} height={15} alt="clock" />
            {item.title}
          </S.Title>
          <S.Des>{item.des}</S.Des>
        </div>
      ))}
    </S.Wrapper>
  )
}

export default StatisticalTables
