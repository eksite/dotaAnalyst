import React, { useState, useEffect } from 'react';
const MatchID = props => {
    const [matchData, setMatchData] = useState(0);
    useEffect(() => {
        const matchConfig = fetch(
            `https://api.opendota.com/api/matches/${props.data}`
        );
        setMatchData(matchConfig);
    }, []);
    console.log(matchData.duration);
    return <div>{matchData.duration}</div>;
};
export default MatchID;
