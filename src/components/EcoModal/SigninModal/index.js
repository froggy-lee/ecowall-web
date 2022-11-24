import { useFormik } from 'formik'
import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import * as S from '../styles'
import ButtonGoogle from '/src/components/EcoButtonGoogle'
import EcoModal from '/src/components/EcoModal'
import {
  showLoginModal,
  showSendCodeModal,
  showSignupModal
} from '/src/store/slice/modal'
import { signinAction } from '/src/store/slice/auth'
import { getMeAction } from '/src/store/slice/users'
import { toast } from 'react-toastify'
import InputPassword from '/src/components/EcoForm/InputPassword'

function SigninModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation('signIn')

  const handleOpenForgotPassword = useCallback(() => {
    dispatch(showLoginModal(false))
    dispatch(showSendCodeModal(true))
  }, [dispatch])

  const handleOpenSignup = useCallback(() => {
    dispatch(showLoginModal(false))
    dispatch(showSignupModal(true))
  }, [dispatch])

  const handleSUbmit = useCallback(
    async values => {
      const newValues = { ...values, email: values.email.trim() }
      try {
        await dispatch(
          signinAction({
            ...newValues,
            deviceToken: 'deviceToken',
            deviceType: 'ios'
          })
        ).unwrap()

        dispatch(getMeAction())
        dispatch(showLoginModal(false))

        toast.success(t('loginSuccess'))
      } catch (error) {
        toast.error(error?.message)
      }
    },
    [dispatch, t]
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required(`${t('required')}`)
        .email(`${t('formatEmail')}`),
      password: Yup.string()
        .required(`${t('required')}`)
        .min(8, `${t('formatPass')}`)
    }),
    onSubmit: values => handleSUbmit(values)
  })

  const { values, errors, handleChange } = formik

  const onToggle = useCallback(() => {
    dispatch(showLoginModal(false))
  }, [dispatch])

  return (
    <EcoModal isOpen onToggle={onToggle} title={t('signIn')} width="36">
      <S.SigninWrapper>
        <div className="btn-google">
          <ButtonGoogle />
        </div>
        <S.Line>
          <div></div> or <div></div>
        </S.Line>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <S.Label>Email</S.Label>
            <S.Input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            <S.Error>{errors.email}</S.Error>
          </div>
          <div>
            <InputPassword
              label={t('pass')}
              name="password"
              placeholder={t('pass')}
              formik={formik}
            />
          </div>
          <S.Button type="submit">{t('signIn')}</S.Button>
        </form>
        <div>
          <S.H2>
            <span onClick={handleOpenForgotPassword}>{t('forgotPass')}</span>
          </S.H2>
          <S.H2>
            {t('donAccount')}{' '}
            <span onClick={handleOpenSignup}>{t('signUp')}</span>
          </S.H2>
        </div>
      </S.SigninWrapper>
    </EcoModal>
  )
}

export default SigninModal
