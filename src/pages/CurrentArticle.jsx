import { useParams } from "react-router-dom";
import articles from '../components/ArticleField/articles.json'

export default function CurrentArticle() {
    let idOfArticle = useParams();

    let currentArticle = articles[idOfArticle.id]
    
    return (

        <div>
            <h1>{currentArticle.title}</h1>
            <img src={currentArticle.img} alt="" />
            <p>{currentArticle.intro}</p>
        </div>

    )
}