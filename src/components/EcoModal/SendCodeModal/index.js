import React from 'react'
import * as S from '../styles'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'next-i18next'
import EcoModal from '/src/components/EcoModal'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  showSendCodeModal,
  showForgotPasswordModal
} from '/src/store/slice/modal'
import { sendCodeAction, showEmailSendCode } from '/src/store/slice/auth'
import { toast } from 'react-toastify'

function SendCodeModal() {
  const { t } = useTranslation('forgotPass')
  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    async values => {
      try {
        await dispatch(
          sendCodeAction({
            ...values,
            emailType: 'resetPassword'
          })
        )
        dispatch(showEmailSendCode(values.email))
        dispatch(showForgotPasswordModal(true))
        dispatch(showSendCodeModal(false))

        toast.success(t('checkMail'))
      } catch (error) {
        toast.error(error?.message)
      }
    },
    [dispatch, t]
  )

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(`${t('required')}`)
        .email(`${t('formatEmail')}`)
    }),
    onSubmit: values => handleSubmit(values)
  })

  const onToggle = useCallback(() => {
    dispatch(showSendCodeModal(false))
  }, [dispatch])

  const { values, errors, handleChange } = formik

  return (
    <EcoModal isOpen onToggle={onToggle} width="50" title={t('forgotPass')}>
      <S.FindAccoutWrapper>
        <div className="des">
          <h2>{t('enterEmail')}</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <S.Input
            type="text"
            placeholder={t('emailAddress')}
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          <S.Error>{errors.email}</S.Error>
          <S.Button type="submit">{t('findAccount')}</S.Button>
        </form>
      </S.FindAccoutWrapper>
    </EcoModal>
  )
}

export default SendCodeModal
