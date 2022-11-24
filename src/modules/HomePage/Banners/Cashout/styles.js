import styled from 'styled-components'

export const Wrapper = styled.div`
  .cashout {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.3px;
    background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .list-pay {
    width: 35rem;
    display: flex;
    flex-wrap: wrap;
    img {
      border-radius: 10px;
    }
    .item {
      margin-right: 0.5rem;
      margin-top: 0.5rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`
