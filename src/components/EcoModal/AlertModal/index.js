import React from 'react'
import EcoModal from '/src/components/EcoModal'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { deleteUserAction, getMeAction } from '/src/store/slice/users'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

function AlertModal(props) {
  const { type, title, des, btnConfirm, btnCancel, isOpen, onToggle, user } =
    props
  const dispatch = useDispatch()
  const router = useRouter()

  const handleConfirm = useCallback(async () => {
    await dispatch(deleteUserAction())
    await dispatch(getMeAction())
    router.push('/')
    onToggle()
  }, [dispatch, onToggle, router])

  return (
    <EcoModal isOpen={isOpen} onToggle={onToggle} width="62">
      <S.AlertWrapper>
        <h1 className="title">{title}</h1>
        <h2 className={type === 'delete' ? 'des-delete' : 'des'}>
          {des ? des : ''}
        </h2>
        <div className="list-btn">
          {btnCancel ? (
            <button className="btn-cancel" onClick={onToggle}>
              NO
            </button>
          ) : (
            ''
          )}
          {btnConfirm ? (
            <button className="btn-confirm" onClick={() => handleConfirm(user)}>
              {btnConfirm}
            </button>
          ) : (
            ''
          )}
        </div>
      </S.AlertWrapper>
    </EcoModal>
  )
}

export default AlertModal
