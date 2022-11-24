import styled from 'styled-components'

export const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  //margin-bottom: 1rem;
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.3px;
    color: #fbbb00;
    margin-top: 1rem;
  }
  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.mainText};
  }

  .input-wrapper {
    position: relative;
    margin-top: 0.8rem;
    input {
      width: 100%;
      font-weight: 400;
      background-color: #030d28;
      border: none;
      border-radius: 10px;
      padding: 1.5rem 1rem;
      padding-right: 10rem;
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: 0.3px;
      color: white;

      &:focus-visible,
      &:active,
      &:focus {
        border: none !important;
        outline: none !important;
      }
    }
    .btn-password {
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;
      button {
        padding: 1.3rem;
        background-color: #030d28;
        border: none;
        border-radius: 9px;
        img {
          margin-top: 0.1rem !important;
        }
      }
    }
  }

  .text-error {
    color: red;
    font-size: 12px;
    font-style: italic;
    margin-bottom: 0.5rem;
  }
`
