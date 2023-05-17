import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

const EcoButtonGoogle = props => {
  const { t } = useTranslation('signIn')
  return (
    <S.ButtonGoogle>
      <Image
        src="/images/icons/google.png"
        alt="google"
        width={14}
        height={14}
      />
      <p>{props.type ? `${t('signUpGoogle')}` : `${t('signInGoogle')}`}</p>
    </S.ButtonGoogle>
  )
}
export default EcoButtonGoogle
