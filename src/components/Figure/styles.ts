import styled from 'styled-components'

export const FigureContainer = styled.a`
  position: relative;
  width: 100%;

  min-height: fit-content;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
  background-color: var(--dark-gray);
  margin-bottom: 1rem;
  border-radius: 8px;
  padding: 2rem;
  border: 2px solid transparent;
  cursor: pointer;

  :hover {
    border: 2px solid var(--white);
  }

  @media (max-width: 436px) {
    flex-direction: column;
  }

  .Line {
    border: 1px solid var(--white);
    height: 60px;
    margin-left: 1rem;

    @media (max-width: 436px) {
      display: none;
    }
  }

  .textContent {
    margin-left: 1rem;

    .noDescription {
      opacity: 0.5;
    }

    @media (max-width: 436px) {
      text-align: center;
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  @media (max-width: 570px) {
    margin-top: 1rem;

    :nth-child(1) {
      margin-top: 0;
    }
  }

  > img {
    border-radius: 100px;
    width: 100%;
    max-width: 60px;
  }

  h3 {
    font-size: 1.2em;
    text-transform: capitalize;
  }

  p {
    margin-top: 0;
  }
`
