import './About.css';

export default function About() {
    return (
        <section className='about__container'>
            <div className="about__img"></div>
            <div className="about__content">
                <h1 className="about__title">Sua Nutricionista especialista</h1>
                <p className="about__text">
                    Olá! Sou a Andrea Barcelos, sua nova nutricionista!
                    Estou aqui para ajudá-lo(a) a desenvolver um plano de dieta personalizado que se adeque perfeitamente ao seu perfil e aos seus objetivos.
                    Juntos, vamos trabalhar para que você descubra a melhor versão de si mesmo(a), obtendo resultados físicos de nível profissional e, ao mesmo tempo,
                    melhorando sua saúde e autoestima. Estou empolgada para embarcar nessa jornada com você!
                </p>
            </div>
        </section>
    )
}