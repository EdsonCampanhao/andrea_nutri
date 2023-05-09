

const CommentsField = () => {

    let position = useRef(0);

    const pass = (event) => {
        let direction = event.target.dataset.direction
        if (direction == 'right') {
            position.current++
            if (position.current > Comments.length - 1) {
                position.current = 0
            }
        } else {
            position.current--
            if (position.current < 0) {
                position.current = Comments.length - 1
            }
        }
       
    }

    return (

        <section className="comments">

            <h2 className="comments__title">Comentários</h2>

            <div className="comments__container">
                {/* <!-- Seta esquerda --> */}
                <div className="comments__arrow">
                    <button className="comments__arrow-btn-left" onClick={pass}>
                        <img src="../img/seta-d.png" className="comments__arrow-img" data-direction='left' alt="icon arrow" />
                    </button>
                </div>
                {/* <!-- Comentário --> */}
               <img src="" alt="" />
                {/* <!-- Seta direita --> */}
                <div className="comments__arrow">
                    <button className="comments__arrow-btn-right" onClick={pass}>
                        <img src="../img/seta-e.png" data-direction='right' className="comments__arrow-img"
                            alt="icon arrow" />
                    </button>
                </div>
            </div>
        </section>)
}

export default CommentsField