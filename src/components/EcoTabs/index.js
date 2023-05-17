import React from 'react'
import * as S from './styles.js'
import { Col } from 'react-bootstrap'

const EcoTabs = props => {
  const { children } = props
  return (
    <S.WrapperEcoTab>
      <Col>{children}</Col>
    </S.WrapperEcoTab>
  )
}
export default EcoTabs
