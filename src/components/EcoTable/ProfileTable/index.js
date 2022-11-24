import React from 'react'
import EcoTable from '/src/components/EcoTable'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

function ProfileTable(props) {
  const { columns, data } = props
  const { t } = useTranslation('profile')

  return (
    <S.WrapperTable>
      <EcoTable data={data} columns={columns} />
      {data.length == 0 ? <S.NoData>{t('notShow')}</S.NoData> : <div />}
    </S.WrapperTable>
  )
}

export default ProfileTable
