import React from 'react';
import MatchID from './MatchID';
import { useParams } from 'react-router-dom';

const Match = props => {
    const { siteID } = useParams();
    return <MatchID data={siteID}></MatchID>;
};
export default Match;
