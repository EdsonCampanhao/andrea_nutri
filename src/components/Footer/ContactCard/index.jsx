import './ContactCard.css'
import cardContent from "./cardContent.json"
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineWhatsApp, AiOutlineFacebook } from 'react-icons/ai'



export default function ContactCard() {

    return (
        <section className="footer">
            {cardContent.map(card =>
                <div className="footer__card" key={card.id}>

                    <h3 className="card__title">{card.title}</h3>
                    <p className="card__content">{card.content}</p>

                    {card.icons ?
                        <div className="card__container">

                            <ul className="card__list">

                                <li  ><BsInstagram className="card__icon" size={30} /></li>
                                <li ><AiOutlineFacebook className="card__icon" size={35} /></li>
                                <li  ><AiOutlineWhatsApp className="card__icon" size={33} /></li>

                            </ul>

                        </div>
                        : ''}
                </div>
            )}

        </section>
    )
}