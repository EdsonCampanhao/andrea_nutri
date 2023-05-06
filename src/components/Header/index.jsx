import { Link } from 'react-router-dom';
import './Header.css'
import './MenuIcon.css'


const Header = () => {

    const menu = ['inicio', 'exames', 'artigos','protocolos'];

    const switchMenu = (event) => {

        const container = document.querySelector('.lista');

        if (event.target.attributes.length > 1) {
            event.target.classList.toggle('on')
            container.classList.toggle('on')
        } else {
            event.target.parentNode.classList.toggle('on');
            container.classList.toggle('on')
        }
    }
    return (
        <section className='header'>
            <div className="lista">
                <div className="menu">
              {/*-------------------------- icone css with animation--------------------------- */}
                    <div className='menu-hamburguer' data-menu='2' onClick={switchMenu}>
                        <div >
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>

                {/* ---------------------------------------------------------------------------- */}
                    <nav>
                        <ul className="lista__lista ">
                            {menu.map(item =>
                                <Link onClick={switchMenu} to={item === 'Inicio' ? '/' : `/${item}`} key={item}>
                                    {item}
                                </Link>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>

            <Link to='/'>
                <div className='logo'>
                    <img className='alt' alt='icone logo'></img>
                </div>
            </Link>

        </section >
    )
};

export default Header;