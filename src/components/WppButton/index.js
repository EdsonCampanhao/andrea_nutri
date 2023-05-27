import './WppButton.css';

const WppButton=(props)=>{
    return(
        <a href={`https://wa.me/${props.number}`}>
        <div className='icon-wpp'>

        </div>
        </a>
    )
}

export default WppButton