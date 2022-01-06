import styled from 'styled-components'

export const Container = styled.header`
  display: block;
  position: relative;

  .menuContent {
    position: absolute;
    width: 50%;
    right: 0;
    padding: 36px;

    @media (max-width: 792px) {
      width: 100%;
      z-index: 1;
    }
    @media (max-width: 792px) {
      padding: 16px 36px;
    }

    @media (max-width: 366px) {
      padding: 0;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    li {
      padding: 1.5rem;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
      font-size: 1em;
      transition: 0.2s font-size;

      @media (max-width: 366px) {
        padding: 0;
        font-size: 0.8em;
        margin-top: 1rem;

        :hover {
          font-size: 0.8em;
        }
      }

      @media (max-width: 1316px) {
        padding: 1rem;
      }

      :hover {
        font-size: 1.1em;
        filter: brightness(0.9);
      }
    }
  }
`
