import React, { useState, useEffect } from 'react';

const useMatchData = (Url, params) => {
    const [matchData, setMatchData] = useState([]);
    fetch(`${Url}/${params}`)
        .then(Response => Response.json())
        .then(data => setMatchData(data));
    if (!params) {
        return null;
    }
    return matchData;
};
export default useMatchData;
// (`api.opendota.com/api/matches/${data}`
