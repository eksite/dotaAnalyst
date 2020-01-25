import React, { useState, useEffect } from 'react';

const useMatchData = (url, params) => {
    const [matchData, setMatchData] = useState([]);
    (async () => {
        const resp = await fetch(`${url}/${params}`);
        const respData = await resp.json();
        setMatchData(respData);
    })();
    if (!params) {
        return null;
    }
    return matchData;
};
export default useMatchData;
