import styled from 'styled-components'

export const Wrapper = styled.div`
  .panigate-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
      justify-content: flex-end;
    }
    .item {
      .link {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.9rem;
        background: transparent;
        color: #f9b938;
        padding: 0.2rem 1rem;
        @media (min-width: 1024px) {
          padding: 0.5rem 1.5rem;
        }
        .images {
          display: flex;
          width: 100%;
          @media (min-width: 1024px) {
            width: 100%;
          }
        }
      }
    }

    .active {
      .link {
        color: #ffffff;
        background-color: #f9b938;
        border-radius: 5px;

        &:hover {
          color: #ffffff !important;
        }
      }
    }
  }
`
