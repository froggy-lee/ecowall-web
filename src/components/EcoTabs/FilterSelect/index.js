import React from 'react'
import * as S from './styles'
import Select from 'react-select'
import { useTranslation } from 'next-i18next'

const options = [
  { value: 'all', label: 'All' },
  { value: 'AdGate Rewards', label: 'AdGate Rewards' },
  { value: 'Ayet Studios', label: 'Ayet Studios' },
  { value: 'OfferToro', label: 'OfferToro' },
  { value: 'Revenue Universe', label: 'Revenue Universe' },
  { value: 'AdGem', label: 'AdGem' },
  { value: 'RevenueWall', label: 'RevenueWall' },
  { value: 'CPX Research', label: 'CPX Research' },
  { value: 'Peanut Labs', label: 'Peanut Labs' },
  { value: 'Referrals', label: 'Referrals' },
  { value: 'gaingg', label: 'gaingg' }
]

const FilterSelect = () => {
  const { t } = useTranslation('profile')
  // const handleChange = e => {
  //   const valueSelect = e.value
  //   console.log(valueSelect)
  // }
  return (
    <S.Select controlId="1">
      <label>{t('offerwall')}</label>
      <Select
        className="games-dropdown-2"
        id="1"
        options={options}
        placeholder=""
        classNamePrefix="select"
        defaultValue={options[0]}
        inputId="1"
        instanceId="1"
        // onChange={handleChange}
      />
    </S.Select>
  )
}

export default FilterSelect
