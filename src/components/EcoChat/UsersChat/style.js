import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #8c9abc;
  height: 90%;
  .text-box {
    height: 90%;
    margin-top: 1rem;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0px;
    }
    .message {
      background: #2e3a59;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 4px;
      .account {
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          align-items: center;
          img {
            border-radius: 50% !important;
          }
        }
      }
    }
  }
  .input-message {
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input-text {
      position: relative;
      margin-right: 1rem;
      width: 28rem;
      box-sizing: border-box !important;
      textarea {
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        background: #1e2944;
        border-radius: 29px;
        border: none;
        color: #ffffff;
        width: 28rem;
        padding: 1rem 3.5rem 0rem 1.2rem;
        white-space: wrap;
        resize: none;
        &::-webkit-scrollbar {
          width: 0px;
        }
      }
      button {
        position: absolute;
        right: 1rem;
        top: 1rem;
        background: #1e2944;
        border: none;
      }
    }
    .enter-chatbox {
      background: #f9b938;
      border: none;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
export const Level = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  color: #ffffff;
  background: #414c68;
  padding: 0.3rem 0.5rem;
  margin-left: 0.5rem;
`
export const Name = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #f9b938;
  margin-left: 0.5rem;
`
export const Time = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #8c9abc;
`
export const Message = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.3px;
  margin-top: 1rem;
  white-space: pre-wrap;
`
