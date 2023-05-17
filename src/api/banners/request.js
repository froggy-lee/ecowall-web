import { SSRRequest } from '/src/api/axios'

export const apiListBanner = async () => {
  const res = await SSRRequest({
    url: '/banners',
    method: 'GET'
  })
  return res
}
