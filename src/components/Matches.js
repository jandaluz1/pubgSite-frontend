import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchMatchStats } from '../store';
import MatchCard from './MatchCard';

const styles = theme => ({
  match: {
    marginTop: theme.spacing.unit * 0.4,
    marginBottom: theme.spacing.unit * 0.4
  }
});

class Matches extends Component {
  componentDidMount() {
    const { matchIds, loadStats } = this.props;
    const init = matchIds.slice(0, 5);
    // console.log(init);
    loadStats(init);
  }
  render() {
    const { matches, classes } = this.props;
    return (
      <Grid container direction="row">
        {matches.length > 0 ? (
          matches.map(match => (
            <Grid item xs={12} className={classes.match} key={match.data.id}>
              <MatchCard match={match} />
            </Grid>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
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
export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Matches)
);
