import styled from 'styled-components'

export const Prize = styled.div`
  height: 4rem;
  font-size: 1.2rem;
  color: #f9b938;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: end;
    padding-right: 1rem;
  }

  @media (min-width: 1560px) {
    justify-content: center;
    padding-left: 2rem;
  }
`
