import React from "react";

export default function Error({error}){
    return(
        <div>
            <h3>Oh no! An error occurred while trying to fetch data:</h3>
            <pre>
                {error.status} {error.statusText}
            </pre>
        </div>
    )
}