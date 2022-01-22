import styled from 'styled-components'

const ImageWrapper = styled.div`
  height: calc(100vh - 142px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 570px) {
    height: auto;
  }
`

const ImageError = styled.img`
  width: 100%;
  max-width: 750px;
  height: 100%;
`

export { ImageError, ImageWrapper }
