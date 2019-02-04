import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { fetchStats } from '../store';
import StatCard from './StatCard';

class Stats extends Component {
  componentDidMount() {
    const { id, loadStats } = this.props;
    loadStats(id);
  }
  render() {
    const { stats, gameType } = this.props;
    return (
      <Grid container direction="row" justify="space-around">
        {Object.keys(stats).length !== 0 ? (
          gameType.map(type => {
            // const stats = data.gameModeStats[type];
            return (
              <Grid item xs={12} md={3} key={type}>
                <StatCard name={type} data={stats[type]} />
              </Grid>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    );
  }
}
const mapState = state => ({
  id: state.player.id,
  stats: state.player.stats
});

const mapDispatch = dispatch => ({
  loadStats: id => dispatch(fetchStats(id))
});

export default connect(
  mapState,
  mapDispatch
)(Stats);
