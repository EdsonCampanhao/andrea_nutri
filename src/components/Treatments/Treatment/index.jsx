
import './Treatment.css'

export default function Treatment(props) {
    return (
        <div className='treatment'>

            <div >
                <h3 className='treatment__title' > {props.title} </h3>
            </div>

            <div className='treatment__text'>
                <p>{props.text}</p>
            </div>

        </div>
    )
}