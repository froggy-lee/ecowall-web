import { authRequest } from '../axios'
import qs from 'query-string'

export const notificationRequest = async params => {
  const queryString = qs.stringify(params)
  const res = await authRequest({
    url: `/notifications?${queryString}`,
    method: 'GET'
  })

  return res
}

export const removeNotificationRequest = async id => {
  const res = await authRequest({
    url: `/notifications/${id}`,
    method: 'DELETE'
  })

  return res
}

export const readNotificationRequest = async params => {
  return await authRequest({
    url: `notifications/mark-read`,
    method: 'POST',
    data: params
  })
}
