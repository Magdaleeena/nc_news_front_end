import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Error from './Error';

export default function SingleArticle() {
    const { article_id } = useParams()
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id)
            .then((articleData) => {
                setArticle(articleData)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err)
                setIsLoading(false)
            });
    }, [article_id]);

    if (isLoading) {
        return <p>Loading article...</p>
    }

    if (error) {
        return <Error error={error}/>
    }

    if(!article) {
        return <p>No article found.</p>
    }
    return (
        <div id="single-article">
            <h2>Title: {article.title}</h2>
            <p>ID: {article.article_id}</p>
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
            {article.article_img_url && (
                <img src={article.article_img_url} alt={article.title} />
            )}
            <p>{article.body}</p>
            <h4>Created: {new Date(article.created_at).toLocaleString()}</h4>
            <h4>Votes: {article.votes}</h4>
            <h4>Comment count: {article.comment_count}</h4>
        </div>
    )
}
