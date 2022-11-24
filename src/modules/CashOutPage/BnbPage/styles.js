import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 20rem;
  color: #ffffff;
  @media (max-width: 600px) {
    width: 95%;
  }
  .price-selection {
    background-color: #030d28;
    border-radius: 11px;
    padding: 3rem;
    @media (max-width: 600px) {
      padding: 1rem;
    }
    .top {
      display: flex;
      justify-content: space-between;
      @media (max-width: 957px) {
        flex-direction: column;
        padding: 2rem 0rem;
      }
      .top-left {
        display: flex;
        @media (max-width: 957px) {
          flex-direction: column;
          margin-bottom: 1rem;
        }
      }
      .des {
        display: flex;
        align-items: center;
        width: 39rem;
        font-weight: 500;
        font-size: 11px;
        line-height: 18px;
        letter-spacing: -0.4px;
        background: #131b2f;
        border-radius: 8px;
        padding: 0 1rem;
        margin-left: 2rem;
        margin-right: 2rem;
        @media (max-width: 957px) {
          margin-top: 1rem;
          margin-left: 0rem;
          padding: 1rem;
        }
        @media (max-width: 442px) {
          width: 100%;
        }
        .text {
          margin-left: 1.5rem;
        }
      }
    }
    .wallet-address-section {
      .list-btn {
        display: flex;
        width: 33rem;
        justify-content: space-between;
        margin-top: 2rem;
        .active {
          background: #425074;
          color: #ffffff;
        }
      }
      .address-wallet {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 2rem;
        @media (max-width: 753px) {
          flex-direction: column;
        }
        .input-address {
          width: calc(100% - 190px);
          @media (max-width: 753px) {
            width: 100%;
          }
        }
      }
      .coin-rate {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        flex-wrap: wrap;
        @media (max-width: 753px) {
          flex-direction: column;
        }
        .input-coin {
          width: calc(100% - 190px);
          @media (max-width: 753px) {
            width: 100%;
          }
        }
        .rate {
          width: 17rem;
          height: 4rem;
          background: #1c253c;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          font-weight: 400;
          font-size: 10px;
          line-height: 18px;
          @media (max-width: 753px) {
            margin-top: 1rem;
          }
          span {
            &:first-child {
              color: #f9b938;
            }
          }
        }
      }
    }
  }
  .withdraw {
    background-color: #030d28;
    margin-top: 2rem;
    border-radius: 11px;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 957px) {
      flex-direction: column;
    }
    .coin-price {
      width: 28rem;
      background: #2e3a59;
      border-radius: 4px;
      padding: 1rem 2rem;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #f9b938;
      div {
        display: flex;
        justify-content: space-between;
        &:first-child {
          color: #8c9abc;
          margin-bottom: 1rem;
        }
        span {
        }
      }
      .coin-amount {
        width: 50%;
        text-align: right;
        overflow: hidden;
      }
    }
    .btn-withdraw {
      button {
        width: 30rem;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        color: #ffffff;
        background-color: #f9b938;
        padding: 1.5rem;
        border: none;
        border-radius: 56px;
        @media (max-width: 957px) {
          margin-top: 2rem;
        }
      }
    }
  }
  .btn-back {
    display: flex;
    justify-content: center;
  }
`
export const ButtonBack = styled.button`
  position: absolute;
  top: 20rem;
  left: 1rem;
  width: 14rem;
  padding: 1rem;
  color: #57668c;
  background: #2e3a59;
  border-radius: 3px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    color: #ffffff;
  }
  @media (max-width: 1024px) {
    margin: 3rem 0;
    position: relative;
    top: 0;
  }
`
export const BtnAddress = styled.div`
  background: #1c253c;
  color: #57668c;
  text-transform: uppercase;
  width: 16rem;
  padding: 1.5rem;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  border: 0.829371px solid #2e3a59;
  border-radius: 4.14685px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  .btn-radio {
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
    .style-radio {
      position: absolute;
      top: 0;
      left: 0;
      height: 9px;
      width: 9px;
      background-color: #eee;
      border-radius: 50%;
    }
  }
  .btn-radio input:checked ~ .style-radio {
    background-color: #f9b938;
  }
`
export const BtnSave = styled.button`
  width: 17rem;
  height: 4rem;
  background: #f9b938;
  border-radius: 56px;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 1rem;
  border: none;
  @media (max-width: 753px) {
    width: 80%;
    margin: auto;
    margin-top: 2rem;
  }
`
export const Input = styled.input`
  background: #030d28;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  color: #ffffff;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  width: 100%;
  padding: 1rem 2rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Text = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.4px;
  color: #f9b938;
  margin-top: 1rem;
  width: 100%;
`
