import React from 'react';
import HeroData from './heroData.js';
import styled from 'styled-components';

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

  componentDidUpdate() {
    console.log(this.state.data);
  }

  render() {
    return (
      <ul>
        {this.state.data.map(element => (
          <HeroData key={element.name} name={element.name} />
        ))}
      </ul>
    );
  }
}
//
export default Fetch;
