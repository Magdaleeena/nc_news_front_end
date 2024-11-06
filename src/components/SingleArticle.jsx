import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../utils/api";
import Error from './Error';
import CommentList from "./CommentList";
import VoteOnArticle from "./VoteOnArticle";
import NewComment from "./NewComment";
import Loader from "./Loader";

export default function SingleArticle() {
    const { article_id } = useParams()
    const [article, setArticle] = useState(null)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id)
            .then((articleData) => {
                setArticle(articleData)
                return getCommentsByArticleId(article_id)
            })
            .then((commentsData) => {
                setComments(commentsData)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err)
                setIsLoading(false)
            });
    }, [article_id])
    
    if (isLoading) {
        return (
            <div>
                <Loader/>
                <p>Loading article...</p>
            </div>
        )
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
            <h3>Topic: {article.topic}</h3>
            <h3>Author: {article.author}</h3>
            {article.article_img_url && (
                <img src={article.article_img_url} alt={article.title} />
            )}
            <p>{article.body}</p>
            <h4>Created: {new Date(article.created_at).toLocaleString()}</h4>            
            <h4>Comment count: {article.comment_count}</h4>
            <VoteOnArticle article={article} setArticle={setArticle}/>
            <NewComment article_id={article_id} setComments={setComments} currentComments={comments}/>
            <CommentList article_id={article_id} comments={comments}/>
        </div>
    )
}
