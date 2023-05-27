import {TbNews} from 'react-icons/tb'
import ArticleField from '../components/ArticleField'

export default function Articles() {

    return (
    <section>
        
        <div className='article__header-container'>
            <TbNews className='article__header-icon'/>   
            <h1 className='article__header-text'> Artigos Em Destaque</h1>
        </div> 

        <ArticleField/>

    </section>
    
    )

}