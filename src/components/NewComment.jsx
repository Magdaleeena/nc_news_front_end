import { useState } from "react";
import { postComment } from "../utils/api";

export default function NewComment({article_id, setComments, currentComments}){
    const [newComment, setNewComment] = useState({username: '', body: ''})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setNewComment((previousComment) => ({
            ...previousComment, 
            [name]: value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsSubmitting(true)
        setIsSuccess(false)
        setError(null)
        postComment(article_id, newComment)
        .then((postedComment) => {
            setComments([postedComment, ...currentComments])
            setNewComment({ username: '', body: ''})
            setIsSubmitting(false)
            setIsSuccess(true)
        })          
        .catch((err) => {
            setError('Failed to post a comment. Please try again later')
            setIsSubmitting(false)
        })
    }

    return (
        <div className="new-comment">
            <h3>Comment this article here:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input className="post-comment" type="text" id="username" name="username" value={newComment.username} onChange={handleChange} placeholder='your username' required/>
                <label htmlFor="body"> Comment: </label>
                <textarea className="post-comment" id="body" name="body" value={newComment.body} onChange={handleChange} required />
                <button type="submit">
                    {isSubmitting ? 'posting' : 'post comment'}
                </button>
                {isSuccess && <h2>Comment posted!</h2>}
            </form>
            {error && <p className="error"> {error}</p>}
        </div>
    )
}

