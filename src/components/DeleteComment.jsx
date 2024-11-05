import { useState } from 'react'
import { deleteComment } from '../utils/api';

export default function DeleteComment({ comment_id, setComments, comments }){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    function handleDelete(comment_id){
        setIsSuccess(false)
        setError(null)
        setIsLoading(true)
        deleteComment(comment_id)
        .then(() => {
            setComments(comments.filter(comment => comment.comment_id !== comment_id))
            setIsSuccess(true)
            setIsLoading(false)
        })
        .catch((err) => {
            setError('Failed to delete comment. Please try again later!')
            setIsLoading(false)
        })
    }

    return (
        <div>
            {isSuccess && <h2>Comment successfully deleted!</h2>}
            {error && <p className="error">{error}</p>}
            <button onClick={() => handleDelete(comment_id)}>
            {isLoading ? 'Deleting...' : 'Delete'}
            </button>
        </div>
    )
}