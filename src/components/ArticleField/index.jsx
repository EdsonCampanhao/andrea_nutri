import { useRef, useState } from "react";
import Article from "./Article";
import './ArticleField.css'
import articles from './articles.json'
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";



export default function ArticleField() {

    const [list, setList] = useState();
    const listOfArticles = [];

    const numberOfLoadArticle = useRef(0)


    const navigate = (route) => {


        return <Navigate to={route}></Navigate>;



    }

    const loadData = () => {
        numberOfLoadArticle.current = numberOfLoadArticle.current + 3
        if (numberOfLoadArticle.current > articles.length) {
            numberOfLoadArticle.current = articles.length
        }
        for (var i = 0; i < numberOfLoadArticle.current; i++) {

            var currentArticle = articles[i]
            var art =
                <NavLink to={`/${currentArticle.id}`}>
                    <Article

                        key={i}
                        img={currentArticle.img}
                        alt={currentArticle.alt}
                        title={currentArticle.title}
                        intro={currentArticle.intro}
                    /></NavLink>;

            listOfArticles.push(art)

        }
        setList(listOfArticles)
    }

    if (numberOfLoadArticle.current === 0) {
        loadData()
    }

    return (


        <section >

            <div className="articleField">


                {
                    list
                }
            </div>

            <button className="articleField__button" onLoad={loadData} onClick={loadData}> carregar mais </button>

        </section>


    )
}