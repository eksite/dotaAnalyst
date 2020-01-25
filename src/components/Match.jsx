import React from 'react';
import useMatchData from './hooks/useMatchData';
import { useParams } from 'react-router-dom';
const Match = () => {
    const { matchId } = useParams();
    const matchData = useMatchData(
        'https://api.opendota.com/api/matches',
        matchId
    );
    if (!matchData) {
        return <div>Next time you will be able to write match id </div>;
    }
    return <div>{matchData.match_id}</div>;
};
export default Match;
