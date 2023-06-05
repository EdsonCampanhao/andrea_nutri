import { useParams } from "react-router-dom";
import articles from '../components/ArticleField/articles.json'
import ReactMarkdown from 'react-markdown'
import '../assets/styles/CurrentArticle.css'

export default function CurrentArticle() {
  

    let idOfArticle = useParams();
    console.log(idOfArticle)

    let currentArticle = articles[idOfArticle.id]
    let text=currentArticle.text

    return (

        <div className="currentArticle">
            <h1>{currentArticle.title}</h1>
            <img className="currentArticle__capa" src={currentArticle.img} alt="" />
            
            
            <ReactMarkdown>{text}</ReactMarkdown>

            
        </div>


    )
}