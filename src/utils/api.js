import axios from "axios";

const api = axios.create({
    baseURL: 'https://magdaleenas-nc-news.onrender.com/api/'
})

export function getArticles(){
    return api.get(`/articles`).then(({data}) => {
        return data.articles
    })
}

export function getArticleById(article_id){
    return api.get(`/articles/${article_id}`).then(({data}) => {
        return data.article
    })
}

export function getCommentsByArticleId(article_id){
    return api.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments
    })
}

export function updateArticleVotes(article_id, voteChange){
    return api.patch(`/articles/${article_id}`, { inc_votes: voteChange })
    .then(({data}) => {
        return data.article
    })
}

export function postComment(article_id, newComment){
    return api.post(`/articles/${article_id}/comments`, newComment).then(({data}) => {
        return data.comment
    })
}

export function deleteComment(comment_id){
    return api.delete(`/comments/${comment_id}`)
}