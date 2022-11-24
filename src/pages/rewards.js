import { Affiliates, StreakRewards, TopWins } from '/src/modules/RewardsPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as S from '/src/modules/RewardsPage/styles'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'signIn',
        'signUp',
        'forgotPass',
        'rewards',
        'footer'
      ]))
    }
  }
}

export default function Rewards() {
  return (
    <S.Wrapper>
      <div>
        <Affiliates />
        <StreakRewards />
      </div>
      <TopWins />
    </S.Wrapper>
  )
}
