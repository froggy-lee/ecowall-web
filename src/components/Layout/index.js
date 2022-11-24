import React from 'react'
import * as S from './styles'
import Header from './Header'
import Footer from './Footer'
import TopUser from '/src/modules/HomePage/TopUsers'
import ModalPage from '/src/modules/ModalPage'
import GlobalPage from '/src/modules/GlobalPage'
import ChatBox from '/src/components/EcoChat'

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <TopUser />
        <ChatBox />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.Container>
      <ModalPage />
      <GlobalPage />
    </S.Wrapper>
  )
}

export default Layout
