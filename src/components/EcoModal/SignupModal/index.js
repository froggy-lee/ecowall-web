import React, { useCallback } from 'react'
import ButtonGoogle from '/src/components/EcoButtonGoogle'
import * as S from '../styles'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'next-i18next'
import EcoModal from '/src/components/EcoModal'
import { useDispatch } from 'react-redux'
import {
  showSignupModal,
  showVerifyCodeModal,
  showLoginModal
} from '/src/store/slice/modal'
import InputPassword from '/src/components/EcoForm/InputPassword'
import { signupAction } from '/src/store/slice/auth'
import { toast } from 'react-toastify'
import { REGEX_PASS, MIN_PASSWORD, BASE_API_URL } from '/src/constants'

function SignupModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation('signUp')

  const handleSubmit = useCallback(
    async values => {
      try {
        await dispatch(
          signupAction({
            email: values.email.trim(),
            password: values.password,
            username: values.username
            //referralCode: values.referralCode
          })
        ).unwrap()

        toast.success('Please check your email to verify your account')
        dispatch(showSignupModal(false))
        dispatch(showVerifyCodeModal(true))
      } catch (error) {
        toast.error(error?.message)
      }
    },
    [dispatch]
  )

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      referralCode: '',
      checkBox: false
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required(`${t('required')}`)
        .email(`${t('formatEmail')}`),
      username: Yup.string().required(`${t('required')}`),
      password: Yup.string()
        .required(`${t('required')}`)
        .min(MIN_PASSWORD, `${t('formatPass')}`)
        .matches(REGEX_PASS, `${t('regexPass')}`),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        `${t('passNotMatch')}`
      ),
      checkBox: Yup.boolean().oneOf([true], `${t('must')}`)
    }),
    onSubmit: values => handleSubmit(values)
  })

  const onToggle = useCallback(() => {
    dispatch(showSignupModal(false))
  }, [dispatch])

  const handleOpenSignin = useCallback(() => {
    dispatch(showLoginModal(true))
    dispatch(showSignupModal(false))
  }, [dispatch])

  const { values, errors, handleChange } = formik

  return (
    <EcoModal isOpen onToggle={onToggle} title={t('signUp')} width="36">
      <S.SignupWrapper>
        <S.H3>
          {t('andUp')} <span>%250</span> {t('freeCase')}
        </S.H3>
        <div className="btn-google">
          <ButtonGoogle type="Sign up" />
        </div>
        <S.Line>
          <div></div> or <div></div>
        </S.Line>
        <form onSubmit={formik.handleSubmit}>
          <S.Label>{t('Email')}</S.Label>
          <S.Input
            type="text"
            placeholder={t('emailAddress')}
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          <S.Error>{errors.email}</S.Error>
          <S.Label>{t('username')}</S.Label>
          <S.Input
            type="text"
            placeholder={t('username')}
            name="username"
            id="username"
            value={values.username}
            onChange={handleChange}
          />
          <S.Error>{errors.username}</S.Error>

          <InputPassword
            label={t('pass')}
            placeholder={t('pass')}
            name="password"
            formik={formik}
          />

          <InputPassword
            label={t('confirmPassword')}
            placeholder={t('confirmPassword')}
            name="confirmPassword"
            formik={formik}
          />

          <S.Label>{t('refCodeOp')}</S.Label>
          <S.Input
            type="text"
            placeholder={t('refCode')}
            name="referralCode"
            id="referralCode"
            value={values.referralCode}
            onChange={handleChange}
          />
          <S.Error>{errors.referralCode}</S.Error>

          <div className="btn-checkbox">
            <label className="checkbox">
              <input
                type="checkbox"
                name="checkBox"
                id="checkBox"
                value={values.checkBox}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            <h3>
              {t('byCount')}{' '}
              <a
                href={`${BASE_API_URL}/static/terms-of-service.html`}
                target="_blank"
                rel="noreferrer"
              >
                {t('terms')}
              </a>{' '}
              {t('and')}{' '}
              <a
                href={`${BASE_API_URL}/static/privacy-policy.html`}
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                {t('policy')}
              </a>
            </h3>
          </div>
          <S.Error>{errors.checkBox}</S.Error>
          <S.Button type="submit">{t('signUp')}</S.Button>
          <S.H2>
            {t('haveAccount')}{' '}
            <span onClick={handleOpenSignin}>{t('signIn')}</span>
          </S.H2>
        </form>
      </S.SignupWrapper>
    </EcoModal>
  )
}

export default SignupModal
