import { Container } from "./styles"
import Certificado from "../../assets/certificado-programação.png"

export function Certificados() {
    return (
        <Container>
            <img src={Certificado} alt="certificado-programação"/>
        </Container>
    )
}