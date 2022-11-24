import React from 'react'
import { useSelector } from 'react-redux'
import SigninModal from '/src/components/EcoModal/SigninModal'
import VerifyCodeModal from '/src/components/EcoModal/VerifyCodeModal'
import EcoRewardModal from '/src/components/EcoModal/EcoRewardModal'
import EcoSettingModal from '/src/components/EcoModal/EcoSettingModal'
import EcoWalletModal from '/src/components/EcoModal/EcoWalletModal'
import SignupModal from '/src/components/EcoModal/SignupModal'
import EcoNotificationModal from '/src/components/EcoModal/EcoNotificationModal'
import SendCodeModal from '/src/components/EcoModal/SendCodeModal'
import ForgotPasswordModal from '/src/components/EcoModal/ForgotPasswordModal'
import EcoBonusModal from '/src/components/EcoModal/EcoBonusModal'
import ChangePasswordModal from '/src/components/EcoModal/ChangePasswordModal'
import HowToEarnModal from '/src/components/EcoModal/HowToEarnModal'
import SignupBonusModal from '/src/components/EcoModal/EcoSignupBonusModal'

import {
  selectShowLogin,
  selectShowVerifyCode,
  selectShowReward,
  selectShowSetting,
  selectShowEcoWallet,
  selectShowSignup,
  selectShowNotification,
  selectShowSendCode,
  selectShowForgotPassword,
  selectShowBonus,
  selectShowChangePassword,
  selectShowHowToEarn,
  selectShowSignupBonus
} from '/src/store/slice/modal'

const ModalPage = () => {
  const showLogin = useSelector(selectShowLogin)
  const showVerifyCode = useSelector(selectShowVerifyCode)
  const showReward = useSelector(selectShowReward)
  const showSetting = useSelector(selectShowSetting)
  const showEcoWallet = useSelector(selectShowEcoWallet)
  const showSignup = useSelector(selectShowSignup)
  const showNotification = useSelector(selectShowNotification)
  const showSendCode = useSelector(selectShowSendCode)
  const showForgotPassword = useSelector(selectShowForgotPassword)
  const showBonus = useSelector(selectShowBonus)
  const showChangePassword = useSelector(selectShowChangePassword)
  const showHowToEarn = useSelector(selectShowHowToEarn)
  const showSignupBonus = useSelector(selectShowSignupBonus)
  return (
    <>
      {!!showLogin && <SigninModal />}
      {!!showVerifyCode && <VerifyCodeModal />}
      {!!showReward && <EcoRewardModal />}
      {!!showSetting && <EcoSettingModal />}
      {!!showEcoWallet && <EcoWalletModal />}
      {!!showSignup && <SignupModal />}
      {!!showNotification && <EcoNotificationModal />}
      {!!showSendCode && <SendCodeModal />}
      {!!showForgotPassword && <ForgotPasswordModal />}
      {!!showBonus && <EcoBonusModal />}
      {!!showChangePassword && <ChangePasswordModal />}
      {!!showHowToEarn && <HowToEarnModal />}
      {!!showSignupBonus && <SignupBonusModal />}
    </>
  )
}

export default ModalPage
