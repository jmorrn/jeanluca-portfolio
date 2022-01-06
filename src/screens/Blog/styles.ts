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

      p {
        margin-top: 0.5rem;
        font-size: 18px;
        line-height: 1.25;
        @media (max-width: 792px) {
          font-size: 16px;
        }
      }

      .buttonCurriculum {
        display: block;
        width: 200px;
        float: right;
        text-align: center;
        font-size: 16px;

        padding: 1rem;
        margin-top: 1rem;

        border: 3px solid var(--light-gray);
        border-radius: 100px;

        @media (max-width: 960px) {
          width: 100%;
        }
      }
    }
  }
`
