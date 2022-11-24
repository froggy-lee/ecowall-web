import * as S from '/src/modules/ComingSoonPage/styles'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'signIn',
        'signUp',
        'forgotPass',
        'footer'
      ]))
    }
  }
}

export default function Earn() {
  const { t } = useTranslation('comingsoon')

  return (
    <>
      <S.Text>{t('comingSoon')}</S.Text>
    </>
  )
}
