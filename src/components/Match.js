import React from 'react';
import MatchID from './MatchID';

const Match = props => <MatchID data={props.match.params.number}></MatchID>;
export default Match;
