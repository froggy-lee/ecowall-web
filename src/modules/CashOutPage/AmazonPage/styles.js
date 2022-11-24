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
    .list {
      display: flex;
      //justify-content: space-evenly;
      margin-top: 5rem;
      flex-wrap: wrap;
      @media (max-width: 664px) {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 41% 41%;
        justify-content: space-evenly;
      }
      .item,
      .item-active {
        position: relative;
        margin-bottom: 2rem;
        border-radius: 8px;
        height: 9.3rem;
        margin-right: 1.7%;
        @media (max-width: 600px) {
          height: 85%;
          margin-bottom: 0.5rem;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .item-active {
        box-shadow: 1px 1px 8px 5px #2983ee;
      }
    }
    .country {
      @media (max-width: 1024px) {
        margin-top: 1rem;
      }
      .select-box {
        font-size: 12px;
        font-weight: 500;
        width: 15rem;
        .select__menu {
          .select__menu-list {
            line-height: 1.5rem;
            font-size: 1.7rem;
            font-weight: 600;
            background-color: rgba(18, 25, 45, 1);
            color: rgba(191, 191, 191, 1);
            height: 100%;
            border-radius: 4px;
            ::-webkit-scrollbar {
              width: 0;
            }
            .select__option--is-focused {
              background: rgba(67, 88, 143, 1);
              color: #fff;
            }
            .select__option--is-selected {
              background: rgba(67, 88, 143, 1);
              font-size: 1.7rem;
              font-weight: 600;
            }
          }
        }
        .select__control {
          background: #1c253c;
          border: none;
          cursor: pointer;
          .select__value-container {
            padding: 0;

            .select__single-value {
              color: #fff;
              font-weight: 600;
              margin-left: 0.6rem;
            }

            .select__input-container {
              color: #fff;
              input {
                border: none !important;
              }
            }

            .select__indicator {
              padding: 2px !important;
            }
          }

          &:hover {
            border: 1px solid #8c9abc;
          }

          .select__indicators {
            display: none;
          }

          &:hover {
            border: none;
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
export const Price = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  color: #fc9a00;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  @media (max-width: 600px) {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 14px;
  }
`
export const Checkbox = styled.input`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: greenyellow;
  @media (max-width: 600px) {
    top: 0.5rem;
    right: 0.5rem;
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
export const Option = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: 1rem;
  div {
    margin-left: 0.5rem;
  }
`
