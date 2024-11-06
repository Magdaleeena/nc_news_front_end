import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";
import Expander from "./Expander";

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

    if (error) {
        return <Error error={error}/>
    }

    if (isLoading) {
        return <p>Loading topics...</p>
    }

    return (
        <Expander className="topics-list">
            <h2>All topics:</h2>
            <ul>
                {topics.map((topic) => {
                    return <TopicCard key={topic.slug} topic={topic}/>
                })}
            </ul>
        </Expander>
    )
}