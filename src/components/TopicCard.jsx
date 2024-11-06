import { Link } from "react-router-dom";

export default function TopicCard({ topic }){
    return (
        <div className="topic-card">
            <h3>Slug: {topic.slug} </h3>
            <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>See articles</Link>
            <p>Description: {topic.description}</p>
        </div>
    )
}