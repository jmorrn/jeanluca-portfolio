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

      .postContent {
        margin-top: 1.5rem;
        line-height: 1.3rem;
      }

      .postDescription {
        opacity: 0.7;
      }

      hr {
        margin-top: 1rem;
      }

      .timenAuthor {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        span {
          margin-top: 1rem;

          font-weight: bold;

          time {
            font-weight: 300;
          }
        }
        .author {
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            width: 50px;
            height: 100%;
            border-radius: 50px;
          }

          p {
            margin-left: 1rem;
          }
        }
      }
    }
  }
`
