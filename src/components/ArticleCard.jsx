import { Link } from "react-router-dom";
import FancyBox from "./FancyBox";

export default function ArticleCard({ article }) {
    return (
        <FancyBox>
            <div className="article-card">
                <li>
                <Link to={`/articles/${article.article_id}`}>See more:</Link>
                <h3>{article.title}</h3>
                <p>Id: {article.article_id}</p>
                <p>Topic: {article.topic}</p>
                <h4>Author: {article.author}</h4>
                <h4>Created: {new Date(article.created_at).toLocaleString()}</h4>
                <h4>Votes:{article.votes}</h4>
                <h4>Comment count:{article.comment_count}</h4>
                <img src={article.article_img_url} alt={`${article.title}`}></img>
                </li>                          
            </div>
        </FancyBox>
        )
}