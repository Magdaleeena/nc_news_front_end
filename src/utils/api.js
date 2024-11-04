import axios from "axios";

const api = axios.create({
    baseURL: 'https://magdaleenas-nc-news.onrender.com/api/'
})

export function getArticles(){
    return api.get(`/articles`).then(({data}) => {
        return data.articles
    })
    .catch((err)=>{
        return err;
    })
}

export function getArticleById(article_id){
    return api.get(`/articles/${article_id}`).then(({data}) => {
        return data.article
    })
    .catch((err)=>{
        return err;
    })
}