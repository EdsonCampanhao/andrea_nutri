import { Link } from 'react-router-dom';
import './Header.css'
import './MenuIcon.css'


const Header = () => {

    const menu = ['inicio', 'exames', 'artigos'];

    const switchMenu = (event) => {

        const container = document.querySelector('.lista');
        const icon = document.querySelector('.menu-hamburguer')

        if (event.target.attributes.length > 1) {
            icon.classList.toggle('on')
            container.classList.toggle('on')
        } else {
            icon.classList.toggle('on');
            container.classList.toggle('on')
        }
        console.log('mudei')
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
                                <Link onClick={switchMenu} to={item === 'inicio' ? '/' : `/${item}`} key={item}>
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