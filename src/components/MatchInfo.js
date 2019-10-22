import React from 'react';
import styled from 'styled-components';

const searchQuery = styled.input`
  border: red solid;
`;
class MatchInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      searchQueryValidate: false,
      match: []
    };
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value.trim() });
  };

  handleSubmit = () => {
    this.queryValidate();
    if (this.state.searchQueryValidate) {
      const matchURI = encodeURI(
        `https://api.opendota.com/api/matches/${this.state.searchQuery}`
      );
      fetch(matchURI)
        .then(response => response.json())
        .then(fetchResult => this.setState({ match: fetchResult }));
    } else {
      alert('Not Found');
    }
    console.log(this.state.match);
  };

  queryValidate = () => {
    if (!isNaN(this.state.searchQuery)) {
      return this.setState({ searchQueryValidate: true });
    }
    return this.setState({ searchQueryValidate: false });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleChange}
          className={this.state.searchQueryValidate ? '' : searchQuery}
        />
        <button onClick={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default MatchInfo;
