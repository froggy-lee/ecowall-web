import { authRequest } from '../axios'

export const getMissionEarnRequest = async () => {
  return await authRequest({
    url: `/offers/net-offers`,
    method: 'GET'
  })
}
