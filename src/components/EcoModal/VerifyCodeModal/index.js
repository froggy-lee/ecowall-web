import { useFormik } from 'formik'
import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import * as S from '../styles'
import EcoModal from '/src/components/EcoModal'
import {
  selectSignupResponse,
  verifyCodeAction,
  sendCodeAction
} from '/src/store/slice/auth'
import { showVerifyCodeModal } from '/src/store/slice/modal'
import { getMeAction } from '/src/store/slice/users'

function VerifyCodeModal() {
  const dispatch = useDispatch()
  const [time, setTime] = useState(60)
  const { t } = useTranslation('signIn')
  const signupResponse = useSelector(selectSignupResponse)
  const [disableButton, setDisbleButton] = useState(true)

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
          verifyCodeAction({
            email: signupResponse?.email,
            code: values.code,
            deviceToken: 'deviceToken',
            deviceType: 'web'
          })
        ).unwrap()

        dispatch(getMeAction())
        dispatch(showVerifyCodeModal(false))

        toast.success(t('Logged in successfully!'))
      } catch (error) {
        toast.error(error?.message)
      }
    },
    [dispatch, signupResponse?.email, t]
  )

  const formik = useFormik({
    initialValues: {
      code: ''
    },
    validationSchema: Yup.object({
      code: Yup.string().required('required')
    }),
    onSubmit: values => handleSubmit(values)
  })

  const { values, errors, handleChange } = formik

  const onToggle = useCallback(() => {
    dispatch(showVerifyCodeModal(false))
  }, [dispatch])

  const handleResentCode = useCallback(() => {
    setTime(60)
    setDisbleButton(true)
    dispatch(
      sendCodeAction({
        email: signupResponse?.email,
        emailType: 'verifyEmail'
      })
    )
  }, [dispatch, signupResponse?.email])

  return (
    <EcoModal isOpen onToggle={onToggle} title={t('signUp')} width="46">
      <S.SignupCodeWrapper>
        <S.H2>
          <span>{t('verifyTitle')}</span>({signupResponse?.email} )
        </S.H2>
        <S.H2>
          <span>{t('checkEmail')}</span>
        </S.H2>
        <form onSubmit={formik.handleSubmit}>
          <div className="code">
            <S.Input
              type="text"
              placeholder="Enter code"
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
              {t('resendCode')} {time ? `(${time}s)` : ''}
            </button>
          </div>
          <S.Error>{errors.code}</S.Error>
          <S.Button>{t('confirm')}</S.Button>
        </form>
      </S.SignupCodeWrapper>
    </EcoModal>
  )
}

export default VerifyCodeModal
