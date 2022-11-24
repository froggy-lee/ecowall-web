import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from '../modules/EarnPage/styles'
import { EcoNetwork, HowToEarn, Surveys } from '/src/modules/EarnPage'
import { getMissionEarnAction } from '/src/store/slice/users'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'signIn',
        'signUp',
        'forgotPass',
        'footer',
        'earn'
      ]))
    }
  }
}

export default function Earn() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMissionEarnAction())
  }, [dispatch])

  return (
    <>
      <S.Container>
        <HowToEarn />
        <S.Wrapper>
          <EcoNetwork />
          <Surveys />
        </S.Wrapper>
      </S.Container>
    </>
  )
}
