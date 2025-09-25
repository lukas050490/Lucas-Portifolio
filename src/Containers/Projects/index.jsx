import { useState } from "react"


import { Container } from "./styles"
import DevBills from "../../assets/projeto-devbills.png"
import DevFlix from "../../assets/projeto-devflix.png"
import DevBurguer from "../../assets/projeto-devburguer.png"
import EliteHome from "../../assets/elite-home.png"
import CaixaRestaurante from "../../assets/caixa-restaurante.png"
import ChatFinancas from "../../assets/chat-financas.png"
import Freelancer from "../../assets/freelancer-home.png"
import LoyerLandpage from "../../assets/loyer-landpage.png"
import Petshop from "../../assets/petshop.png"
import Estoque from "../../assets/estoque.png"
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
import EliteHomeVideo from "../../assets/elite-home-video.mp4"
import CaixaRestauranteVideo from "../../assets/video-caixa-restaurante.mp4"
import ChatFinancasVideo from "../../assets/chat-financas-video.mp4"
import FreelancerVideo from "../../assets/freelancer-video.mp4"
import LoyerLandpageVideo from "../../assets/loyer-landpage-video.mp4"
import PetshopVideo from "../../assets/petshop-video.mp4"
import EstoqueVideo from "../../assets/estoque-video.mp4"
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
                        <p> Aplicação desenvolvida em TypeScript para gerenciar receitas e despesas, permitindo ao usuário acompanhar e organizar suas finanças pessoais de forma prática.
                            Tecnologias utilizadas: Express, Docker, MongoDB, Zod, Aggregation Framework, Vite, Styled-Components, gráficos (Pie e Bar).
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
                        <p>Projeto que simula uma plataforma de streaming, disponibilizando opções de filmes, séries,
                            trailers e informações sobre atores principais. Desenvolvido em React.
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
                        <p>Plataforma completa para gestão de pedidos em uma hamburgueria. O usuário pode criar uma conta, realizar login,
                            adicionar produtos ao carrinho, definir quantidades, visualizar ofertas e prosseguir para o pagamento.
                            A área administrativa permite que gestores cadastrem e removam produtos, recebam pedidos e administrem todo o fluxo da loja.
                        </p>
                        <button><a href="https://github.com/lukas050490/front-end-devburger.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(CodeBurguerVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={DevBurguer} alt="projeto-devburguer" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> Elite Home</h2>
                    <div className="book">
                        <p> O EliteHome foi desenvolvido para modernizar a experiência dos clientes na busca por imóveis e otimizar a
                            rotina dos administradores no gerenciamento de propriedades e visitas.
                            🛠️ Tecnologias Utilizadas
                            Frontend: React + Vite, TailwindCSS, React Router DOM, Axios, Framer Motion, Lucide React
                            Backend: Fastify, Knex.js, PostgreSQL, JWT, Bcrypt, Multer, Zod, Dotenv
                        </p>
                        <button><a href="https://github.com/lukas050490/EliteHome-Interface.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(EliteHomeVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={EliteHome} alt="projeto-elitehome" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> Caixa Restaurante Universitário</h2>
                    <div className="book">
                        <p>Sistema de caixa criado para restaurantes universitários, onde é possível registrar vendas de refeições por aluno ou visitante.
                            O sistema permite consultar histórico de vendas, excluir transações e emitir relatórios para fechamento diário.
                        </p>
                        <button><a href="https://github.com/lukas050490/Caixa-Restaurante.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(CaixaRestauranteVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={CaixaRestaurante} alt="projeto-caixa-restaurante" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> Chat Finanças</h2>
                    <div className="book">
                        <p>Aplicação inteligente que auxilia o usuário na organização de suas finanças através de interação por chat.
                            O sistema calcula balanços detalhados (lucro ou prejuízo) e fornece dicas personalizadas para melhorar a saúde financeira.
                            🚀 Tecnologias Utilizadas
                            🔧 Backend: Node.js com Express, Nodemon, API da OpenAI
                            🎨 Frontend:React com Vite, TailwindCSS, Axios (API)
                        </p>
                        <button><a href="https://github.com/lukas050490/Interface-Chat-Financas.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(ChatFinancasVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={ChatFinancas} alt="projeto-chat-financas" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> Freelancer</h2>
                    <div className="book">
                        <p>Aplicação voltada para profissionais autônomos e empreendedores, oferecendo gestão de clientes, projetos, tarefas e pagamentos.
                            Com integração à OpenAI API, o sistema gera contratos, propostas e recibos personalizados de forma automática.
                            🛠️ Tecnologias Utilizadas: TypeScript ,Vite, Tailwind CSS,OpenAI API.
                        </p>
                        <button><a href="https://github.com/lukas050490/Freelancer-Project-Front.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(FreelancerVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Freelancer} alt="projeto-freelancer" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> Advocacia Landing Page</h2>
                    <div className="book">
                        <p>Landing Page institucional desenvolvida com HTML e CSS para a área de advocacia. Projeto criado para treinamento em estilização
                            e desenvolvimento frontend, reforçando a importância de soluções simples e funcionais.
                        </p>
                        <button><a href="https://github.com/lukas050490/Justly-Project.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(LoyerLandpageVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={LoyerLandpage} alt="projeto-loyer-landpage" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> PetShop</h2>
                    <div className="book">
                        <p>Plataforma de e-commerce para petshop, onde clientes podem se cadastrar,
                            realizar login e acessar funcionalidades como visualização de produtos,
                            categorias e ofertas. É possível adicionar itens ao carrinho, ajustar quantidades e finalizar a compra através da área de pagamento.
                        </p>
                        <button><a href="https://github.com/lukas050490/Petshop-Online.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(PetshopVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Petshop} alt="projeto-petshop" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> Estoque</h2>
                    <div className="book">
                        <p>Aplicação desenvolvida para controle de estoque em depósitos, ideal para lojas e pequenos comércios.
                            O sistema permite cadastrar produtos,
                            registrar entradas e saídas e emitir relatórios filtrados por data.
                            🛠️ Tecnologias Utilizadas:
                            🔙 Backend: Node.js,Express,Sequelize,PostgreSQL
                            🔜 Frontend: React, Styled-Components, Axios, React Router DOM
                        </p>
                        <button><a href="https://github.com/lukas050490/estoque-app.git">Repository</a></button>

                        <button onClick={() => handleOpenModal(EstoqueVideo)}>Video Preview</button>

                        <div className="cover">
                            <img src={Estoque} alt="projeto-estoque" />
                        </div>
                    </div>

                </div>

                <div className="div-container">
                    <h2> Usuários</h2>
                    <div className="book">
                        <p>Aplicação que possibilita cadastrar usuários com nome, idade e e-mail,
                            além de visualizar e excluir registros já efetuados. Desenvolvido em Node.js com MongoDB.
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
                        <p>Projeto inspirado no universo de Mario e Luigi.A página apresenta os personagens como
                            encanadores oferecendo seus serviços, com foco em prática de HTML, CSS e JavaScript.
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
                        <p>Clone da tela de login do Instagram, desenvolvido para prática de HTML, CSS e JavaScript.
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
                        <p>Aplicação para consulta de clima por cidade, exibindo temperatura,
                            condição do tempo e umidade.
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
                        <p>Projeto dinâmico que simula a interface do Twitter, permitindo ao usuário interagir com postagens.
                            Inclui exibição de posts aleatórios para prática de HTML, CSS e JavaScript.
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
                        <p>Jogo inspirado no clássico Super Mario,
                            desenvolvido para prática de movimentação de elementos e interatividade com JavaScript.
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
                        <p>Aplicação simples e intuitiva para gerenciamento de tarefas diárias,
                            permitindo adicionar, excluir e marcar atividades como concluídas.
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