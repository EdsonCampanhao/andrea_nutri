import './Specialty.css'

export default function Specialty(props) {
    return (
        <div className={`specialty__element `}>
            <div className="specialty__icon">
                <img src={props.icon} alt="Icone de especialidade" />
            </div>
            <div className="specialty__content">
                <h3 className="specialty__title">{props.title}</h3>
                <div className="specialty__text">{props.text}</div>
            </div>
        </div>
    )
}