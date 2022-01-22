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
    }
  }
`
