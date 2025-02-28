import '../styles/Inicio.css'


const Inicio = () => {
    return (
        <div>
            <div>
                <p>
                    El mundo empresarial evoluciona constantemente, exigiendo a los profesionales no solo conocimientos teóricos,
                    sino también habilidades que les permitan afrontar los retos del mercado laboral. En este contexto,
                    la formación académica debe adaptarse y ofrecer experiencias que preparen a los estudiantes para responder a
                    estas demandas de manera efectiva.
                </p>
            </div>
            <div className="encabezado">
                <img src='../src/assets/logos/DualabIcon.png'/>
            </div>

            <p>
                Con esta premisa nace DuaLab, una iniciativa innovadora que busca estrechar la conexión entre los estudiantes
                de Formación Profesional y el sector empresarial. A través de este programa, los alumnos de primer año tienen
                la oportunidad de aplicar sus conocimientos en escenarios reales, enfrentándose a desafíos concretos que les
                permiten desarrollar competencias clave desde el inicio de su formación.
            </p>

            <div className="container">
                <img src='../src/assets/DL_1.jpeg' />
                <img src='../src/assets/DL_2.jpeg' />
                <img src='../src/assets/DL_3.jpeg' />
                <img src='../src/assets/DL_4.jpeg' />
                <img src='../src/assets/DL_5.jpeg' />
                <img src='../src/assets/DL_6.jpeg' />
            </div>
        </div>

    );
};

export default Inicio;