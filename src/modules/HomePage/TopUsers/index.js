/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectTopUser, topUserAction } from '/src/store/slice/users'
import EcoDetailUSerModal from '/src/components/EcoModal/EcoDetailUserModal'
import { showDetailTopUserModal } from '/src/store/slice/modal'
import qs from 'query-string'

function TopUser() {
  const topUser = useSelector(selectTopUser)
  const dispatch = useDispatch()
  const [params, setParams] = useState({
    sortType: -1,
    limit: 10
  })
  const [id, setId] = useState()

  useEffect(() => {
    const queryString = qs.stringify(params)
    dispatch(topUserAction(queryString))
  }, [dispatch, params])

  const rows = topUser?.rows

  const handleClick = useCallback(
    id => {
      setId(id)
      dispatch(showDetailTopUserModal(true))
    },
    [dispatch]
  )
  const reverseRows = Object.values(rows).reverse()

  return (
    <>
      <S.Wrapper>
        <div className="list-user">
          {reverseRows?.map(item => {
            return (
              <div
                className="user"
                key={item._id}
                onClick={() => handleClick(item?.user?._id)}
                id={item?.user?._id}
              >
                <div className="avatar">
                  {item?.user?.avatar ? (
                    <Image
                      className="image"
                      src={item.user.avatar}
                      width={30}
                      height={30}
                      alt=""
                      id={item.user._id}
                    />
                  ) : (
                    <S.Avatar>
                      {item?.user?.username?.charAt().toUpperCase()}
                    </S.Avatar>
                  )}
                </div>
                <div>
                  <div className="title">
                    {item.offerWallType || 'FREE TO EARN'}
                  </div>
                  <div className="user-name">{item?.user?.username}</div>
                </div>
                <div className="coin">
                  <div>{item.point}</div>
                </div>
                <div className="hover-detail-user">
                  <div className="hover-user-name">
                    <div className="title-user">UserName:</div>
                    <span className="value">{item?.user?.username}</span>
                  </div>
                  <div className="hover-offwall">
                    <span className="title-user">Offerwall:</span>
                    <span className="value">{item?.type}</span>
                  </div>
                  <div className="hover-point">
                    <div className="title-user">Reward:</div>
                    <span className="value">{item?.point} C</span>
                  </div>
                  <div className="arrow">
                    <Image
                      src={'/images/icons/Polygon.png'}
                      width={9}
                      height={9}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {id ? <EcoDetailUSerModal id={id} /> : ''}
      </S.Wrapper>
    </>
  )
}

export default TopUser
