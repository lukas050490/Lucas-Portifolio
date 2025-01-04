import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom'


function Header() {

    const { pathname } = useLocation()



    return (
        <Container>

            <Menu>

                <Li $isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li $isActive={pathname.includes('projetos')}>
                    <Link to="/projetos">Projetos</Link>
                </Li>
                <Li $isActive={pathname.includes('sobre')}>
                    <Link to="/certificados">Certificados</Link>
                </Li>

                <div className="socialIcons" >
                    <a href="https://www.instagram.com/lucasalexandre05" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-alexandre-silva05/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.github.com/lukas050490" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </Menu>
        </Container>
    )
}

export default Header