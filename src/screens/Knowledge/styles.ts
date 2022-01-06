import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
  .content {
    display: block;

    @media (max-width: 792px) {
      display: flex;
      flex-direction: column-reverse;
    }

    .rightContent {
      width: 50%;
      position: absolute;
      right: 0;

      @media (max-width: 792px) {
        width: 100%;
        margin-top: 0;
        position: initial;
      }

      padding: 2.25rem;
      margin-top: 5rem;

      .filter {
        width: 100%;

        margin: 0 auto;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        button {
          cursor: pointer;
          min-width: 12px;
          height: 32px;
          margin-left: 1rem;
          font-size: 12px;
          padding: 0 12px;
          background: transparent;
          border-radius: 100px;
          color: var(--white);
          border: 2px solid var(--white);
        }
        .active {
          background: var(--white);
          color: var(--black);
        }

        @media (max-width: 1300px) {
          flex-direction: column;
        }
      }

      .cardContent {
        :nth-child(1) {
          margin-top: 0;
        }
        margin-top: 1rem;
        flex-wrap: wrap;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 570px) {
          flex-direction: column;
        }
      }
    }
  }
`
