import styled from 'styled-components'

export const AlertWrapper = styled.div`
  padding: 0 1rem;
  .title {
    font-weight: 650;
    font-size: 24px;
    line-height: 15px;
    text-align: center;
    background: linear-gradient(156.84deg, #edb01b 0%, #ffdb70 84.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding: 1rem;
    @media (max-width: 475px) {
      font-size: 21px;
    }
  }
  .des-delete {
    margin: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    margin-top: 1rem;
    margin-bottom: 2rem;
    @media (max-width: 475px) {
      font-size: 16px;
      line-height: 22px;
      margin-top: 0rem;
      margin-bottom: 1.5rem;
    }
  }
  .des {
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    margin-top: 1rem;
  }
  .list-btn {
    display: flex;
    justify-content: space-around;
    .btn-cancel,
    .btn-confirm {
      width: 15rem;
      padding: 1.5rem 0rem;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 15px;
      text-align: center;
      border: none;
      text-transform: uppercase;
      border-radius: 4px;
      @media (max-width: 475px) {
        font-size: 16px;
        width: 11rem;
        padding: 1rem 0.5rem;
      }
    }
    .btn-cancel {
      background: #dedede;
      color: #404040;
    }
    .btn-confirm {
      background: #d80027;
      color: #ffffff;
    }
  }
`
