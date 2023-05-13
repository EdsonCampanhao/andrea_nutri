import Treatment from './Treatment'
import './Treatments.css'
export default function Treatments() {
    return (
        <section className='treatments__container'>

            <h2 className="treatments__title">Tratamentos que realizamos</h2>

            <div className="treatments__content">

                <Treatment title='Obesidade' text='Tratamento global, corpo, mente e estilo de vida.' />
                <Treatment title='Diabetes' text='Alteração bioquímica de glicemia e resistência à insulina.' />
                <Treatment title='Dislipidemia' text='Alterações bioquímicas de colesterol e triglicérides.' />
                <Treatment title='Doença inflamatória intestinal' text='Síndrome do intestino irritável, Diverticulites, Etc.' />
                <Treatment title='Desportiva' text='Acompanhamento personalizado a pessoas que praticam atividade física.' />

            </div>

        </section>
    )
}