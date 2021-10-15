import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: var(--white);
  margin-top: 1rem;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;

    .photo {
      object-fit: cover;
      width: 100%;
      max-width: 60px;
      height: 60px;
      border-radius: 50% 50%;
    }

    .Logo {
      width: 100%;
      height: 46px;
      margin-left: 2rem;
    }
  }

  #menu {
    list-style-type: none;
    display: flex;
    align-self: center;
    flex-direction: row;

    .active:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      top: 100%;
      left: 0;
      background: linear-gradient(90deg, var(--blue-100) 0%, var(--blue-500) 97.62%);

    }
  }

  #menu li {
    padding: 1rem;
  }

  #menu a {
    position: relative;
    font-size: 1em;
    text-decoration: none;


    }
  }

  #social-medias {
    svg {
      width: 24px;
      height: 24px;

      :first-child {
        margin-right: 1rem;
      }
    }
  }
`
