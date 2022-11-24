import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 11px;
  padding: 2rem;
  background-color: #212c47;
  margin-top: 1rem;
  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 15px;
    letter-spacing: 0.3px;
    color: #f9b938;
  }

  .list-data {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2rem;
    .claimed,
    .claim,
    .claim_active {
      width: 10rem;
      background-color: #2e3a59;
      text-align: center;
      padding: 1rem 0.5rem;
      border-radius: 4px;
      color: #8c9abc;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
      @media (max-width: 390px) {
        width: 9rem;
      }
      .day {
        font-size: 1rem;
        font-weight: 700;
      }

      button {
        background: #425074;
        border-radius: 5px;
        border: none;
        padding: 0.3rem 1.2rem;
        color: #8c9abc;
      }
    }
    .claimed,
    .claim_active {
      .day,
      .coins {
        background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .claimed {
      button {
        background: #1c253c;
      }
    }
    .claim_active {
      button {
        background: linear-gradient(101.45deg, #edb01b 0%, #fbde48 100%);
        color: #030d28;
      }
    }
  }
  .note {
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.3px;
    color: #8c9abc;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: #2e3a59;
    width: 100%;
    div {
      margin-right: 1rem;
    }
    span {
      color: #f9b938;
    }
  }
  .twitter {
    background-color: #2e3a59;
    border-radius: 9px;
    width: 23rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    .follow {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.3px;
      }
      h2 {
        font-weight: 600;
        font-size: 10px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.3px;
        background-color: #212c47;
        border-radius: 11px;
        padding: 0.5rem 0;
      }
    }
  }
`
export const Twitter = styled.div`
  display: flex;
`
export const ButtonTwitter = styled.button`
  background-color: #425074;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
`
