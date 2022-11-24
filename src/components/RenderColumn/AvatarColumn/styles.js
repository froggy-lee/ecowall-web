import styled from 'styled-components'

export const WrapperContentTable = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;

  .image-user {
    border-radius: 50% !important;
  }

  @media (min-width: 470px) {
    justify-content: center;
  }
`

export const Username = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  width: 9rem;
  margin-left: -9px;

  overflow: hidden;
  text-overflow: ellipsis !important;
  white-space: nowrap;

  @media (min-width: 470px) {
    width: 50%;
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`

export const Level = styled.div`
  position: relative;
  top: -6px;
  right: 10px;

  p {
    font-size: 10px;
    position: absolute;
    top: -3px;
    left: 5px;
  }
`
