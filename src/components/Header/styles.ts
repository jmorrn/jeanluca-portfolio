import styled, { css } from 'styled-components'

import { IHeaderProps } from './index'

export const Container = styled.header<IHeaderProps>`
  display: flex;
  padding: 36px;
  width: 60%;
  align-self: flex-end;

  ${({ isMobile }) =>
    isMobile &&
    css`
      height: 100vh;
      background: var(--light-gray);
      overflow: hidden;
    `}

  @media (max-width: 1024px) {
    width: 100%;
    z-index: 1;
    position: absolute;
  }

  .menuContent {
    width: 100%;
    float: right;
    height: 70px;
    border-bottom: 1px solid var(--white);

    @media (max-width: 490px) {
      border-bottom: 0;
    }

    @media (max-width: 792px) {
      width: 100%;
      z-index: 1;
    }

    @media (max-width: 366px) {
      padding: 0;
    }

    .mobileHeader {
      display: none;
      @media (max-width: 490px) {
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background: var(--dark-gray);

        > svg {
          width: 16px;
          height: 16px;
          color: var(--light-gray);
        }
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: 490px) {
      display: none;
      ${({ isMobile }) =>
        isMobile &&
        css`
          height: calc(100vh - 70px);
          display: flex;
          color: var(--dark-gray);
          flex-direction: column;
          justify-content: center;
        `}
    }

    li {
      padding: 1.5rem;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
      font-size: 1em;
      transition: 0.2s font-size;

      ${({ isMobile }) =>
        isMobile &&
        css`
          font-size: 1.5em;
        `}

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

      ${({ isMobile }) =>
        isMobile &&
        css`
          justify-content: center;
        `}

      a {
        margin-right: 8px;
        :nth-child(2) {
          margin-right: 0;
        }
        > svg {
          width: 1.5rem;
          height: 1.5rem;

          ${({ isMobile }) =>
            isMobile &&
            css`
              width: 2rem;
              height: 2rem;
            `}
        }
      }
    }
  }
`
