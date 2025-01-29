import Skills from "./Skills.tsx";
import "../css/styles.css";
import "../css/mediaQuery.css";

const About: React.FC = () => {
    return (
        <section className="container">
            <div className="about">
                <h2>Sobre mim</h2>
                <p>Sou trainee de desenvolvimento de software na DBServer. Amo aprender novas tecnologias e aplicá-las para resolver problemas. Sempre busco me aprimorar e colaborar com o sucesso da equipe.</p>
            </div>
            <Skills/>
        </section>
    )
}

export default About;