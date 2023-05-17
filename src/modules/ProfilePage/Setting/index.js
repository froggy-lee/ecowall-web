import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import Switch from 'react-switch'
import { useTranslation } from 'next-i18next'
import AlertModal from '/src/components/EcoModal/AlertModal'
import { useDispatch } from 'react-redux'
import { getMeAction, updateUserAciton } from '/src/store/slice/users'
import { uploadFileRequest } from '/src/api/users/request'
import { toast } from 'react-toastify'
import ClipLoader from 'react-spinners/ClipLoader'
import moment from 'moment'

function SettingSection({ profile }) {
  const { t } = useTranslation('profile')
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  const [imgAvatar, setImgAvatar] = useState('')
  const [toggle, setToggle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setloading] = useState(false)
  // Your profile visibility has been set to Public
  useEffect(() => {
    setUser(profile)
    setImgAvatar(profile?.avatar)
    {
      profile?.profileVisibility === 'public'
        ? setToggle(false)
        : setToggle(true)
    }
  }, [profile])

  const handleChangeSwitch = async () => {
    const profileVisibility = toggle ? 'public' : 'private'
    await dispatch(updateUserAciton({ profileVisibility }))
    await dispatch(getMeAction())
    toast.success(
      `Your profile visibility has been set to ${profileVisibility}`
    )
    // Update API newAccount
  }

  const handleChangeName = e => {
    let newAccout = {
      ...user,
      username: e.target.value
    }
    setUser(newAccout)
  }

  const handleSubmitName = async e => {
    // Update API
    e.preventDefault()
    try {
      if (user?.username !== profile.username) {
        await dispatch(updateUserAciton({ username: user.username })).unwrap()
        await dispatch(getMeAction())
        toast.success('Successfully renamed !!')
      }
    } catch (error) {
      toast.error(error?.message)
    }
  }

  const onChange = async e => {
    setloading(true)
    try {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('images', file)
      const res = await uploadFileRequest(formData)
      await dispatch(updateUserAciton({ avatar: res[0]?.avatar }))
      await dispatch(getMeAction())
    } catch (error) {
      toast.error(error?.message)
    } finally {
      setloading(false)
    }
  }

  const deleteAccount = () => {
    setIsOpen(!isOpen)
  }

  const handleOpenAlert = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.Line></S.Line>
      <S.Wrapper>
        <div>
          <S.Title>{t('profileSetting')}</S.Title>
          <div className="infor">
            <form className="change-name">
              <div className="change-name-user">
                <S.Label>{t('changeName')}</S.Label>
                <div className="input-username">
                  <S.Input
                    type="text"
                    value={user?.username || ''}
                    onChange={handleChangeName}
                    maxLength={30}
                  />
                </div>
              </div>
              <div>
                <S.Button onClick={handleSubmitName} type="submit">
                  {t('change')}
                </S.Button>
              </div>
            </form>
            {loading ? (
              <div className="loading">
                <ClipLoader color="F8E71C" />
              </div>
            ) : (
              <div>
                <label className="change-avatar" htmlFor="input-file">
                  <div className="avatar">
                    <Image
                      src={imgAvatar || '/images/no-avatar.png'}
                      width={80}
                      height={80}
                      alt="avatar"
                    />
                  </div>
                  <div className="camera">
                    <Image
                      src="/images/icons/camera.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                  <h3>{t('changeAvatar')}</h3>
                </label>
                <input
                  type="file"
                  className="input_file"
                  id="input-file"
                  onChange={onChange}
                />
              </div>
            )}
          </div>
          <S.Label>{t('profileVisility')}</S.Label>
          <div className="switch">
            <div>{t('public')}</div>
            <Switch
              onChange={handleChangeSwitch}
              checked={toggle}
              onColor="#fefefe"
              offColor="#030d28"
              onHandleColor="#fefefe"
              offHandleColor="#f9b938"
              handleDiameter={15}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={10}
              width={30}
              className="react-switch"
              id="material-switch"
              size="small"
            />
            <div>{t('private')}</div>
          </div>

          <S.Label>{t('deleteAccount')}</S.Label>
          <S.ButtonDelete onClick={deleteAccount}>
            {t('deleteAccount')}
          </S.ButtonDelete>
        </div>
        <div className="right">
          <div className="title">
            <S.Title>{t('general')}</S.Title>
          </div>
          <div className="general">
            <div>
              <span>{t('freecashId')}</span>
              <span>{user?._id}</span>
            </div>
            <div>
              <span>{t('googleid')}</span>
              <span>{user?.googleId}</span>
            </div>
            <div>
              <span>{t('balance')}</span>
              <span>{user?.balance || '0'} coin</span>
            </div>
            <div>
              <span>{t('verified')}</span>
              <span>{user?.verified || 'No'}</span>
            </div>
            <div>
              <span>{t('offerValue')}</span>
              <span>{user?.maxOfferValue} coin</span>
            </div>
            <div>
              <span>{t('referrer')}</span>
              <span>{user?.referral}</span>
            </div>
            <div>
              <span>{t('referrerEarnings')}</span>
              <span>{user?.referralEarnings} coin</span>
            </div>
            <div>
              <span>{t('dataJoined')}</span>
              <span></span>
              {moment(user?.createdAt).format('LLLL')}
            </div>
            <div>
              <span>{t('email')}</span>
              <span>{user?.email}</span>
            </div>
          </div>
        </div>
      </S.Wrapper>
      <AlertModal
        type="delete"
        title="DELETE ACCOUNT?"
        des="Are you sure you want to delete your account?"
        btnCancel
        btnConfirm="YES"
        width="100"
        isOpen={isOpen}
        onToggle={handleOpenAlert}
        user={user}
      />
    </>
  )
}

export default SettingSection
