import { useState, useEffect } from "react";
import { getArticles } from '../utils/api';
import ArticleCard from "./ArticleCard";
import Expander from "./Expander";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Error from "./Error";

export default function ListArticles(){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [sortBy, setSortBy] = useState('')
    const [orderBy, setOrderBy] = useState('')
    
    const [searchParams] = useSearchParams()
    const topic = searchParams.get('topic')
    
    function handleSortByChange(e){
        setSortBy(e.target.value)
    }

    function handleOrderByChange(e){
        setOrderBy(e.target.value)
    }

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic, sortBy, orderBy)
        .then((articlesData) => {
            setArticles(articlesData)
            setIsLoading(false)
        })
        .catch((error) => {
            setError(true)
            setIsLoading(false)
        })
    }, [topic, sortBy, orderBy])

    if (isLoading) {
        return (
            <div>
                <Loader/>
                <p>Loading articles{topic ? ` for topic "${topic}"` : ''}...</p>
            </div>
        )
    }

    return (
        <Expander>{error && <Error error={error}/>}
        <h2> {topic ? `Articles on "${topic}"` : 'All Articles'}</h2>
        <div className="sorting-container">
            <select className="sorting"
                name="sortList"
                id="sortList"
                value={sortBy}
                onChange={handleSortByChange}>
                <option value="" disabled defaultValue>Sort by:</option>
                <option value="created_at">Date created</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">Votes</option>
                </select>{" "}
            <select className="sorting"           
                name="orderList"
                id="orderList"
                value={orderBy}
                onChange={handleOrderByChange}>
                <option value="" disabled defaultValue>Order by:</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        <ul className="article-card-container">
            {articles.map((article) => {
                return<ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
        </Expander>
    )
}