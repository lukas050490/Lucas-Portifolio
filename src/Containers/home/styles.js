import styled from "styled-components";


export const Container = styled.div`

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction:column;
  
   @media (max-width: 768px) {
    padding: 10px;
   }
`;

export const Content = styled.div`
   display: flex;
     

  .myfoto {
      height: 400px;
      width: 400px;
      border-radius: 50%;
      margin-top: 150px;
      margin-left: 400px;
      margin-right: 100px;
      transform: translateX(-900px) rotate(180deg);
      opacity: 0; 
    }



  .group {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    

    div {
      display: flex;
      flex-direction: column;
     

    

      h1 {
        color: #ffffff;
        margin-bottom: 20px;
        margin-left: 200px;
        margin-top: 100px;

        span {
          color: #23c483;
          font-size: 50px;
        }
      }
      p {
        color: #ffffff;
        margin-right: 200px;
        margin-left: 50px;
        margin-bottom: 100px;
        font-size: 26px;

        span {
          color: #23c483;
          font-weight: bold;
        }
      }
    }


    .About {
      transform: translateX(-700px);
      opacity: 0;

      h2 {
        color: #23c483;
        font-size: 32px;
        margin-bottom: 20px;
        margin-top: 20px;
        margin-left: 50px;
      }

      span {
        color:  #22c1c3;
      }
    }

    button {
      padding: 1.3em 3em;
      width: 250px;
      margin-bottom: 15px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
      color: #000;
      background-color: #fff;
      border: none;
      border-radius: 45px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
    }

    button:hover {
      background-color: #23c483;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }

    button:active {
      transform: translateY(-1px);
    }
  }
 


  .formulario {
  background: #ffffff;
  width:500px;
  height: 400px;
  margin-top: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
  z-index: 4;
  position: absolute; 
  top: 160%; 
  left: 40%; 
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  transition: all 3s ease;
  

  p {
    color: #23c483;
  }


  button {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: #22c1c3;
    color: #ffffff;
    cursor: pointer;  
  }
}


.formulario.show {
  right: 400px; 
  opacity: 1;
  visibility: visible;
}

.formulario.hide {
  left: -500px; 
  opacity: 0;
  visibility: hidden;
}


 @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;



    .myfoto {
      height: 120px;
      width: 120px; 
      margin-top: 20px; 
      margin-right: 0;
      margin-left: 0; 
    }

    .group {
      margin-left: 10px;
      padding-right: 25px; 
      
      .AboutFirst {
        margin: 0;
      }

      div {
        margin-bottom: 180px;


        h1 {
           margin-left: 0;
           font-size: 20px; 
          span {
            font-size: 28px; 
          }
        }

        p {
          margin: 10px 0; 
          font-size: 12px; 
        }
      }

      button {
        width: 120px; 
        font-size: 10px; 
        padding: 0.8em 1.5em; 
      }
    }

    .formulario {
      margin-top: 140%;
      width: 90%; 
      height: auto; 
      gap: 10px; 
      transform: translate(-40%, -40%); 
      
      p {
        font-size: 12px;
      }

      a{
        font-size: 10px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content:center;
        width: 80px;
        height: 25px;
      }

    }
  }


`;
export const  Containertwo  = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat:no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${(props) => props.image});
  background-position-x: -400px;
  background-position-y: 1100px;
   
   
  .Icons {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 100px;
    margin-bottom: 100px;
    cursor: pointer;
    

    .img {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
      cursor: pointer;
      position: relative;
      
    }

    img:hover {
      width: 130px;
      height: 130px;
      transition: 2s ease;
    }

  }
  @media (max-width: 768px) {
      background-position: center;
      background-position-y: 1650px;
      background-position-x: -50px;

    .Icons {
      display: flex;
      align-items: center;
      justify-content: center; 
      margin: 0;
      gap: 15px; 
      

      img {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
       
      }

      .Icons img:hover {
        width: 50px; 
        height: 50px;
        transition: 2s ease;
      }
    }
  }
`
