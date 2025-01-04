import styled from "styled-components"

export const Container = styled.div`
z-index: 99;
position: fixed;
top: 0;
width: 200px;
height:100vh;
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
background: linear-gradient(251deg, rgba(44,148,23,0.9641981792717087) 0%, rgba(18,37,230,1) 100%);



@media (max-width: 768px) {
    width: 100%;
    height: 80px;
    position: relative;
    flex-direction: row; 
    justify-content: space-between;
    padding: 0 20px;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 50px;
  list-style: none;
  gap: 50px;

  .socialIcons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 40px;
  }

  .socialIcons a {
    color: #333;
    transition: color 0.3s;
  }

  .socialIcons a:hover {
  color: #0000FF; 
}

@media (max-width: 768px) {
    flex-direction: row; 
    gap: 10px; 
    
    .socialIcons {
      flex-direction: row; 
      gap: 8px;
      font-size: 30px; 
      margin-top: 60px;
      
    }
  }
`

export const Li = styled.li`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};
    background-color: #0000FF;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 14px; 
  }
`