import { authRequest } from '../axios'

export const loginRequest = async params => {
  const res = await authRequest({
    url: '/users/login',
    method: 'POST',
    data: params
  })

  return res
}

export const signupRequest = async data => {
  const res = await authRequest({
    url: '/users/register',
    method: 'POST',
    data
  })

  return res
}

export const signupVerifyCodeRequest = async data => {
  const res = await authRequest({
    url: '/userVerifieds/signup-verify-code',
    method: 'POST',
    data
  })

  return res
}

export const sendCodeRequest = async data => {
  return await authRequest({
    url: '/userVerifieds/send-code',
    method: 'POST',
    data
  })
}
