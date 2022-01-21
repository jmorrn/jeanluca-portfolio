import styled from 'styled-components'

const Filter = styled.div`
        width: 100%;

        margin: 0 auto;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;


        button {
          cursor: pointer;
          width: 250px;
          height: 32px;
          margin-left: 1rem;
          font-size: 12px;
          padding: 0 12px;
          background: transparent;
          border-radius: 5px;
          color: var(--white);
          border: 2px solid var(--white);

          @media(max-width: 600px){
            margin-left: 0;
            margin-top : 1rem;
          }


          @media(max-width: 295px){
            width: 200px;
          }


        }

        p{
          font-size: 1.25em;
          @media(max-width: 600px){
            align-self: flex-start;
          }

        }
        .active {
          background: var(--white);
          color: var(--black);
        }

        @media(max-width: 600px){
          flex-direction: column;
          width: fit-content;
        }


      }
`
const CardContent = styled.div`
  :nth-child(1) {
    margin-top: 0;
  }

  margin-top: 1rem;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`
export { Filter, CardContent }
