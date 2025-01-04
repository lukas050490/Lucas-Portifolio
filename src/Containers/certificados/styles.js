import styled from "styled-components"

export const Container = styled.div `
   height: 100vh;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;


   img {
    width: 600px;
    height: 800px;
    border: 1px solid #ffffff;

    @media (max-width: 768px) {
     width: 90%;
     height: 70%;
     margin-right: 30px;
   }
   }

   
`