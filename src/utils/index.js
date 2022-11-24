import _ from 'lodash'
import dayjs from 'dayjs'

export const removeValueEmpty = obj => {
  const result = _.pickBy(obj, function (value) {
    return !(
      value === undefined ||
      value === '' ||
      value === null ||
      value === []
    )
  })

  return result
}

export const formatDateTime = value => {
  return dayjs(value).format('DD-MM-YYYY HH:mm')
}
export const formatDateMonth = value => {
  return dayjs(value).format('DD/MM')
}
export const formatHours = value => {
  return dayjs(value).format('HH:mm')
}

export function ellipseAddress(address = '', width = 10) {
  if (!address) {
    return ''
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})
