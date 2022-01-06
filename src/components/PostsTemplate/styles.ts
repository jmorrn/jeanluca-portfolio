import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  :hover {
    filter: brightness(1.9);
    transform: scale(1.02);
  }
  span {
    margin-top: 1rem;
    font-size: 12px !important;
    font-weight: bold;

    time {
      font-weight: 300;
    }
  }

  p {
    margin-top: 1.5rem !important;
  }
`
