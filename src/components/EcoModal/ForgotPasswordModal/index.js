import React, { useEffect, useState } from 'react'
import * as S from '../styles'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'next-i18next'
import EcoModal from '/src/components/EcoModal'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  showForgotPasswordModal,
  showLoginModal,
  selectShowForgotPassword
} from '/src/store/slice/modal'
import { resetPasswordAction } from '/src/store/slice/users'
import { selectEmailSendCode, sendCodeAction } from '/src/store/slice/auth'
import InputPassword from '/src/components/EcoForm/InputPassword'
import { REGEX_PASS, MIN_PASSWORD } from '/src/constants'
import Image from 'next/image'

function ForgotPasswordModal() {
  const { t } = useTranslation('forgotPass')
  const [time, setTime] = useState(60)
  const dispatch = useDispatch()
  const emailSendCode = useSelector(selectEmailSendCode)
  const [disableButton, setDisbleButton] = useState(true)
  const forgotPass = useSelector(selectShowForgotPassword)

  useEffect(() => {
    const count = setTimeout(() => {
      setTime(time - 1)
    }, 1000)
    if (time === 0) {
      setDisbleButton(false)
      clearTimeout(count)
    }
  }, [time])

  const handleSubmit = useCallback(
    async values => {
      try {
        await dispatch(
          resetPasswordAction({
            email: emailSendCode,
            newPassword: values.password,
            code: values.code
          })
        ).unwrap()

        dispatch(showForgotPasswordModal(false))
        dispatch(showLoginModal(true))
        toast.success(t('resetSuccess'))
      } catch (error) {
        toast.error(error?.message)
      }
    },
    [dispatch, emailSendCode, t]
  )

  const formik = useFormik({
    initialValues: {
      code: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      code: Yup.string().required(`${t('required')}`),
      password: Yup.string()
        .required(`${t('required')}`)
        .min(MIN_PASSWORD, `${t('minPass')}`)
        .matches(REGEX_PASS, `${t('regexPass')}`),
      confirmPassword: Yup.string()
        .required(`${t('required')}`)
        .oneOf([Yup.ref('password'), null], `${t('dontMatch')}`)
    }),
    onSubmit: values => handleSubmit(values)
  })

  const { values, errors, handleChange } = formik

  const toggle = useCallback(() => {
    dispatch(showForgotPasswordModal(!forgotPass))
  }, [dispatch, forgotPass])

  const handleResentCode = () => {
    setTime(60)
    setDisbleButton(true)
    dispatch(
      sendCodeAction({
        email: emailSendCode,
        emailType: 'resetPassword'
      })
    )
  }

  return (
    <EcoModal isOpen toggle={toggle} width="60" title={t('forgotPass')}>
      <S.ForgotPasswordWrapper>
        <S.H2>
          <span>{t('sendCode')} </span>({emailSendCode || ''})
          <S.BtnCloseModal className="icon-close" onClick={toggle}>
            <Image
              src={'/images/icons/cancel-modal.png'}
              width={24}
              height={24}
              alt=""
            />
          </S.BtnCloseModal>
        </S.H2>
        <form onSubmit={formik.handleSubmit}>
          <div className="code">
            <S.Input
              type="text"
              placeholder={t('enterCode')}
              name="code"
              id="code"
              value={values.code}
              onChange={handleChange}
            />
            <button
              type="button"
              className="resent-code"
              disabled={disableButton}
              onClick={handleResentCode}
            >
              {t('resentCode')} {time !== 0 && `(${time}s)`}
            </button>
          </div>
          <S.Error>{errors.code}</S.Error>
          <InputPassword
            label={t('pass')}
            name="password"
            placeholder={t('pass')}
            formik={formik}
          />
          <InputPassword
            label={t('confirmPass')}
            name="confirmPassword"
            placeholder={t('confirmPass')}
            formik={formik}
          />
          <S.Button type="submit">{t('changePass')}</S.Button>
        </form>
      </S.ForgotPasswordWrapper>
    </EcoModal>
  )
}

export default ForgotPasswordModal
