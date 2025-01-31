import "../css/styles.css";
import "../css/mediaQuery.css"

const Skills: React.FC = () => {
    return (
        <div className="skills">
            <h2>Habilidades</h2>
            <div className="backEnd-skills">
                <h3>Back end</h3>
                <div className="backEnd-container">
                    <div className="ul-skills-backend">
                        <ul>
                            <li>SPRING BOOT</li>
                            <li>H2</li>
                            <li>Swagger</li>
                            <li>JUnit</li>
                            <li>RestAssured</li>
                            <li>JAVA</li>
                            <li>SQL</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="imgs-skills">
                        <ul>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%206.png" alt="Imagem status"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="frontEnd-skills">
                <h3>Front end</h3>
                <div className="frontEnd-container">
                    <div className="ul-skills-frontend">
                        <ul>
                            <li>HTML</li>
                            <li>Postman</li>
                            <li>Cypress</li>
                            <li>CSS</li>
                            <li>REACT</li>
                            <li>NODE</li>
                        </ul>
                    </div>
                    <div className="imgs-skills">
                        <ul>
                            <li><img src="/status/Frame%203.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%204.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%205.png" alt="Imagem status"/></li>
                            <li><img src="/status/Frame%205.png" alt="Imagem status"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;