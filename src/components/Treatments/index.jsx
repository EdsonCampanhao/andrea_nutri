import Treatment from './Treatment'
import './Treatments.css'
export default function Treatments() {
    return (
        <section className='treatments__container'>

            <h2 className="treatments__title">Tratamentos que realizamos</h2>

            <div className="treatments__content">

                <Treatment title='Diabetes' text='' />
                <Treatment title=' Obesidade' text='' />
                <Treatment title='Dislipidemia' text='' />
                <Treatment title='Doença inflamatória intestinal' text='' />
                <Treatment title='Desportiva' text='' />

            </div>

        </section>
    )
}