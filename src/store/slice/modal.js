import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showLogin: false,
  showVerifyCode: false,
  showReward: false,
  showSetting: false,
  showEcoWallet: false,
  showSignup: false,
  showDetailTopUser: false,
  showAlert: false,
  showNotification: false,
  showSendCode: false,
  showForgotPassword: false,
  showBonus: false,
  pageLoad: true,
  showChangePassword: false,
  showHowToEarn: false,
  showSignupBonus: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showLoginModal: (state, { payload }) => {
      state.showLogin = payload
    },
    showVerifyCodeModal: (state, { payload }) => {
      state.showVerifyCode = payload
    },
    showRewardModal: (state, { payload }) => {
      state.showReward = payload
    },
    showSettingdModal: (state, { payload }) => {
      state.showSetting = payload
    },
    showEcoWalletdModal: (state, { payload }) => {
      state.showEcoWallet = payload
    },
    showSignupModal: (state, { payload }) => {
      state.showSignup = payload
    },
    showDetailTopUserModal: (state, { payload }) => {
      state.showDetailTopUser = payload
    },
    showAlertModal: (state, { payload }) => {
      state.showAlert = payload
    },
    showNotificationModal: (state, { payload }) => {
      state.showNotification = payload
    },
    showSendCodeModal: (state, { payload }) => {
      state.showSendCode = payload
    },
    showForgotPasswordModal: (state, { payload }) => {
      state.showForgotPassword = payload
    },
    showEcoBonusModal: (state, { payload }) => {
      state.showBonus = payload
    },
    checkPageLoad: (state, { payload }) => {
      state.pageLoad = payload
    },
    showChangePasswordModal: (state, { payload }) => {
      state.showChangePassword = payload
    },
    showHowToEarnModal: (state, { payload }) => {
      state.showHowToEarn = payload
    },
    showSignupBonusModal: (state, { payload }) => {
      state.showSignupBonus = payload
    }
  }
})

export const selectShowLogin = state => state.modal.showLogin

export const selectShowVerifyCode = state => state.modal.showVerifyCode

export const selectShowReward = state => state.modal.showReward

export const selectShowSetting = state => state.modal.showSetting

export const selectShowEcoWallet = state => state.modal.showEcoWallet

export const selectShowSignup = state => state.modal.showSignup

export const selectShowSendCode = state => state.modal.showSendCode

export const selectShowForgotPassword = state => state.modal.showForgotPassword

export const selectShowDetailTopUser = state => state.modal.showDetailTopUser

export const selectShowNotification = state => state.modal.showNotification

export const selectShowBonus = state => state.modal.showBonus

export const selectPageLoad = state => state.modal.pageLoad

export const selectShowChangePassword = state => state.modal.showChangePassword

export const selectShowHowToEarn = state => state.modal.showHowToEarn

export const selectShowSignupBonus = state => state.modal.showSignupBonus

export const {
  showLoginModal,
  showVerifyCodeModal,
  showRewardModal,
  showSettingdModal,
  showEcoWalletdModal,
  showSignupModal,
  showDetailTopUserModal,
  showNotificationModal,
  showSendCodeModal,
  showForgotPasswordModal,
  showDetailTopUser,
  showEcoBonusModal,
  checkPageLoad,
  showChangePasswordModal,
  showHowToEarnModal,
  showSignupBonusModal
} = modalSlice.actions

export default modalSlice.reducer
