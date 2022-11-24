import React, { useState, useCallback, useMemo, useEffect } from 'react'
import * as S from './styles'
import EcoTable from '/src/components/EcoTable'
import Pagination from '/src/components/EcoPagination'
import { useTranslation } from 'next-i18next'
import { selectLeaderboard, leaderboardAction } from '/src/store/slice/users'
import { useDispatch, useSelector } from 'react-redux'
import {
  RankColumn,
  AvatarColumn,
  PointsColumn,
  PrizeColumn
} from '/src/components/RenderColumn'
import { useRouter } from 'next/router'
import qs from 'query-string'
import { LEADERBOARD_TAB } from '/src/constants'
import DataEmpty from '/src/components/DataEmpty'

const TODAY_TAB = 0
const WEEK_TAB = 1
const MONTH_TAB = 2

const getRangeDate = index => {
  return index === TODAY_TAB
    ? LEADERBOARD_TAB.day
    : index === WEEK_TAB
    ? LEADERBOARD_TAB.week
    : index === MONTH_TAB
    ? LEADERBOARD_TAB.month
    : LEADERBOARD_TAB.day
}

function Tabs() {
  const { t } = useTranslation('leaderboard')
  const [active, setActive] = useState(TODAY_TAB)
  const leaderboard = useSelector(selectLeaderboard)
  const dispatch = useDispatch()
  const router = useRouter()
  const [filters, setFilters] = useState({
    limit: 20,
    sortBy: 'point',
    sortType: -1,
    page: 0
  })

  useEffect(() => {
    const queryParams = router.query
    if (queryParams && queryParams.rangeDate) {
      switch (queryParams.rangeDate) {
        case 'day':
          setActive(TODAY_TAB)
          break
        case 'week':
          setActive(WEEK_TAB)
          break
        case 'month':
          setActive(MONTH_TAB)
          break
        default:
          break
      }
    }
  }, [router.query])

  const columns = useMemo(
    () => [
      {
        Header: `${t('rank')}`,
        accessor: 'id',
        Cell: ({ row, flatRows }) => {
          return <RankColumn rank={row} idxRank={flatRows} />
        }
      },
      {
        Header: `${t('Username')}`,
        accessor: 'user',
        Cell: ({
          cell: {
            row: { original }
          }
        }) => <AvatarColumn user={original} />
      },
      {
        Header: `${t('points')}`,
        accessor: 'point',
        Cell: ({ value }) => <PointsColumn point={value} />
      },
      {
        Header: `${t('prize')}`,
        accessor: 'prizes',
        Cell: ({ value }) => <PrizeColumn prize={value} />
      }
    ],
    [t]
  )

  const changeIndex = useCallback(
    e => {
      const index = parseInt(e.target.id, TODAY_TAB)
      if (index !== active) {
        setActive(index)
      }
    },
    [active]
  )

  const handleDateChange = useCallback(
    (e, date) => {
      changeIndex(e)
      const filtersTmp = {
        ...filters,
        page: 0,
        rangeDate: `${date}`
      }

      setFilters(filtersTmp)
      router.push({
        pathname: '/leaderboard',
        query: qs.stringify(filtersTmp)
      })
    },
    [changeIndex, filters, router]
  )

  useEffect(() => {
    dispatch(
      leaderboardAction({
        ...filters,
        rangeDate: getRangeDate(active)
      })
    )
  }, [active, dispatch, filters])

  const onChangePage = useCallback(
    e => {
      setFilters({
        ...filters,
        page: e.selected
      })
    },
    [filters]
  )

  const { rows, pagination } = leaderboard
  return (
    <S.TabsWrapper>
      <S.Tabs>
        <S.Tab
          className={active === TODAY_TAB ? 'active' : ''}
          onClick={e => handleDateChange(e, 'day')}
          active={active === TODAY_TAB}
          id={TODAY_TAB}
        >
          {t('today')}
        </S.Tab>
        <S.Tab
          className={active === WEEK_TAB ? 'active' : ''}
          onClick={e => handleDateChange(e, 'week')}
          active={active === WEEK_TAB}
          id={WEEK_TAB}
        >
          {t('week')}
        </S.Tab>
        <S.Tab
          className={active === MONTH_TAB ? 'active' : ''}
          onClick={e => handleDateChange(e, 'month')}
          active={active === MONTH_TAB}
          id={MONTH_TAB}
        >
          {t('month')}
        </S.Tab>
      </S.Tabs>
      <S.Title>{t('leaderboard')}</S.Title>
      <S.TabContentWrapper>
        <S.TabContent active={active === TODAY_TAB}>
          <S.WrapperTable>
            {rows.length == 0 ? (
              <DataEmpty />
            ) : (
              <EcoTable data={rows} columns={columns} />
            )}
          </S.WrapperTable>
        </S.TabContent>
        <S.TabContent active={active === WEEK_TAB}>
          <S.WrapperTable>
            {rows.length == 0 ? (
              <DataEmpty />
            ) : (
              <EcoTable data={rows} columns={columns} />
            )}
          </S.WrapperTable>
        </S.TabContent>
        <S.TabContent active={active === MONTH_TAB}>
          <S.WrapperTable>
            {rows.length == 0 ? (
              <DataEmpty />
            ) : (
              <EcoTable data={rows} columns={columns} />
            )}
          </S.WrapperTable>
        </S.TabContent>
      </S.TabContentWrapper>
      {rows.length == 0 ? (
        <div />
      ) : (
        <S.Panigation>
          <Pagination
            onChangePage={onChangePage}
            pageCount={Math.ceil(pagination?.total / pagination?.limit)}
          />
        </S.Panigation>
      )}
    </S.TabsWrapper>
  )
}

export default Tabs
