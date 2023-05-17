import { useFormik } from 'formik'
import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import * as S from '../styles'
import EcoModal from '/src/components/EcoModal'
import { showChangePasswordModal } from '/src/store/slice/modal'
import { getMeAction } from '/src/store/slice/users'
import { toast } from 'react-toastify'
import InputPassword from '/src/components/EcoForm/InputPassword'
import { REGEX_PASS, MIN_PASSWORD } from '/src/constants'
import { changePasswordAction } from '/src/store/slice/users'

function ChangePasswordModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation('signUp')

  const handleSUbmit = useCallback(
    async values => {
      try {
        await dispatch(
          changePasswordAction({
            oldPassword: values.oldPassword,
            newPassword: values.newPassword
          })
        ).unwrap()
        dispatch(getMeAction())
        dispatch(showChangePasswordModal(false))
        toast.success('Change Password Success')
      } catch (error) {
        toast.error(error?.message)
      }
    },
    [dispatch]
  )

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .required(`${t('required')}`)
        .min(8, `${t('formatPass')}`),
      newPassword: Yup.string()
        .required(`${t('required')}`)
        .min(MIN_PASSWORD, `${t('formatPass')}`)
        .matches(
          REGEX_PASS,
          'Password must include at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character'
        ),
      confirmPassword: Yup.string()
        .required(`${t('required')}`)
        .oneOf([Yup.ref('newPassword'), null], "Passwords don't match")
    }),
    onSubmit: values => handleSUbmit(values)
  })

  const onToggle = useCallback(() => {
    dispatch(showChangePasswordModal(false))
  }, [dispatch])

  return (
    <EcoModal isOpen onToggle={onToggle} title={t('changePass')} width="36">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <InputPassword
            label={t('oldPass')}
            name="oldPassword"
            placeholder={t('oldPass')}
            formik={formik}
          />
        </div>
        <div>
          <InputPassword
            label={t('newPass')}
            name="newPassword"
            placeholder={t('newPass')}
            formik={formik}
          />
        </div>
        <div>
          <InputPassword
            label={t('confirmPass')}
            name="confirmPassword"
            placeholder={t('confirmPass')}
            formik={formik}
          />
        </div>
        <S.Button type="submit">{t('changePass')}</S.Button>
      </form>
    </EcoModal>
  )
}

export default ChangePasswordModal
