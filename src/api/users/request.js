import { authRequest } from '../axios'

export const getMeRequest = async () => {
  return await authRequest({
    url: `/users/me`,
    method: 'GET'
  })
}

export const getTopUserRequest = async queries => {
  return await authRequest({
    url: `/earnHistories?${queries}`,
    method: 'GET'
  })
}

export const getDetailUserRequest = async id => {
  return await authRequest({
    url: `/users/detail?id=${id}`,
    method: 'GET'
  })
}

export const getRecentEarnByUserRequest = async id => {
  return await authRequest({
    url: `/users/recent-earnings-by-user?id=${id}`,
    method: 'GET'
  })
}

export const updateUserRequest = async user => {
  return await authRequest({
    url: `/users/edit-profile`,
    method: 'POST',
    data: user
  })
}

export const uploadFileRequest = async data => {
  return await authRequest({
    url: '/files/upload',
    method: 'POST',
    data,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export const deleteUserRequest = async () => {
  return await authRequest({
    url: `/users/delete-account`,
    method: 'DELETE'
  })
}

export const resetPasswordRequest = async data => {
  return await authRequest({
    url: '/users/reset-password',
    method: 'PATCH',
    data
  })
}

export const pressReceiveRequest = async () => {
  return await authRequest({
    url: '/daily-reward/pressed-receive',
    method: 'GET'
  })
}

export const dailyRewardRequest = async () => {
  return await authRequest({
    url: '/daily-reward',
    method: 'POST'
  })
}

export const earnOfferRequest = async () => {
  return await authRequest({
    url: '/earnHistories/me',
    method: 'GET'
  })
}
export const checkBonusCodeRequest = async data => {
  return await authRequest({
    url: '/bonusCode/check',
    method: 'POST',
    data
  })
}

export const dailyBonusRequest = async data => {
  return await authRequest({
    url: '/daily-reward/bonus',
    method: 'POST',
    data
  })
}

export const top24hRequest = async () => {
  return await authRequest({
    url: '/earnHistories/top-24h',
    method: 'GET'
  })
}

export const changePasswordRequest = async data => {
  return await authRequest({
    url: '/users/change-password',
    method: 'POST',
    data
  })
}

export const getMessageRequest = async id => {
  return await authRequest({
    url: `/message?room=${id}`,
    method: 'GET'
  })
}

export const sendMessageRequest = async data => {
  return await authRequest({
    url: '/message',
    method: 'POST',
    data
  })
}

export const getRoomChatRequest = async () => {
  return await authRequest({
    url: '/rooms',
    method: 'GET'
  })
}

export const createAdminRoomRequest = async () => {
  return await authRequest({
    url: '/rooms',
    method: 'POST',
    data: {
      type: 'support',
      name: 'Admin Room',
      description: ''
    }
  })
}
