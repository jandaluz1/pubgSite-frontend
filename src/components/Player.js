import React, { Component } from 'react';
import StatCard from './StatCard';
import {
  Switch,
  FormGroup,
  FormControlLabel,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const data = {
  gameModeStats: {
    duo: {
      assists: 0,
      bestRankPoint: 0,
      boosts: 0,
      dBNOs: 0,
      dailyKills: 0,
      dailyWins: 0,
      damageDealt: 0,
      days: 0,
      headshotKills: 0,
      heals: 0,
      killPoints: 0,
      kills: 0,
      longestKill: 0,
      longestTimeSurvived: 0,
      losses: 0,
      maxKillStreaks: 0,
      mostSurvivalTime: 0,
      rankPoints: 0,
      rankPointsTitle: '',
      revives: 0,
      rideDistance: 0,
      roadKills: 0,
      roundMostKills: 0,
      roundsPlayed: 0,
      suicides: 0,
      swimDistance: 0,
      teamKills: 0,
      timeSurvived: 0,
      top10s: 0,
      vehicleDestroys: 0,
      walkDistance: 0,
      weaponsAcquired: 0,
      weeklyKills: 0,
      weeklyWins: 0,
      winPoints: 0,
      wins: 0
    },
    'duo-fpp': {
      assists: 4,
      bestRankPoint: 1120.5696,
      boosts: 13,
      dBNOs: 12,
      dailyKills: 8,
      dailyWins: 0,
      damageDealt: 1996.8346,
      days: 2,
      headshotKills: 2,
      heals: 6,
      killPoints: 0,
      kills: 18,
      longestKill: 117.66465,
      longestTimeSurvived: 1683.528,
      losses: 15,
      maxKillStreaks: 2,
      mostSurvivalTime: 1683.528,
      rankPoints: 1120.5696,
      rankPointsTitle: '2-5',
      revives: 2,
      rideDistance: 1528.8707,
      roadKills: 0,
      roundMostKills: 4,
      roundsPlayed: 15,
      suicides: 0,
      swimDistance: 30.9439,
      teamKills: 0,
      timeSurvived: 7649.7534,
      top10s: 2,
      vehicleDestroys: 0,
      walkDistance: 15010.963,
      weaponsAcquired: 39,
      weeklyKills: 8,
      weeklyWins: 0,
      winPoints: 0,
      wins: 0
    },
    solo: {
      assists: 0,
      bestRankPoint: 0,
      boosts: 0,
      dBNOs: 0,
      dailyKills: 0,
      dailyWins: 0,
      damageDealt: 0,
      days: 0,
      headshotKills: 0,
      heals: 0,
      killPoints: 0,
      kills: 0,
      longestKill: 0,
      longestTimeSurvived: 0,
      losses: 0,
      maxKillStreaks: 0,
      mostSurvivalTime: 0,
      rankPoints: 0,
      rankPointsTitle: '',
      revives: 0,
      rideDistance: 0,
      roadKills: 0,
      roundMostKills: 0,
      roundsPlayed: 0,
      suicides: 0,
      swimDistance: 0,
      teamKills: 0,
      timeSurvived: 0,
      top10s: 0,
      vehicleDestroys: 0,
      walkDistance: 0,
      weaponsAcquired: 0,
      weeklyKills: 0,
      weeklyWins: 0,
      winPoints: 0,
      wins: 0
    },
    'solo-fpp': {
      assists: 0,
      bestRankPoint: 0,
      boosts: 0,
      dBNOs: 0,
      dailyKills: 0,
      dailyWins: 0,
      damageDealt: 0,
      days: 0,
      headshotKills: 0,
      heals: 0,
      killPoints: 0,
      kills: 0,
      longestKill: 0,
      longestTimeSurvived: 0,
      losses: 0,
      maxKillStreaks: 0,
      mostSurvivalTime: 0,
      rankPoints: 0,
      rankPointsTitle: '',
      revives: 0,
      rideDistance: 0,
      roadKills: 0,
      roundMostKills: 0,
      roundsPlayed: 0,
      suicides: 0,
      swimDistance: 0,
      teamKills: 0,
      timeSurvived: 0,
      top10s: 0,
      vehicleDestroys: 0,
      walkDistance: 0,
      weaponsAcquired: 0,
      weeklyKills: 0,
      weeklyWins: 0,
      winPoints: 0,
      wins: 0
    },
    squad: {
      assists: 0,
      bestRankPoint: 0,
      boosts: 0,
      dBNOs: 0,
      dailyKills: 0,
      dailyWins: 0,
      damageDealt: 0,
      days: 0,
      headshotKills: 0,
      heals: 0,
      killPoints: 0,
      kills: 0,
      longestKill: 0,
      longestTimeSurvived: 0,
      losses: 0,
      maxKillStreaks: 0,
      mostSurvivalTime: 0,
      rankPoints: 0,
      rankPointsTitle: '',
      revives: 0,
      rideDistance: 0,
      roadKills: 0,
      roundMostKills: 0,
      roundsPlayed: 0,
      suicides: 0,
      swimDistance: 0,
      teamKills: 0,
      timeSurvived: 0,
      top10s: 0,
      vehicleDestroys: 0,
      walkDistance: 0,
      weaponsAcquired: 0,
      weeklyKills: 0,
      weeklyWins: 0,
      winPoints: 0,
      wins: 0
    },
    'squad-fpp': {
      assists: 66,
      bestRankPoint: 2025.3982,
      boosts: 159,
      dBNOs: 276,
      dailyKills: 20,
      dailyWins: 0,
      damageDealt: 39613.676,
      days: 20,
      headshotKills: 72,
      heals: 214,
      killPoints: 0,
      kills: 258,
      longestKill: 219.21274,
      longestTimeSurvived: 1912.066,
      losses: 223,
      maxKillStreaks: 3,
      mostSurvivalTime: 1912.066,
      rankPoints: 2025.3982,
      rankPointsTitle: '3-5',
      revives: 30,
      rideDistance: 37873.375,
      roadKills: 0,
      roundMostKills: 8,
      roundsPlayed: 223,
      suicides: 4,
      swimDistance: 780.10876,
      teamKills: 4,
      timeSurvived: 118192.8,
      top10s: 56,
      vehicleDestroys: 0,
      walkDistance: 206713.42,
      weaponsAcquired: 669,
      weeklyKills: 20,
      weeklyWins: 0,
      winPoints: 0,
      wins: 1
    }
  }
};
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
    const { classes } = this.props;
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
          {gameType.map(type => {
            const stats = data.gameModeStats[type];
            return <StatCard name={type} data={stats} key={type} />;
          })}
        </div>
        <Typography variant="h2" align="center">
          Matches
        </Typography>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Player);
