export const ECO_WALL_TOKEN = 'ECO_WALL_TOKEN'
export const FORMAT_DATE = 'DD/MM/YYYY'
export const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const LEADERBOARD_TAB = {
  day: 'day',
  week: 'week',
  month: 'month'
}

export const REGEX_PASS =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

export const MIN_PASSWORD = 8

export const PRESSED_RECEICE_STATUS = {
  claim: 'claim',
  claimed: 'claimed',
  notEnough1000coins: 'notEnough1000coins',
  notToDay: 'notToDay'
}
