import React from 'react';
// import Styled from 'styled-components';

const MatchTable = props => {
    const matchData = props.data;
    console.log(matchData.players)
    return <ul>
        {matchData.players.map(element => <li key={element.player_slot}>{element.player_slot + " "}</li>)}
    </ul>
}

export default MatchTable;