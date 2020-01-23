import React, { useState, useEffect } from 'react';

const useMatchData = (url, params) => {
    const [matchData, setMatchData] = useState([]);
    useEffect(async () => {
        const resp = await fetch(`${url}/${params}`);
        const respData = resp.json();
        setMatchData(respData);
    }, []);
    if (!params) {
        return null;
    }
    return matchData;
};
export default useMatchData;
// (`api.opendota.com/api/matches/${data}`
