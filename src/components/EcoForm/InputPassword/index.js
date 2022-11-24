import React, { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'

const InputPassword = ({
  label,
  name,
  placeholder,
  className,
  formik = {},
  ...rest
}) => {
  const [isHide, setIsHide] = useState(false)
  const handleHide = () => {
    setIsHide(!isHide)
  }

  const { handleChange, handleBlur, values, errors, touched } = formik

  return (
    <S.InputPassword className={className} {...rest}>
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          className={errors?.[name] && touched?.[name] && 'isvalid'}
          type={isHide ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.[name]}
          {...rest}
        />
        <div className="btn-password">
          <button type="button" onClick={handleHide}>
            <Image
              src={
                isHide
                  ? '/images/icons/showpassicon.png'
                  : '/images/icons/passwordicon.png'
              }
              width={19}
              height={17}
              alt=""
            />
          </button>
        </div>
      </div>
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
    </S.InputPassword>
  )
}

export default InputPassword
