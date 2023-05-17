import styled from 'styled-components'

export const Select = styled.div`
  width: 25rem;
  position: relative;
  top: 1rem;
  float: right;
  z-index: 0;

  label {
    font-size: 1.7rem;
    position: absolute;
    top: 3px;
    left: 6px;
    color: #8f91b4;
    cursor: pointer;
    z-index: 1;
  }

  .select__control {
    height: 5.4rem;
    border: none;
    border-radius: 0px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    border: 1px solid #8c9abc;
    background: #2e3a59;
    border-radius: 4px;
    cursor: pointer;

    .select__value-container {
      padding: 0;

      .select__single-value {
        color: #fff;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 2rem;
        font-weight: 600;
        margin-left: 0.6rem;
      }

      .select__input-container {
        margin-top: 2rem;
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
  }
  .select__indicators {
    .select__indicator-separator {
      width: 0px;
    }
  }
  .select__menu {
    .select__menu-list {
      line-height: 1.5rem;
      font-size: 1.7rem;
      font-weight: 600;
      background-color: #2e3a59;
      color: #a9a9a9;
      height: 15rem;
      ::-webkit-scrollbar {
        width: 0;
      }
      .select__option--is-focused {
        background: #0dcaf0;
        color: #fff;
      }
      .select__option--is-selected {
        background: #0dcaf0;
        font-size: 1.7rem;
        font-weight: 600;
      }
    }
  }
`
