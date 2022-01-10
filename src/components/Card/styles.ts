import styled from 'styled-components'

const CardContainer = styled.div`
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
  margin: 1rem;

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
    max-width: 100px;
  }

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 1rem;
  }

  p {
    margin-top: 0;
  }
`

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0.5rem 0;
  text-align: center;
`

export { CardContainer, CardInfo }
