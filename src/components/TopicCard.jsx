import { Link } from "react-router-dom";

export default function TopicCard({ topic }){

    const capitalizedTopic = topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)
    return (
        <div className="topic-card">
            <h3>{capitalizedTopic} </h3>
            <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>See articles</Link>
            <p>Description: {topic.description}</p>
        </div>
    )
}