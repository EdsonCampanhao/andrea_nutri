import './Treatment.css'

export default function Treatment(props) {
    return (
        <div className='treatment__container'>

            <div className='treatment__title'>
                <h3> {props.title} </h3>
            </div>

            <div className='treatment__text'>
                <p>{props.text}</p>
            </div>

        </div>
    )
}