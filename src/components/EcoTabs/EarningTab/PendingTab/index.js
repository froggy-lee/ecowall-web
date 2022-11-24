import React, { useMemo } from 'react'
import * as S from './styles'
import FilterSelect from '/src/components/EcoTabs/FilterSelect'
import { dataEarnPending } from '/src/components/EcoTabs/DataTab'
import ProfileTable from '/src/components/EcoTable/ProfileTable'
import { useTranslation } from 'next-i18next'

function PendingTab() {
  const { t } = useTranslation('profile')
  const columnsEarn = useMemo(
    () => [
      {
        Header: `${t('name')}`,
        accessor: 'name',
        Cell: ({ value }) => {
          return <div>{value}</div>
        }
      },
      {
        Header: `${t('coins')}`,
        accessor: 'coins',
        Cell: ({ value }) => {
          return <div>{value} Coins</div>
        }
      },
      {
        Header: `${t('bonus')}`,
        accessor: 'bonus',
        Cell: ({ value }) => {
          return <div>{value}</div>
        }
      },
      {
        Header: `${t('wall')}`,
        accessor: 'wall',
        Cell: ({ value }) => {
          return <div>{value}</div>
        }
      },
      {
        Header: `${t('date')}`,
        accessor: 'date',
        Cell: ({ value }) => {
          return <div>{value}</div>
        }
      }
    ],
    [t]
  )
  return (
    <S.WrapperTable>
      <FilterSelect />
      <ProfileTable columns={columnsEarn} data={dataEarnPending} />
    </S.WrapperTable>
  )
}

export default PendingTab
