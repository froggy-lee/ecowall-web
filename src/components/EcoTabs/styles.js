import styled from 'styled-components'

export const WrapperEcoTab = styled.div`
  display: flex;
  justify-content: center;
  & > .col {
    & > .nav {
      flex-direction: column;
      align-items: center;

      .nav-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .nav-link {
          font-weight: 400;
          padding: 1.3rem;
          width: 100%;
          font-size: 2rem;
          border: none;
          border-radius: 4px;
          color: #6a6d91;
          background-color: #2e3a59;
          margin-bottom: 5px;
          box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%),
            0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
        }

        .active {
          background-color: #57668c;
          color: #fff;
          font-weight: 600;
        }

        @media (min-width: 700px) {
          width: 49.5% !important;
          &:nth-child(2) {
          }
        }
      }
    }
    .nav-tabs {
      border-bottom: none;
    }
  }

  @media (min-width: 700px) {
    .col {
      .nav {
        flex-direction: row;
        justify-content: space-between;
        .nav-item {
          width: 32%;
        }
      }
    }
  }
`
