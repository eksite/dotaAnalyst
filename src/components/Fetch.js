import React from 'react';
import HeroImage from './HeroImage.js';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.opendota.com/api/heroes')
      .then(Response => Response.json())
      .then(fetchData => this.setState({ data: fetchData }));
  }

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
