import { useState } from "react"


import { Container } from "./styles"
import DevBills from "../../assets/projeto-devbills.png"
import DevFlix from "../../assets/projeto-devflix.png"
import DevBurguer from "../../assets/projeto-devburguer.png"
import User from "../../assets/projeto-user-node.png"
import Mario from "../../assets/projeto-mario.png"
import Instagran from "../../assets/projeto-instagran.png"
import Tempo from "../../assets/previsao-tempo-foto.png"
import Tweeter from "../../assets/screem-tweeter.png"
import JogoMario from "../../assets/game-mario-picture.png"
import Tasks from "../../assets/fotos-tasks.png"

import CodeBurguerVideo from "../../assets/code-burguer video.mp4"
import DevBillsVideo from "../../assets/devbills-portifolio.mp4"
import DevFlixVideo from "../../assets/devflix-portifolio.mp4"
import InstagranVideo from "../../assets/instagran-portifolio.mp4"
import MarioVideo from "../../assets/mario-portifolio.mp4"
import UsersVideo from "../../assets/usuarios-portifolio.mp4"
import TempoVideo from "../../assets/previsao-tempo-video.mp4"
import TweeterVideo from "../../assets/video-tweeter.mp4"
import JogoMarioVideo from "../../assets/game-mario-video.mp4"
import TasksVideo from "../../assets/video-tasks.mp4"

import Modal from "../../components/Modal"

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const handleOpenModal = (video) => {
        setCurrentVideo(video); 
        setShowModal(true); 
    };
  

    return (
        <Container>
            {showModal && <Modal setShowModal={setShowModal} video={currentVideo} />}
            <div className="container-foto">
                <div className="div-container">
                    <h2> DevBills</h2>
                    <div className="book">
                        <p> Esse projeto tratasse de um controle financeiro do qual você pode colocar seus gastos e receitas
                            para ter um controle melhor de suas finanças, feito com TypeScript. Tecnologias usadas:
                            Express, Docker, Mongo, Zod, Aggregation-Framework, vite, Styled-Components, Pie, Bar.
                        </p>
                        <button><a href="https://github.com/lukas050490/devbills-front.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(DevBillsVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={DevBills} alt="projeto-dev-bills" />
                        </div>
                    </div>
            
                </div>

                <div className="div-container">
                    <h2> DevFlix</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de uma plataforma de streaming do qual temos as opções de filmes,
                            séries, atores principais e trailers do filme, projeto feito com React .
                        </p>
                        <button><a href="https://github.com/lukas050490/DevFlix-Project-React.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(DevFlixVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={DevFlix} alt="projeto-devflix" />
                        </div>
                    </div>
                    
                </div>

                <div className="div-container">
                    <h2> DevBurguer</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de uma hamburgueria onde o usuário entra na plataforma 
                            criando uma conta e fazendo login, na plataforma tem as opções de produtos, do qual o usuário 
                            consegue adcionar ao carrinho, colocar quantidades, tem as ofertas e direcionamento ao pagamento, também tem o acesso restrito 
                            do administrador que consegue criar e excluir produtos , receber os pedidos e administra-los.
                        </p>
                        <button><a href="https://github.com/lukas050490/front-end-devburger.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(CodeBurguerVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={DevBurguer} alt="projeto-devburguer" />
                        </div>
                    </div>
                    
                </div>

                <div className="div-container">
                    <h2> Usuários</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de um cadastro de usuários, do qual você preenche com seu nome,
                            idade e email, também tem as opções de visualizar os cadastros já efetuados e exclui-los caso necessário.
                            Projeto feito com NodeJS, MongoDB como banco de dados.
                        </p>
                        <button><a href="https://github.com/lukas050490/first-project-react.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(UsersVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={User} alt="projeto-user" />
                        </div>
                    </div>
                    
                </div>

                <div className="div-container">
                    <h2> SuperMario</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de uma tela feita com o tema do Mario e do Luigi, uma pagina feita 
                            com um projeto de dois encanadores que disponibilizam seu trabalho para os clientes, um projeto feito
                            por um aulão efetuado pelo meu mentor Rodolfo-Mori, do qual faço meu curso de programação.
                        </p>
                        <button><a href="https://github.com/lukas050490/Super-Mario.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(MarioVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Mario} alt="projeto-supermario" />
                        </div>
                    </div>
                   
                </div>

                <div className="div-container">
                    <h2> Instagran Login</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de uma tela de login do Instagran  do qual eu fiz para treinar minhas habilidades de HTML, CSS E JAVASCRIPT.
                            Projeto efetuado em um aulão pelo mentor Rodolfo Mori do curso DevClub.
                        </p>
                        <button><a href="https://github.com/lukas050490/Instagran-project.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(InstagranVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Instagran} alt="projeto-instagran" />
                        </div>
                    </div>
                    
                </div>

                <div className="div-container">
                    <h2>Tempo</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de uma tela de pesquisa do tempo, pesquisando pelo nome da cidade,
                             terá acesso a possibilidade do tempo, grau e umidade.
                            Projeto efetuado em um aulão pelo mentor Rodolfo Mori do curso DevClub.
                        </p>
                        <button><a href="https://github.com/lukas050490/Search-City-Weather.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(TempoVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Tempo} alt="projeto-tempo" />
                        </div>
                    </div>
                    
                </div>

                <div className="div-container">
                    <h2>Tweeter</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de uma tela de usuário do tweeter, projeto dinâmico do qual você pode postar e interagir com a tela,
                            além de ter varios posts aleatórios, muito bacana valeu muito a pena fazer, aprendi muito com esse projeto.
                        `
                        </p>
                        <button><a href="https://github.com/lukas050490/project-tweeter.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(TweeterVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Tweeter} alt="projeto-tweeter" />
                        </div>
                    </div>
                    
                </div>

                <div className="div-container">
                    <h2>Jogo SuperMario</h2>
                    <div className="book">
                        <p>Esse projeto tratasse de uma tela de jogo parecido com o do Super Mario, muito bacana fazer esse projeto,
                            ver como faz a interação de jogo, como movimentos dos objetos com Java Script.
                        `
                        </p>
                        <button><a href="https://github.com/lukas050490/Jogo-Mario.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(JogoMarioVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={JogoMario} alt="projeto-tweeter" />
                        </div>
                    </div>
                    
                </div>

                <div className="div-container">
                    <h2>Tarefas Diárias</h2>
                    <div className="book">
                        <p> Esse projeto tratasse de uma tela de tarefas diárias , uma tela organizada de tarefas 
                            que você possa vir fazer no dia como lembrete, onde você pode marcar as tarefas como concluidas,
                            adicionar novas ou excluí-las.
                        `
                        </p>
                        <button><a href="https://github.com/lukas050490/React-Project-Day-Tasks.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(TasksVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Tasks} alt="projeto-tweeter" />
                        </div>
                    </div>
                    
                </div>



            </div>
        </Container>
    )
}

export default Projects