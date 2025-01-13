import styled from "styled-components"

export const Container = styled.div `
   height: 100vh;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
   



   img {
    width: 350px;
    height: 90%;
    border: 1px solid #ffffff;

      @media (max-width: 1024px) {
        width: 90%;
        height: 80%;
        margin-right: 30px;
        margin-left: 250px;
      }

      @media (max-width: 820px) {
        width: 70%;
        height: 70%;
        margin-right: 30px;
        margin-left: 250px;
      }



      @media (max-width: 768px) {
        width: 90%;
        height: 90%;
        margin-right: 30px;
        margin-left: 30px;
      }

      @media (max-width: 430px) {
        width: 90%;
        height: 70%;
        margin-right: 30px;
        margin-left: 30px;
      }

      @media (max-width: 414px) {
        width: 90%;
        height: 70%;
        margin-right: 30px;
        margin-left: 30px;
      }
   }

   
`