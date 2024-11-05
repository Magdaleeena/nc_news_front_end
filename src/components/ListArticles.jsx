import { useState, useEffect } from "react";
import { getArticles } from '../utils/api';
import ArticleCard from "./ArticleCard";
import Expander from "./Expander";

export default function ListArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    if(isError) {
        return <p>Oh no! An error!</p>
    }

    if (isLoading) {
        return <p>Loading articles...</p>
    }

    return (
        <Expander>
        <h2>All articles:</h2>
        <ul>
            {articles.map((article) => {
                return<ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
        </Expander>
    )

}