import React, { useEffect, useMemo } from 'react'
import { Tabs, Tab, Col } from 'react-bootstrap'
import * as S from './styles'
import FilterSelect from '../FilterSelect'
import ProfileTable from '../../EcoTable/ProfileTable'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { earnOfferAction, selectEarnOffer } from '/src/store/slice/users'
import moment from 'moment'

const EarningTab = () => {
  const { t } = useTranslation('profile')
  const dispatch = useDispatch()
  const earnOffer = useSelector(selectEarnOffer)

  useEffect(() => {
    dispatch(earnOfferAction())
  }, [dispatch])

  const { rows } = earnOffer

  const columnsEarn = useMemo(
    () => [
      {
        Header: `${t('name')}`,
        accessor: 'offerNet',
        Cell: ({ value }) => {
          return <div>{value === null ? '-' : value}</div>
        }
      },
      {
        Header: `${t('coins')}`,
        accessor: 'amount',
        Cell: ({ value }) => {
          return <div>{value} Coins</div>
        }
      },
      {
        Header: `${t('bonus')}`,
        accessor: 'bonus',
        Cell: ({ value }) => {
          return <div>{value === undefined ? '-' : value}</div>
        }
      },
      {
        Header: `${t('wall')}`,
        accessor: 'wall',
        Cell: ({ value }) => {
          return <div>{value === undefined ? '-' : value}</div>
        }
      },
      {
        Header: `${t('date')}`,
        accessor: 'createdAt',
        Cell: ({ value }) => {
          return <div>about {moment(value).fromNow()}</div>
        }
      }
    ],
    [t]
  )

  return (
    <S.Wrapper>
      <Col>
        <Tabs id="controlled-tab-example">
          <Tab eventKey="earn" title={t('offer')}>
            <FilterSelect />
            <S.Offer>
              <ProfileTable columns={columnsEarn} data={rows} />
            </S.Offer>
          </Tab>
        </Tabs>
      </Col>
    </S.Wrapper>
  )
}

export default EarningTab
