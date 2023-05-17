import styled from 'styled-components'

export const Wrapper = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 69% 30%;
  background-color: #2e3a59;
  width: 98%;
  margin: auto;
  margin-top: 20rem;
  padding: 2rem;
  gap: 1.5rem;
  border-radius: 16px;
  @media (max-width: 1212px) {
    display: flex;
    flex-direction: column;
  }
`
