import React, { useMemo } from 'react'
import EcoTabs from '/src/components/EcoTabs'
import { Tabs, Tab } from 'react-bootstrap'
import * as S from './styles'
import ProfileTable from '/src/components/EcoTable/ProfileTable'
import {
  dataWithdrawelsPending,
  dataWithdrawelsCompleted
} from '/src/components/EcoTabs/DataTab'
import FilterSelect from '/src/components/EcoTabs/FilterSelect'
import { useTranslation } from 'next-i18next'

function WithdrawalsTab() {
  const { t } = useTranslation('profile')
  const WithdrawalsColumns = useMemo(
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
        Header: `${t('cashout')}`,
        accessor: 'cashout',
        Cell: ({ value }) => {
          return <div>${value}</div>
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
    <S.WrapperTab>
      <EcoTabs>
        <Tabs id="controlled-tab-example">
          <Tab eventKey="complete" title={t('completedWithdrawals')}>
            <FilterSelect />
            <ProfileTable
              columns={WithdrawalsColumns}
              data={dataWithdrawelsCompleted}
            />
          </Tab>
          <Tab eventKey="pending" title={t('pendingWithdrawals')}>
            <FilterSelect />
            <ProfileTable
              columns={WithdrawalsColumns}
              data={dataWithdrawelsPending}
            />
          </Tab>
        </Tabs>
      </EcoTabs>
    </S.WrapperTab>
  )
}

export default WithdrawalsTab
