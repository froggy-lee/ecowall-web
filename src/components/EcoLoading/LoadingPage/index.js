import React from 'react'
import * as S from './styles'

function LoadingPage() {
  return (
    <S.Wrapper>
      <div className="icon">
        <div className="lds-dual-ring"></div>
      </div>
      <div className="loading">Loading...</div>
    </S.Wrapper>
  )
}

export default LoadingPage
