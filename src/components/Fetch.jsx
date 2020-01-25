import React from 'react';
import HeroImage from './HeroImage';
import useMatchData from './hooks/useMatchData';
const Fetch = () => {
    const heroNames = useMatchData('https://api.opendota.com/api/heroes', '');

    return (
        <ul>
            {heroNames.map((element, index) => (
                <HeroImage key={index} name={element.name} />
            ))}
        </ul>
    );
};

export default Fetch;
