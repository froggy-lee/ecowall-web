import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  loginRequest,
  signupRequest,
  signupVerifyCodeRequest,
  sendCodeRequest
} from '/src/api/auth/request'
import { LocalStorage } from '/src/utils/localStorage'
import { ECO_WALL_TOKEN } from '/src/constants'

const initialState = {
  signined: null,
  signupSuccess: null,
  emailSendCode: null
}

export const signinAction = createAsyncThunk('auth/signin', async data => {
  const response = await loginRequest(data)
  const { token } = response
  LocalStorage.set(token, ECO_WALL_TOKEN)
  return response
})

export const signupAction = createAsyncThunk('auth/signup', async data => {
  const response = await signupRequest(data)
  return response
})

export const verifyCodeAction = createAsyncThunk(
  'auth/verifyCode',
  async data => {
    const response = await signupVerifyCodeRequest(data)
    const { token } = response
    LocalStorage.set(token, ECO_WALL_TOKEN)
    return response
  }
)

export const sendCodeAction = createAsyncThunk('auth/sendCode', async data => {
  const response = await sendCodeRequest(data)
  return response
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showEmailSendCode: (state, { payload }) => {
      state.emailSendCode = payload
    }
  },
  extraReducers: builder => {
    builder
      // sign in
      .addCase(signinAction.pending)
      .addCase(signinAction.fulfilled, (state, { payload }) => {
        state.signined = payload
      })
      .addCase(signinAction.rejected, (state, { payload }) => {
        state.error = payload
      })

      // sign up
      .addCase(signupAction.pending)
      .addCase(signupAction.fulfilled, (state, { payload }) => {
        state.signupSuccess = payload
      })
      .addCase(signupAction.rejected, (state, { payload }) => {
        state.error = payload
      })

      // verify code
      .addCase(verifyCodeAction.pending)
      .addCase(verifyCodeAction.fulfilled, (state, { payload }) => {
        state.signined = payload
      })
      .addCase(verifyCodeAction.rejected)

      //send code
      .addCase(sendCodeAction.pending)
      .addCase(sendCodeAction.fulfilled, () => {})
      .addCase(sendCodeAction.rejected)
  }
})

export const selectSignupResponse = state => state.auth.signupSuccess

export const selectEmailSendCode = state => state.auth.emailSendCode

export const { showEmailSendCode } = authSlice.actions

export default authSlice.reducer
