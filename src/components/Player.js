import React, { Component } from 'react';
import StatCard from './StatCard';
import MatchCard from './MatchCard';
import {
  Switch,
  FormGroup,
  FormControlLabel,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchStats } from '../store';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  gameCard: {
    padding: theme.spacing.unit * 4
  }
});

class Player extends Component {
  state = {
    mode: 'fpp'
  };

  handleChange = event => {
    this.state.mode !== 'fpp'
      ? this.setState({ mode: 'fpp' })
      : this.setState({ mode: 'tpp' });
  };
  render() {
    const { classes, id, stats, matches } = this.props;
    const fppMode = ['solo-fpp', 'duo-fpp', 'squad-fpp'];
    const tppMode = ['solo', 'duo', 'squad'];
    const mode = this.state.mode;
    const gameType = mode === 'fpp' ? fppMode : tppMode;
    return (
      <React.Fragment>
        <Typography variant="h2" align="center">
          Season Stats
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={mode === 'fpp'} onChange={this.handleChange} />
            }
            label={mode === 'fpp' ? 'fpp' : 'tpp'}
          />
        </FormGroup>
        <div className={classes.container}>
          {Object.keys(stats).length !== 0 ? (
            gameType.map(type => {
              // const stats = data.gameModeStats[type];
              return <StatCard name={type} data={stats[type]} key={type} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Typography variant="h2" align="center">
          Matches
        </Typography>
        <div>
          <MatchCard />
        </div>
      </React.Fragment>
    );
  }
}
const mapState = (state, ownProps) => {
  console.log('STATE', state);
  console.log('OWNPROPS', ownProps);
  return {
    id: state.id,
    stats: state.stats,
    matches: state.matches
  };
};

const mapDispatch = dispatch => {
  return {
    loadStats: id => dispatch(fetchStats(id))
  };
};
export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Player)
);
