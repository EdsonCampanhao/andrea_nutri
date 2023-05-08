import './Specialties.css'
import Specialty from './Specialty'

import icon1 from '../../assets/icons/doctor.png'
import icon2 from '../../assets/icons/alternative-medicine.png'
import icon3 from '../../assets/icons/dietary-suplement.png'
import icon4 from '../../assets/icons/nutrition.png'



export default function Specialties() {
    return (

        <section className='specialties__container'>
            <h2 className="specialties__title">Especialidades</h2>

            <div className='content'>

                <Specialty icon={icon1} text={'Especialista em saúde e nutrição para tratar condições específicas.'} title={'Especialista em Clínica'} />

                <Specialty icon={icon4} text={'Otimize sua saúde através da alimentação. Trate problemas de saúde de forma natural e eficaz.'} title={'Nutrição funcional'} />

                <Specialty icon={icon3} text={'Maximize seus resultados. Obtenha suporte nutricional específico para suas metas. Potencialize seu desempenho e alcance seus objetivos.'} title={'suplementação'} />

                <Specialty icon={icon2} text={'equilíbrio natural para sua saúde. Descubra o poder das plantas medicinais para tratar e prevenir doenças.'} title={'fitoterapia'} />

            </div>
        </section>

    )
}