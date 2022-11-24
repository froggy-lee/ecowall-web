import React from 'react'
import * as S from './styles'
import Image from 'next/image'

function LoadingHome() {
  return (
    <S.Wrapper>
      <div className="title">
        <Image
          src="/images/loading-logo.png"
          width={70}
          height={60}
          alt="logo"
        />
        <div>ECO WALL</div>
      </div>
      <div className="icon">
        <div className="lds-dual-ring"></div>
      </div>
      <div className="loading">Loading...</div>
    </S.Wrapper>
  )
}
export default LoadingHome
