import React, { useState } from 'react';
import MatchTable from './MatchTable'
import useMatchData from './hooks/useMatchData'

const InputField = () => {
    const [matchId, setMatchId] = useState(0);
    return <input type="text" name="inputField" onChange={id => setMatchId(id.target.value)} onsubmit={<MatchTable data={getMatchData} />} />
}

const getMatchData = matchId => {
    return useMatchData(
        'https://api.opendota.com/api/matches',
        matchId
    );
}

export default InputField;