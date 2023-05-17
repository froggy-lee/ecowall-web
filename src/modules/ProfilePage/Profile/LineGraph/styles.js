import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  background-color: rgba(3, 13, 40, 0.8);

  @media (max-width: 1024px) {
    width: 100%;
  }
  canvas {
    //background-color: rgba(3, 13, 40, 0.8);
    padding: 1rem 2rem;
  }
`
