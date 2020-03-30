import React from 'react';
import './App.css';

function Tweet({name,message}){
    return(
        <div className="tweet">
            <h3>Name : {name}</h3>
            <p>{message}</p>
            <h3>Number of likes</h3>
        </div>
    )
}

export default Tweet;