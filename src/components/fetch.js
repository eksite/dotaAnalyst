import React from 'react';
import HeroData from './heroData.js';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.opendota.com/api/heroes')
      .then(response => response.json())
      .then(fetchData => this.setState({ data: fetchData }));
  }

  componentDidUpdate() {
    console.log(this.state.data);
  }

  render() {
    return (
      <ul>
        {this.state.data.map(element => (
          <HeroData name={element.name} />
        ))}
      </ul>
    );
  }
}

export default Fetch;
