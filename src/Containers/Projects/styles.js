import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin-left: 300px;
  margin-bottom: 50px;
  
  
 
  .container-foto {
     display: grid;
     grid-template-columns: 50% 50%;
     margin-right: 200px;
     margin-bottom: 20px;
     
    
    
     .div-container {
      margin-top: 15px;
      margin-bottom: 15px;

     }


    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  img {
    margin-top: 50px;
    width: 400px;
    height: 300px;
    border: 3px solid #23c483;
  }

  .book {
    position: relative;
    border-radius: 10px;
    width: 400px;
    height: 300px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction:column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
    margin-top: 20px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.3em 3em;
      margin-top: 30px;
      width: 100px;
      height:30px;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
      color: #23c483;
      background-color: #fff;
      border: none;
      border-radius: 45px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;

      a{
        color: #23c483;
      }
    }

    button:hover {
      background-color: #23c483;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);

      a{
        color: #ffffff;
      }
    }

    button:active {
      transform: translateY(-1px);
    }
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }

  p {
    font-size: 12px;
    margin-left: 40px;
  }

  @media (max-width: 1024px) {
    .container-foto {
      display: flex;
      flex-direction: column;  
    }

    .book {
      width: 520px;
      height: 420px;


      button {
        width: 200px;
        font-size: 10px;
        margin-top: 40px;
        margin-bottom: 0;
        }
      }

      img {
        width: 520px;
        height: 420px;
        
     }

     p {
        font-size: 16px;
        margin-left:40px;
     }
  }

  @media (max-width: 820px) {
    .book {
      width: 420px;
      height: 320px;
    }

    img {
      width: 420px;
      height: 320px;
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;
    
    
      .div-container {
        padding-bottom: 50px;
        margin-left: 40px;
        
        
      }
     

     .container-foto {
        display: grid;
        grid-template-columns: 50% 50%;
        margin-left: 10px;
        gap: 60px;
        
      }
      
      .book {
        width: 320px;
        height: 220px;
      


        button {
          width: 150px;
          font-size: 8px;
          margin-top: 10px;
          margin-bottom: 0;
        }
     }

     img {
        width: 320px;
        height: 220px;
        
        
     }

     p {
        font-size: 12px;
        margin-left:40px;
     }
  }

  @media (max-width: 430px) {


    .container-foto {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      margin-top: 100px;
        
      }

  }

  @media (max-width: 360px) {
    .container-foto { 
      margin-left: 0;    
    }

    .container-foto h2 {
      font-size: 20px;
    }

    .div-container {
        margin-left: 15px;
      }

  }

  
`