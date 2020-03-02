import React from 'react';
import useMatchData from './hooks/useMatchData';
import { useParams } from 'react-router-dom';
import MatchTable from './MatchTable';
import InputField from './InputField';

const Match = () => {
    const { matchId } = useParams();
    const matchData = useMatchData(
        'https://api.opendota.com/api/matches',
        matchId
    );
    if (!matchData.match_id) {
        return <InputField />
    }
    return <MatchTable data={matchData} />;
};
export default Match;
