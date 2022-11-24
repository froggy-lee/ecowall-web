import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .col {
    .nav {
      width: 31.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .nav-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav-link {
          font-weight: 400;
          padding: 1.3rem 0.8rem;
          font-size: 2rem;
          border: none;
          border-radius: 4px;
          color: #6a6d91;
          width: 100%;
          background-color: #2e3a59;
          box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%),
            0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);

          @media (min-width: 700px) {
            padding: 1.2rem;
          }
        }

        .active {
          background-color: #57668c;
          color: #fff;
          font-weight: 600;
        }
        &:nth-child(2) {
          margin: 0 0.6rem;
        }
      }

      @media (min-width: 700px) {
        width: 47rem;
      }
    }
  }
`

export const Offer = styled.div`
  padding-top: 5rem;
`
