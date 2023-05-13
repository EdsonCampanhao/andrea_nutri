
import FrequentQuestion from './FrequentQuestion';
import './Faq.css'

export default function Faq() {
  return (
    <section className='faq'>
      <h2>Perguntas frequentes</h2>
      <FrequentQuestion question='Qual o plano que você aceita?' answer='Petrobrás, Saúde Caixa, Geap' />
      <FrequentQuestion question='Qual o valor das consultas?' answer='Temos valores para consulta única e pacotes.' />
      <FrequentQuestion question='Quais os exames que vocês oferecem?' answer='Bioimpedância (Avalia os compartimentos do corpo)' />
      <FrequentQuestion question='Quais são as modalidades de atendimento?' answer='Presencial e online' />
    </section >
  );
}