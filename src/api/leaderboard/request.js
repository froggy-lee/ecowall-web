import qs from 'query-string'
import { SSRRequest } from '../axios'

export const leaderboardRequest = async params => {
  let queryString = qs.stringify(params)
  const res = await SSRRequest({
    url: `/earnHistories/top/pagination?${queryString}`,
    method: 'GET'
  })

  return res
}
