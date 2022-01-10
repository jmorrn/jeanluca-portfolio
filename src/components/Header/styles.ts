import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  padding: 36px;
  width: 60%;
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    z-index: 1;
  }

  .menuContent {
    width: 100%;
    float: right;
    height: 70px;
    border-bottom: 1px solid var(--white);

    @media (max-width: 792px) {
      width: 100%;
      z-index: 1;
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
    justify-content: flex-start;
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

    .socialMedia {
      width: 100%;
      padding: 1.5rem;
      display: flex;
      justify-content: flex-end;

      a {
        margin-right: 8px;
        :nth-child(2) {
          margin-right: 0;
        }
        > svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`
