import "../css/styles.css";
import "../css/mediaQuery.css";

const ProjetosCard: React.FC = () => {
    return (
        <main>
            <section>
                <div className="head-card">
                    <h2>Meus</h2>
                    <h1>Projetos</h1>
                </div>
                <div className="card-container">
                    {/* Exemplo de um card, você pode replicar para os outros projetos */}
                    <div className="card">
                        <img src="/assets/code.jpg" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>ValidarCEP</h2>
                            <span>Java, Spring Boot, RestAssured</span>
                            <p>Projeto de Validar CEP em java com Teste</p>
                            <div className="buttons">
                                <button><a href="https://github.com/GabrielSbruzzi/ValidarCEP.git" target="_blank"
                                           rel="noopener noreferrer">Github</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/code.jpg" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Projeto Naruto</h2>
                            <span>Java, Spring Boot, H2, Swagger, JUnit, Mockito</span>
                            <p>Exercício de Programação Orientada a Objetos em Java - Anime Naruto</p>
                            <div className="buttons">
                                <button><a href="https://github.com/GabrielSbruzzi/Naruto.git" target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/code.jpg" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Crud</h2>
                            <span> Java </span>
                            <p>
                                Desafio CRUD com Spring Boot
                            </p>
                            <div className="buttons">
                                <button><a href="https://github.com/GabrielSbruzzi/CRUD-master.git"
                                           target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/code.jpg" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Projeto Teste em Cypress</h2>
                            <span>Javascript, Cypress</span>
                            <p>Projeto de automatação desenvolvido com Cypress para o site SwaggerLabs</p>
                            <div className="buttons">
                                <button><a href="https://github.com/GabrielSbruzzi/Teste_Cypress.git" target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/code.jpg" alt="Descrição da imagem"/>
                        <div className="card-about">
                            <h2>Teste Unitário</h2>
                            <span>Java, JUnit</span>
                            <p>Projeto de teste unitário para calculadora</p>
                            <div className="buttons">
                                <button><a href="https://github.com/GabrielSbruzzi/Naruto.git" target="_blank">Github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
        </main>
    )
}

export default ProjetosCard;