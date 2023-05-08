import Treatment from './Treatment'
import './Treatments.css'
export default function Treatments() {
    return (
        <section className='Treatments__container'>
            <div className="Treatments__banner">
                <div className="Treatments__txt"></div>
                <div className="Treatments__img"></div>
            </div>
            <div className="Treatments__content">

                <Treatment title='Diabetes' text='Um nutricionista desempenha um papel fundamental no tratamento da diabetes, 
        fornecendo orientações e recomendações específicas sobre alimentação saudável para ajudar a controlar os níveis de açúcar no sangue. ' />

            </div>


        </section>
    )
}