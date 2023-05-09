
import FrequentQuestion from './FrequentQuestion';
import './Faq.css'

export default function Faq() {
  return (
    <section className='faq'>
        <h2>Perguntas frequentes</h2>
        <FrequentQuestion question='ta funcionando?'  answer='sim' />
        <FrequentQuestion question='ta funcionando?'  answer='sim' />
        <FrequentQuestion question='ta funcionando?'  answer='sim' />
        <FrequentQuestion question='ta funcionando?'  answer='sim' />
        <FrequentQuestion question='ta funcionando?'  answer='sim' />
    </section >
  );
}