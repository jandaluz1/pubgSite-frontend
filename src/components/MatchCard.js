import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  Grid,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    background: theme.palette.background.paper,
    width: '100%'
  },
  item: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: '10%'
  }
});

class MatchCard extends Component {
  render() {
    const { name, match, classes } = this.props;
    // console.log(match);
    const maps = {
      "Desert_Main": "Miramar",
      "DihorOtok_Main": "Vikendi",
      "Erangel_Main": "Erangel",
      "Range_Main": "Camp Jackal",
      "Savage_Main": "Sanhok" 
    }
    const player = match.included.filter(
      obj => obj.type === 'participant' && obj.attributes.stats.name === name
    )[0];
    
    const rosters = match.included.filter(obj => obj.type === 'roster')
    const team = rosters.filter(team => team.relationships.participants.data.filter(participant => participant.id === player.id).length > 0)[0]
    
    return (
      <Paper className={classes.paper}>
        <Typography>
          {maps[match.data.attributes.mapName]} - {match.data.attributes.gameMode.replace('-', ' ')}
        </Typography>
        <Grid container direction='row' alignItems='flex-end'> 
          <Grid item className={classes.item}><Typography variant='h5'>{team.attributes.stats.rank} / {rosters.length}</Typography></Grid>
          <Grid item className={classes.item}>Kills:<Typography variant="subtitle1" >{player.attributes.stats.kills}</Typography></Grid>
          <Grid item className={classes.item}>Assists:<Typography variant="subtitle1" >{player.attributes.stats.assists}</Typography></Grid>
          <Grid item className={classes.item}>DBNO:<Typography variant="subtitle1" >{player.attributes.stats.DBNOs}</Typography></Grid>
          <Grid item className={classes.item}>Damage:<Typography variant="subtitle1" >{Math.floor(player.attributes.stats.damageDealt)}</Typography></Grid>
          <Grid item className={classes.item}>Time Alive:<Typography variant="subtitle1" >
                {Math.floor(player.attributes.stats.timeSurvived / 60)}:
                {Math.floor(player.attributes.stats.timeSurvived % 60) < 10 ? '0' + Math.floor(player.attributes.stats.timeSurvived % 60) : Math.floor(player.attributes.stats.timeSurvived % 60)}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapState = state => ({
  name: state.player.name
});
export default withStyles(styles)(connect(mapState)(MatchCard));
