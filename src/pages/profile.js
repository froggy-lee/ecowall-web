/* eslint-disable no-extra-semi */
import { ProfileSection } from '/src/modules/ProfilePage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { selectProfile } from '../store/slice/users'
import { useSelector } from 'react-redux'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'signIn',
        'signUp',
        'forgotPass',
        'profile',
        'footer'
      ]))
    }
  }
}

export default function Profile() {
  const profile = useSelector(selectProfile)

  return (
    <>
      <ProfileSection profile={profile}></ProfileSection>
    </>
  )
}
