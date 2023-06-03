
import { BiSearchAlt } from 'react-icons/bi';
import ArticleField from '../components/ArticleField';
import '../../src/assets/styles/articles.css';
import '../../src/assets/styles/style.css';
import { useParams } from 'react-router-dom';


export default function Articles() {

    let { id } = useParams();
    console.log(id);


    return (



        <section>

            <div className='article__header-container'>

                <h1 className='article_header-title'>artigos</h1>

                <label ><div className='article__header-searchfield'> <input className='article__header-input' type="text" placeholder='Pesquisar artigo...' /> <BiSearchAlt /></div></label>
            </div>

            <ArticleField />

        </section>

    )




}