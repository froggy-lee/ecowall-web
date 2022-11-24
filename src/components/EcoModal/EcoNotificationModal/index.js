/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectShowNotification,
  showNotificationModal
} from '/src/store/slice/modal'
import { useTranslation } from 'next-i18next'
import {
  notificationAction,
  removeNotificationAction,
  readNotificationAction
} from '/src/store/slice/users'
import { Dropdown } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import { toast } from 'react-toastify'
import moment from 'moment'
import { selectProfile } from '/src/store/slice/users'

const PER_PAGE = 10

const EcoNotificationModal = () => {
  const [dataNotification, setDataNotification] = useState([])
  const dispatch = useDispatch()
  const showNotification = useSelector(selectShowNotification)
  const { t } = useTranslation('header')
  const [page, setPage] = useState(0)
  const [filter, setFilter] = useState({
    limit: PER_PAGE,
    page: page
  })
  const [hasMore, setHasMore] = useState(true)
  const profile = useSelector(selectProfile)

  const getDataNotification = async () => {
    try {
      const res = await dispatch(notificationAction(filter))
      setDataNotification(res?.payload?.rows)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    profile ? getDataNotification() : ''
  }, [])

  const fetchNewData = useCallback(async () => {
    setPage(page + 1)
    const res = await dispatch(
      notificationAction({ ...filter, page: page + 1 })
    )
    const data = res?.payload?.rows
    return data
  }, [dispatch, filter, page])

  const onToggle = useCallback(() => {
    dispatch(showNotificationModal(!showNotification))
  }, [dispatch, showNotification])

  const handleMarkAll = useCallback(
    async id => {
      if (dataNotification?.length > 0) {
        await dispatch(readNotificationAction({ ids: [id], isAll: false }))
        const res = await dispatch(
          notificationAction({ ...filter, limit: dataNotification?.length })
        )
        setDataNotification(res?.payload?.rows)
      }
    },
    [dispatch, filter]
  )

  const readNotification = useCallback(
    async id => {
      if (dataNotification?.length > 0) {
        await dispatch(readNotificationAction({ ids: [id], isAll: false }))
        const res = await dispatch(
          notificationAction({ ...filter, limit: dataNotification?.length })
        )
        setDataNotification(res?.payload?.rows)
      }
    },
    [dispatch, filter]
  )

  const removeNotification = useCallback(
    async id => {
      await dispatch(removeNotificationAction(id))
      const res = await dispatch(
        notificationAction({ ...filter, limit: dataNotification?.length })
      )
      setDataNotification(res?.payload?.rows)
    },
    [dispatch, filter]
  )

  const handleCloseModal = useCallback(() => {
    dispatch(showNotificationModal(false))
  }, [dispatch])

  const loadMore = async () => {
    const newData = await fetchNewData()
    setTimeout(() => {
      setDataNotification([...dataNotification, ...newData])
    }, 3000)
    if (newData?.length == 0 || newData?.length < PER_PAGE) {
      setTimeout(() => {
        setHasMore(false)
      }, 3000)
    }
  }

  const Loader = (
    <S.Loader key="loader">
      <div className="loading-spinner"></div>
    </S.Loader>
  )
  const endMessage = <S.End key="end">{t('endMess')}</S.End>

  return (
    <S.WrapperModal>
      <S.Wrapper
        className={showNotification ? 'openModal' : ''}
        onClick={e => e.stopPropagation()}
      >
        <S.Head>
          <S.WrapperHead>
            <S.Arrow>
              <Image
                src={'/images/icons/arrow-left-notification.png'}
                width={22}
                height={18}
                alt=""
                onClick={onToggle}
              />
            </S.Arrow>
            <S.Setting>
              <Image
                src={'/images/icons/icon-notification.png'}
                width={22}
                height={29.3}
                alt=""
              />
            </S.Setting>
            <S.Title>
              <h1>{t('notification')}</h1>
            </S.Title>
            <S.AllRead onClick={handleMarkAll}>
              <p>{t('readAll')}</p>
            </S.AllRead>
          </S.WrapperHead>
        </S.Head>
        <S.Content>
          <div className="text" onClick={handleMarkAll}>
            <p>{t('readAll')}</p>
          </div>
          {dataNotification.length > 0 ? (
            <InfiniteScroll
              dataLength={dataNotification?.length}
              next={loadMore}
              hasMore={profile ? hasMore : ''}
              loader={Loader}
              height={400}
              endMessage={endMessage}
            >
              {dataNotification?.map(item => {
                return (
                  <S.WrapperContent key={item?._id}>
                    <S.Avatar>
                      <div className="avatar"></div>
                    </S.Avatar>
                    <S.Des className={item?.marked === true ? 'read' : ''}>
                      <h1 className="title">{item?.title}</h1>
                      <p className="body">{item?.body}</p>
                      <span className="time">
                        {moment(item?.createdAt).fromNow()}
                      </span>
                    </S.Des>
                    <S.More>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <S.IconMore>
                            <Image
                              id={item?._id}
                              src={'/images/icons/more-notification.png'}
                              width={3}
                              height={17}
                              alt=""
                            />
                          </S.IconMore>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => readNotification(item?._id)}
                            className="readed"
                          >
                            Mark as read
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => removeNotification(item?._id)}
                            id={item?._id}
                          >
                            Remove
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </S.More>
                  </S.WrapperContent>
                )
              })}
            </InfiniteScroll>
          ) : (
            <S.NotHaveNotification>
              {t('notNotification')}
            </S.NotHaveNotification>
          )}
        </S.Content>
      </S.Wrapper>
      <S.Overlay onClick={handleCloseModal} />
    </S.WrapperModal>
  )
}

export default EcoNotificationModal
