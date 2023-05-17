import styled from 'styled-components'

export const WrapperTab = styled.div`
  table {
    padding-top: 2rem;

    tbody {
      tr {
        td:last-child {
          div {
            width: 80%;
          }
        }
      }
    }
  }

  .col {
    .nav {
      .nav-item {
        @media (min-width: 700px) {
          width: 49.5%;
          &:nth-child(2) {
            margin: 0;
          }
        }
      }
    }
  }
`
