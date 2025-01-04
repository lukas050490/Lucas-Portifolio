
import { motion } from "framer-motion"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Css from "../../assets/icons8-css-48.png"
import Html from "../../assets/icons8-html-48.png"
import Javascript from "../../assets/icons8-javascript-64.png"
import React from "../../assets/icons8-nativo-de-reagir-64.png"
import Typescript from "../../assets/icons8-typescript-48.png"
import Imagetwo from "../../assets/lucas-foto-removed2.png"
import LogoLucas from "../../assets/logo-lucas.png"

import { Container, Content, Containertwo } from "./styles"



import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const FILE_URL = "MODELODECV-DEVCLUB.pdf"

function Home() {
  const [formVisible, setFormVisible] = useState(false)

  const titleRef = useRef();

  const dowloadFileATURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("dowload", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }



  function cliqueiNoBotao() {
    setFormVisible(true)

  }

  function sumirFormulario() {
    setFormVisible(false)
  }

  useLayoutEffect(() => {

    gsap.to(".myfoto", {
      x: 0,
      opacity: 1,
      rotate: "6s",
      duration: 2,
    })

    return () => {
      gsap.killTweensOf(".myfoto")
    }
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".About", {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".AboutFirst",
        start: "400px",
        end: "bottom 100px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf(".About")
    }
  }, [])

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 4, ease: 'power3.out' }
    );
  }, [])


  return (

    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
      >
        <Container>
          <Containertwo image={Imagetwo}>
            <Content>
              <img className="myfoto" src={LogoLucas} alt="minha foto" />
              <div className="group">
                <div className="AboutFirst">
                  <h1 ref={titleRef}>Meu nome é <span className="gradient-text">&lt;Lucas/&gt;</span></h1>
                  <p>
                    Profissional em transição de carreira para a programação, com uma sólida experiência multidisciplinar.
                    Possuo habilidades em comunicação, liderança e resolução de problemas, características que me permitem
                    colaborar eficazmente em equipes diversas e enriquecer o ambiente de trabalho.
                    Sou movido por uma motivação extraordinária para aprender e evoluir,
                    com uma capacidade de adaptação rápida que me ajuda a enfrentar desafios com confiança.
                    Com uma visão inovadora, busco integrar criatividade e eficiência em minhas soluções,
                    somando minha bagagem profissional à minha paixão pela tecnologia para agregar valor ao time
                    e contribuir para o sucesso da empresa. Além disso, domino algumas das tecnologias mais populares
                    no desenvolvimento front-end e back-end, incluindo:
                  </p>
                  <p>
                    <span className="gradient-text">HTML & CSS</span>: A base de toda página web, garantindo uma estrutura sólida e um design atraente e acessível.
                  </p>
                  <p>
                    <span className="gradient-text">JAVASCRIPT</span>: Essencial para adicionar interatividade e dinamismo aos projetos, transformando ideias em experiências digitais.
                  </p>
                  <p>
                    <span className="gradient-text">NODE.JS</span>: Ferramenta poderosa para o desenvolvimento de aplicações back-end, que me permite criar APIs eficientes e escaláveis.
                  </p>
                  <p>
                    <span className="gradient-text">REACT</span>: Minha biblioteca favorita para construção de interfaces de usuário. Adoro a maneira como o React simplifica a criação de componentes reutilizáveis e a gestão de estados.
                  </p>
                  <p>
                    <span className="gradient-text">TYPESCRIPT</span>: A tipagem forte do TypeScript ajuda a criar um código mais robusto, com menos bugs e maior facilidade de manutenção.
                  </p>
                </div>
                <div className="About">
                  <h2>Habilidades pessoais no ambiente de trabalho</h2>
                  <p><span>Comprometimento com Prazos e Qualidade:</span>  Como uma pessoa responsável, sempre busco cumprir
                    prazos e manter um alto padrão de qualidade em cada etapa dos meus projetos, garantindo que o resultado
                    final esteja alinhado com os objetivos.
                  </p>
                  <p><span>Autonomia e Confiabilidade:</span>  Valorizo a confiança que é depositada no meu trabalho, e isso me
                    leva a ser proativo e a buscar soluções, garantindo que cada tarefa seja concluída de forma independente e eficiente.
                  </p>
                  <p><span>Organização e Atenção aos Detalhes:</span>  A responsabilidade também me leva a ser extremamente organizado
                    e atento aos detalhes, assegurando que cada aspecto do código e do projeto esteja em conformidade com as melhores práticas.
                  </p>
                  <p><span>Confiabilidade:</span>  Sou uma pessoa em quem os outros podem confiar para cumprir prazos e responsabilidades,
                    mesmo em situações desafiadoras. Busco manter uma comunicação transparente e dar o meu melhor para que cada tarefa
                    seja concluída com precisão.Minha postura profissional é baseada na ética e na consistência, fazendo com que meus colegas
                    e supervisores saibam que podem contar comigo para entregar trabalhos de qualidade e cumprir compromissos.
                  </p>
                  <p><span>Trabalho em Equipe:</span>  Tenho facilidade para trabalhar em grupo e acredito que cada integrante contribui
                    com uma perspectiva única. Valorizo muito o aprendizado colaborativo e procuro apoiar e motivar os demais membros para
                    que juntos alcancemos os objetivos.Sou receptivo a feedbacks e busco criar um ambiente de cooperação, onde todos possam
                    compartilhar suas ideias e conhecimentos, o que enriquece a experiência e melhora a qualidade do trabalho final.
                  </p>
                </div>


                <button onClick={cliqueiNoBotao}> Meu Contato </button>
                <button onClick={() => { dowloadFileATURL(FILE_URL) }}> Currículo </button>

                <form className={`formulario ${formVisible ? 'show' : 'hide'}`}>
                  <p>Fale Comigo</p>
                  <p>Cell: (32)99880-6583</p>
                  <p>Email: <a href="mailto:lucas_alexandre05@hotmail.com">lucas_alexandre05@hotmail.com</a></p>
                  <p>Likedin: <a href="https://www.linkedin.com/in/lucas-alexandre-silva05/">https://www.linkedin.com/in/lucas-alexandre-silva05/</a></p>
                  <p>Github: <a href="https://github.com/lukas050490">https://github.com/lukas050490</a></p>
                  <a href="https://wa.me/5532998806583?text=Olá! Tudo bem? Deixe seu recado." target="_blank">
                    <FaWhatsapp size={70} color="#23c483" />
                  </a>
                  <button type="button" onClick={sumirFormulario}>Voltar</button>
                </form>
              </div>


            </Content>
            <div className="Icons">
              <img src={Html} alt="icone-html" />
              <img src={Css} alt="icone-css" />
              <img src={Javascript} alt="icone-javascript" />
              <img src={React} alt="icone-react" />
              <img src={Typescript} alt="icone-typescript" />
            </div>
          </Containertwo>
        </Container>
      </motion.div>
    </>

  )
}

export default Home