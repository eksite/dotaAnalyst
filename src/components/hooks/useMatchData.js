import { useState, useEffect } from 'react';

const useMatchData = (url, params) => {
    const [matchData, setMatchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`${url}/${params}`);
            const respData = await resp.json();
            setMatchData(respData);
        };
        fetchData();
    }, [url, params]);

    return matchData;
};
export default useMatchData;
