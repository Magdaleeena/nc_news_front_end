import { useState, useEffect } from "react";
import { getArticles } from '../utils/api';
import ArticleCard from "./ArticleCard";
import Expander from "./Expander";
import { useLocation } from "react-router-dom";

export default function ListArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const topic = query.get('topic')

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic)
        .then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [topic])

    if(isError) {
        return <p>Oh no! An error!</p>
    }

    if (isLoading) {
        return <p>Loading articles{topic ? ` for topic "${topic}"` : ''}...</p>
    }

    return (
        <Expander>
        <h2> {topic ? `Articles on "${topic}"` : 'All Articles'}</h2>
        <ul>
            {articles.map((article) => {
                return<ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
        </Expander>
    )

}