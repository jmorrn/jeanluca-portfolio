import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  min-height: 250px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  background-color: var(--dark-gray);
  margin-bottom: 1rem;
  border-radius: 8px;
  border: none;

  :hover {
    border: 2px solid var(--white);
  }

  @media (max-width: 570px) {
    margin-top: 1rem;

    :nth-child(1) {
      margin-top: 0;
    }
  }

  > img {
    border-radius: 8px;
    width: 100%;
    max-width: 150px;
  }

  h3 {
    font-size: 1.2em;
    margin-top: 1rem;
  }

  p {
    margin-top: 0;
  }
`
