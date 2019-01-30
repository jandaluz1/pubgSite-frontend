import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMatchStats } from '../store';
import MatchCard from './MatchCard';

class Matches extends Component {
  componentDidMount() {
    const { matchIds, loadStats } = this.props;
    const init = matchIds.slice(0, 5);
    // console.log(init);
    loadStats(init);
  }
  render() {
    const { matches } = this.props;
    return (
      <div>
        {matches.length > 0 ? (
          matches.map(match => <MatchCard match={match} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
const mapState = state => ({
  matchIds: state.player.matches,
  matches: state.matchInfo
});

const mapDispatch = dispatch => ({
  loadStats: ids => dispatch(fetchMatchStats(ids))
});
export default connect(
  mapState,
  mapDispatch
)(Matches);
