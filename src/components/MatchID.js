import React, { useState, useEffect } from 'react';
const MatchID = props => {
    const [matchData, setMatchData] = useState([]);
    useEffect(() => {
        fetch(`https://api.opendota.com/api/matches/${props.match.params.number}`)
            .then(Response => Response.json())
            .then(data => setMatchData(data));
    }, []);
    if (matchData === undefined) {
        return null;
    }
    console.log(matchData.duration);
    return <div>{matchData.duration}</div>;
};
export default MatchID;
