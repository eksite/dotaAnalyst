import React from 'react';
import HeroImage from './HeroImage.js';
import useMatchData from './hooks/useMatchData'
const fetch = () => {
    const heroNames = useMatchData(

    )

    render() {
        return (
            <ul>
                {this.state.data.map((element, index) => (
                    <HeroImage key={index} name={element.name} />
                ))}
            </ul>
        );
    }
}

export default Fetch;
