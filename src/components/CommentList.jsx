import { useState, useEffect } from "react";
import { getCommentsByArticleId } from '../utils/api';
import CommentCard from "./CommentCard";


export default function CommentList({article_id}){
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

    if (error) {
        return <Error error={error}/>
    }

    if (isLoading) {
        return <p>Loading comments...</p>
    }

    return (
        <div className="comments-list">
            <h2>All comments:</h2>
            <ul>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <CommentCard comment={comment} key={comment.comment_id} />
                    ))
                ) : (
                    <p>No comments available.</p>
                )}
            </ul>
        </div>
    )
}