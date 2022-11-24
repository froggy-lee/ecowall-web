import React from 'react'

import * as S from './styles'

const Input = ({
  label,
  type,
  name,
  placeholder,
  description,
  className,
  formik = {},
  ...rest
}) => {
  const { handleChange, handleBlur, values, errors, touched } = formik

  return (
    <S.Input className={className} {...rest}>
      {label && <label>{label}</label>}
      <input
        className={errors?.[name] && touched?.[name] && 'isvalid'}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values?.[name]}
        {...rest}
      />
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
      {description && <div>{description}</div>}
    </S.Input>
  )
}

export default Input
