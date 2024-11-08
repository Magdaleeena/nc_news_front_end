import { useState, useEffect } from "react";
import { getCommentsByArticleId } from '../utils/api';
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Expander from "./Expander";
import NewComment from "./NewComment";


export default function CommentList(){
    const { article_id } = useParams()
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleId(article_id)
        .then((commentData) => {
            setComments(commentData)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading) {
        return <p>Loading comments...</p>
    }

    return (
        <Expander className="comments-list">
            {error && <Error error={error}/>}            
            <h2>All comments:</h2>
            <NewComment article_id={article_id} setComments={setComments} currentComments={comments}/>
            <ul>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <CommentCard comment={comment} key={comment.comment_id} setComments={setComments} comments={comments}/>
                    ))
                ) : (
                    <p>No comments available.</p>
                )}
            </ul>
        </Expander>
    )
}