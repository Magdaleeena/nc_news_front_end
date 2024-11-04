

export default function CommentCard({ comment }){
    return (
        <div className="comment-card">
            <h4>Author: {comment.author}</h4>
            <p>ID: {comment.comment_id}</p>
            <p>{comment.body}</p>
            <h4></h4>
            <p>Posted on: {new Date(comment.created_at).toLocaleDateString()}</p>

        </div>
    )

}