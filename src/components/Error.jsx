import React from "react";

export default function Error({error}){
    return(
        <div>
            <h3 className="error">Oh no! An error occurred while trying to fetch data:</h3>
            <p>{error.status} {error.statusText}</p>
        </div>
    )
}