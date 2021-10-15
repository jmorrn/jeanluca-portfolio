import styled from 'styled-components'

export const Container = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 200px;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  color: var(--blue-100);
  cursor: pointer;

  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 1rem;
    width: 24px;
    height: 24px;
  }
`
