import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0.5rem;
  width: 34rem;
  height: 90%;
  background-color: #0b142b;
  z-index: 2;
  padding: 1rem;
  border-radius: 4px;
  transition: all 1s;
  &.active {
    right: -34rem;
  }
  .list-btn {
    display: flex;
    justify-content: space-between;
  }
`

export const Button = styled.button`
  width: 15.5rem;
  height: 3.5rem;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  border-radius: 4px;
  border: 0.5px solid #ffffff;
  background: #57668c;
  color: #0e0c0d;
  &.button-active {
    background: linear-gradient(101.45deg, #edb01b 0%, #fbde48 100%);
    color: #ffffff;
  }
`
export const ShowChatBox = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 10rem;
  left: -3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #425074;
  border: none;
  border-radius: 4px;
  z-index: 9999;
`
