import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const data = {
//   'squad-fpp': {
//     assists: 66,
//     bestRankPoint: 2025.3982,
//     boosts: 159,
//     dBNOs: 276,
//     dailyKills: 20,
//     dailyWins: 0,
//     damageDealt: 39613.676,
//     days: 20,
//     headshotKills: 72,
//     heals: 214,
//     killPoints: 0,
//     kills: 258,
//     longestKill: 219.21274,
//     longestTimeSurvived: 1912.066,
//     losses: 223,
//     maxKillStreaks: 3,
//     mostSurvivalTime: 1912.066,
//     rankPoints: 2025.3982,
//     rankPointsTitle: '3-5',
//     revives: 30,
//     rideDistance: 37873.375,
//     roadKills: 0,
//     roundMostKills: 8,
//     roundsPlayed: 223,
//     suicides: 4,
//     swimDistance: 780.10876,
//     teamKills: 4,
//     timeSurvived: 118192.8,
//     top10s: 56,
//     vehicleDestroys: 0,
//     walkDistance: 206713.42,
//     weaponsAcquired: 669,
//     weeklyKills: 20,
//     weeklyWins: 0,
//     winPoints: 0,
//     wins: 1
//   }
// };

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function StatCard(props) {
  const { classes, data, name } = props;
  console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name} Best Rank: {data.bestRankPoint.toFixed(0)}
        </Typography>
        <Typography>Kills: {data.kills}</Typography>
        <Typography>Wins: {data.wins}</Typography>
        <Typography>Top10s: {data.top10s}</Typography>
        <Typography>Games: {data.wins + data.losses}</Typography>
      </CardContent>
    </Card>
  );
}

StatCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatCard);
