import styled from 'styled-components'

export const WrapperRank = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 201, 63, 0.12);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const Rank = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.11);
    width: 23px;
    height: 23px;
    border-radius: 20px;
    position: absolute;
  }
`
