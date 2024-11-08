import { Link } from "react-router-dom";
import FancyBox from "./FancyBox";

export default function ArticleCard({ article }) {

    const capitalizedTopic = article.topic.charAt(0).toUpperCase() + article.topic.slice(1)

    return (
        <FancyBox>
            <section className="article-card">
                <li>  
                <img className="img-article-card" src={article.article_img_url} alt={`${article.title}`}></img>              
                <h3><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
                <h5>Topic: <Link to={`/topics`}>{capitalizedTopic}</Link></h5>      
                <p>👍 {article.votes}</p>
                <p>💬 {article.comment_count}</p>
                </li>                          
            </section>
        </FancyBox>
        )
}