import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  &:before {
    content: '';
    position: fixed;
    z-index: -999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.mainBg};
  }
`

export const Container = styled.div`
  width: 100%;
`

export const Main = styled.div`
  margin-top: 8rem;
  /* padding: 2rem; */
`
