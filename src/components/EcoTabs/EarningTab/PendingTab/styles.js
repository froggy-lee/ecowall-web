import styled from 'styled-components'

export const WrapperTable = styled.div`
  width: 100%;
  table {
    padding-top: 2rem;
    border-collapse: separate;
    border: none;
    border-spacing: 0;

    thead {
      height: 5.4rem;
      background-color: #1c253c;
      th {
        width: 15%;
        text-align: left;
        border-spacing: 0;
        font-size: 1.1rem;
        font-weight: 500;
        color: #8f91b4;
        padding: 0.5rem;
        border: none;
        line-height: 1.5rem;

        &:last-child {
          width: 20%;
        }

        @media (min-width: 1024px) {
          font-size: 2rem;
        }
      }
    }

    tbody {
      tr {
        height: 5.4rem;
        background-color: #2e3a59;
        td {
          line-height: 1.5rem;
          font-size: 1.1rem;
          font-weight: 400;
          padding: 0;
          color: #8f91b4;
          text-align: left;
          padding-left: 5px;

          &:first-child,
          &:nth-child(2) {
            div {
              width: 60%;
            }
          }

          @media (min-width: 1024px) {
            font-size: 2rem;
          }
        }
      }
    }
  }
`

export const NoData = styled.div`
  height: 5.4rem;
  background-color: #2e3a59;
  color: #8f91b4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`
