import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";
import Expander from "./Expander";
import Loader from "./Loader";

export default function TopicsList(){
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getTopics()
        .then((topicsData) => {
            setTopics(topicsData)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err)
            setIsLoading(false)
        })
    }, [])
  
    if (isLoading) {
        return (
            <div>
                <Loader/>
                <p>Loading topics...</p>
            </div>
        )
    }

    return (
        <Expander className="topics-list">
            {error && <Error error={error}/>}
            <h2>All topics:</h2>
            <ul>
                {topics.map((topic) => {
                    return <TopicCard key={topic.slug} topic={topic}/>
                })}
            </ul>
        </Expander>
    )
}