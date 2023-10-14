import './Specialties.css'
import Specialty from './Specialty'

import icon1 from '../../assets/icons/doctor.png'
import icon2 from '../../assets/icons/alternative-medicine.png'
import icon3 from '../../assets/icons/dietary-suplement.png'
import icon4 from '../../assets/icons/nutrition.png'
import icon5 from '../../assets/icons/atencao-plena.png'



export default function Specialties() {
    return (

        <section className='specialties__container'>
            <h2 className="specialties__title">Especialidades</h2>

            <div className='content'>

                <Specialty icon={icon1} text={'Especialista em saúde e nutrição para tratar condições específicas.'} title={'Especialista em Clínica'} />

                <Specialty icon={icon4} text={'Otimize sua saúde através da alimentação. Avaliando sua saúde através de formulários específicos que nortearão a melhor escolha de tratamento.'} title={'Nutrição Funcional'} />

                <Specialty icon={icon5} text={' Essências florais que atuam na prevenção, no tratamento e na manutenção do equilíbrio emocional e psicológico.'} title={'Reiki'} />
               
                <Specialty icon={icon3} text={'Maximize seus resultados. Obtenha suporte nutricional específico para suas metas. Potencialize seu desempenho e alcance seus objetivos.'} title={'Suplementação'} />

                <Specialty icon={icon2} text={'Descubra o poder das plantas medicinais para tratar e prevenir doenças. Invista no equilíbrio natural para sua saúde.'} title={'Fitoterapia'} />

            </div>
        </section>

    )
}