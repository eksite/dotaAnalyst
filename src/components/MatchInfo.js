import React from 'react';

class MatchInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      data: []
    };
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = () => {
    fetch(`https://api.opendota.com/api/matches/${this.state.searchQuery}`)
      .then(Response => Response.json())
      .then(fetchResult => this.setState({ data: fetchResult }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} />
        {this.state.data.length > 0 ? this.state.data.match_id : ''}
      </div>
    );
  }
}
export default MatchInfo;
