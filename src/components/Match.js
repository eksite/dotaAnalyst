import React from 'react';
import useMatchData from './hooks/UseMatchData';
import { useParams } from 'react-router-dom';
const Match = () => {
    const { match_id } = useParams();
    const matchData = useMatchData(
        'https://api.opendota.com/api/matches',
        match_id
    );
    if (!matchData) {
        return <div>Next time you will be able to write match id </div>;
    }
    return <div>{matchData.match_id}</div>;
};
export default Match;
