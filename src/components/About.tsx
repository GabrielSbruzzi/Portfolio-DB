import Skills from "./Skills.tsx";
import "../css/styles.css";
import "../css/mediaQuery.css";

const About: React.FC = () => {
    return (
        <section className="container">
            <div className="about">
                <h2>Sobre mim</h2>
                <p>Sou trainee de Desenvolvimento de Software na DBServer, estudo Análise e Desenvolvimento de Sistemas e, ao longo da minha trajetória, busquei aprimorar minhas habilidades por meio de formações técnicas. Em 2022, concluí um curso técnico de Programação Web, onde tive contato com linguagens de back-end, como PHP. Em 2023, aprofundei meus conhecimentos em análise de dados ao realizar um curso técnico de Data Science, adquirindo experiência em automação com Python, Power BI e SQL. Tenho grande interesse na área de QA e pretendo atuar profissionalmente nesse campo, aplicando as melhores práticas para garantir a qualidade do software e contribuir para o desenvolvimento de soluções escaláveis, eficientes e de alto impacto.</p>
            </div>
            <Skills/>
        </section>
    )
}

export default About;