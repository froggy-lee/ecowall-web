import { Tabs } from '../modules/LeaderBoard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'signIn',
        'signUp',
        'forgotPass',
        'leaderboard',
        'footer'
      ]))
    }
  }
}

export default function LeaderBoard() {
  return (
    <>
      <Tabs />
    </>
  )
}
