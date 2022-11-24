import React from 'react'
import LeagueofLegendsPage from '/src/modules/CashOutPage/LeagueofLegendsPage'
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
        'cashout',
        'footer'
      ]))
    }
  }
}

function leagueoflegends() {
  return (
    <>
      <LeagueofLegendsPage />
    </>
  )
}

export default leagueoflegends
