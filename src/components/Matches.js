import React, { Component } from 'react';
import { Grid, List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchMatchStats } from '../store';
import MatchCard from './MatchCard';

const styles = theme => ({
  match: {
    marginTop: theme.spacing.unit * 0.4,
    marginBottom: theme.spacing.unit * 0.4,
    width: '100%'
  }
});

class Matches extends Component {
  componentDidMount() {
    const { matchIds, loadMatchStats } = this.props;
    const init = matchIds.slice(0, 5);
    // console.log(init);
    loadMatchStats(init);
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
  loadMatchStats: ids => dispatch(fetchMatchStats(ids))
});
export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Matches)
);
