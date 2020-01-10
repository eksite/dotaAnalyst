import React, { useState } from 'react';
const MatchID = props => {
    const [matchData, setMatchData] = useState([]);
    fetch(`https://api.opendota.com/api/matches/${props.data}`).then(data =>
        setMatchData(data)
    );
    return <div>{matchData.chat}</div>;
};
export default MatchID;
