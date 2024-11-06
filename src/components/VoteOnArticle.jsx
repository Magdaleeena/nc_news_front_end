import { useState, useEffect } from 'react';
import { updateArticleVotes } from '../utils/api';

export default function VoteOnArticle({article, setArticle, userVoteStatus}){
    const [isVoting, setIsVoting] = useState(false)
    const [voteError, setVoteError] = useState(null)
    const [hasVoted, setHasVoted] = useState(null)
    const [userVote, setUserVote] = useState(null)

    useEffect(() => {
        if (userVoteStatus === 'up' || userVoteStatus === 'down') {
            setHasVoted(true)
            setUserVote(userVoteStatus)
        }
    }, [userVoteStatus])

    function handleVoteUp(){
        if(hasVoted || userVote === 'up') return
        setIsVoting(true)
        setVoteError(null)
        setUserVote('up')
        setArticle((prev) => ({
            ...prev, votes: prev.votes +1,
        }))

        updateArticleVotes(article.article_id, 1)
        .then(() => {
            setIsVoting(false)
        })
        .catch((err) => {
            setArticle((prev) => ({
                ...prev, votes: prev.votes,
            }))
            setVoteError('Failed to update votes. Please try again later.')
            setIsVoting(false)
        })
    }

    function handleVoteDown(){
        if(hasVoted || userVote === 'down') return
        setIsVoting(true)
        setVoteError(null)
        setUserVote('down')
        setArticle((prev) => ({
            ...prev, votes: prev.votes -1,
        }))
        updateArticleVotes(article.article_id, -1)
        .then(() => {
            setIsVoting(false)
        })
        .catch((err) => {
            setArticle((prev) => ({
                ...prev, votes: prev.votes,
            }))
            setVoteError('Failed to update votes. Please try again later.')
            setIsVoting(false)
        })
    }

    return (
        <div>
            <h4>Votes: {article.votes}</h4>
            <button disabled={isVoting} onClick={handleVoteUp}>Like</button>
            <button disabled={isVoting} onClick={handleVoteDown}>Unlike</button>
            {voteError && <p className="error">{voteError}</p>}
        </div>
    )
}