import styled from 'styled-components'
import { Modal } from 'reactstrap'

export const ModalWrapper = styled(Modal)`
  width: ${props => (props.width ? props.width + 'rem' : '100%')};
  margin-top: 5rem;
  @media (max-width: 575px) {
    width: 90%;
    margin: auto;
    margin-top: 5rem;
  }
  @media (max-width: 921px) {
    width: ${props => (props.signupbonus ? '90%' : '')};
  }
  @media (max-width: 650px) {
    width: ${props => (props.helpmodal ? '90%' : '')};
  }
  &.modal-dialog {
    max-width: 100%;
  }
  .modal-content {
    background-color: ${props =>
      props.background ? props.background : '#394462'};
    border-radius: 1rem;
    color: #fbbb00;
    padding: ${props => (props.background ? '0' : '2rem')};
    border: ${props =>
      props.background ? 'none' : '1px solid rgba(0,0,0,0.2)'};
    .modal-header {
      font-size: 24px;
      line-height: 32px;
      color: #ffffff;
      border-bottom: none;
      justify-content: center;
      padding: 0;
      button {
        display: none;
      }
    }
    .modal-body {
      padding: 0;
    }
    .modal-footer {
      border-top: none;
    }
  }
`
export const Label = styled.label`
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #fbbb00;
  margin-top: 1rem;
`

export const Button = styled.button`
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  background: linear-gradient(101.45deg, #edb01b 0%, #fbde48 100%);
  box-shadow: 0px 10px 20px rgba(58, 41, 106, 0.2);
  border-radius: 8px;
  border: none;
  padding: 1rem;
  margin-top: 2rem;
`

export const Input = styled.input`
  background: #030d28;
  border-radius: 10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #ffffff;
  padding: 1.5rem 1rem;
  border: none;
  width: 100%;
  margin-top: 1rem;

  &:active,
  &:focus,
  &:focus-visible {
    outline: none !important;
    border: none !important;
  }
`

export const Error = styled.div`
  color: red;
  width: 100%;
  font-size: 12px;
  font-style: italic;
  margin-bottom: 0.5rem;
`

export const PasswordIcon = styled.button`
  background-color: #030d28;
  border-radius: 10px;
  height: 4.5rem;
  width: 5rem;
  border: none;
  padding-top: 0.7rem;
`

export const H2 = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 13px;
  margin-top: 1rem;
  line-height: 19px;
  span {
    color: #fbbb00;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
export const H3 = styled.h3`
  font-size: 9.5px;
  text-align: center;
  color: #ffffff;
  margin-top: 1rem;
  span {
    color: #fbbb00;
  }
`

export const SigninWrapper = styled.div`
  .btn-google {
    margin-top: 2rem;
  }
  .btn-password {
    position: absolute;
    top: 22.5rem;
    right: 0.5rem;
  }
  .line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    color: #ffffff;
    div {
      width: 45%;
      height: 3px;
      &:first-child {
        background: linear-gradient(
          101.45deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 100%
        );
      }
      &:last-child {
        background: linear-gradient(
          101.45deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
  }
  form {
    margin-top: 1rem;
  }
`

export const SignupWrapper = styled.div`
  .btn-google {
    margin-top: 2rem;
  }
  form {
    margin-top: 1rem;
  }
  .btn-password,
  .btn-password-comfirm {
    position: absolute;
    right: 0.5rem;
  }
  .btn-password {
    top: 37rem;
  }
  .btn-password-comfirm {
    top: 49rem;
  }
  .btn-checkbox {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    h3 {
      font-size: 10px;
      color: #ffffff;
      margin-left: 2rem;
      a {
        color: #fbbb00;
        text-decoration: underline;
      }
    }
    .checkbox {
      display: block;
      position: relative;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }
      .checkmark {
        position: absolute;
        top: -0.5rem;
        left: 0;
        height: 15px;
        width: 15px;
        background-color: #374260;
        border: 1px solid #ffffff;
        border-radius: 3px;
      }
    }
    .checkbox input:checked ~ .checkmark {
      background-color: #f9b938;
      &::after {
        position: absolute;
        content: '';
        left: 4px;
        top: 1px;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
`

export const ForgotPasswordWrapper = styled.div`
  padding: 0rem 2rem;
  .code {
    display: flex;
    gap: 1rem;
    .resent-code {
      height: 5rem;
      margin-top: 1.2rem;
      border-radius: 5px;
      font-size: 12px;
      width: 22rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: none;
      background-color: whitesmoke;
      color: #2e3a59;
      &:disabled {
        background-color: #2e3a59;
        color: #8c9abc;
      }
      @media (max-width: 660px) {
        width: 10rem;
      }
    }
  }
  form {
    margin-top: 1rem;
  }
  .btn-password,
  .btn-password-confirm {
    position: absolute;
    right: 2.5rem;
  }
  .btn-password {
    top: 16rem;
  }
  .btn-password-confirm {
    top: 27.5rem;
  }
`

export const FindAccoutWrapper = styled.div`
  height: 25rem;
  padding: 2rem 0;

  .des {
    color: #fbbb00 !important;
    font-size: 13.5px;
    text-align: center;
    width: 70%;
    margin: auto;
    margin-bottom: 3rem;
  }
`

export const SignupCodeWrapper = styled.div`
  .code {
    display: flex;
    gap: 1rem;
    .resent-code {
      height: 5rem;
      margin-top: 1.2rem;
      border-radius: 5px;
      font-size: 12px;
      width: 22rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: none;
      background-color: whitesmoke;
      color: #2e3a59;
      &:disabled {
        background-color: #2e3a59;
        color: #8c9abc;
      }
      @media (max-width: 660px) {
        width: 10rem;
      }
    }
  }
  form {
    margin-top: 1rem;
  }
`
export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  color: #ffffff;
  div {
    width: 45%;
    height: 3px;
    &:first-child {
      background: linear-gradient(
        101.45deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
    }
    &:last-child {
      background: linear-gradient(
        101.45deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`
export const BtnCloseModal = styled.div`
  position: absolute;
  top: -3rem;
  right: 1rem;
  @media (max-width: 400px) {
    right: 0;
  }
`
