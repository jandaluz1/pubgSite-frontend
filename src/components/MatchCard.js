import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    background: theme.palette.background.default
  }
});

class MatchCard extends Component {
  render() {
    const { name, match, classes } = this.props;
    // console.log(match);
    const player = match.included.filter(
      obj => obj.type === 'participant' && obj.attributes.stats.name === name
    )[0];

    return (
      <Paper>
        <Typography>
          {match.data.attributes.mapName} - {match.data.attributes.gameMode}
        </Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>RANK</TableCell>
              <TableCell> Kills: {player.attributes.stats.kills}</TableCell>
              <TableCell> Assists: {player.attributes.stats.assists}</TableCell>
              <TableCell> DBNO: {player.attributes.stats.DBNOs}</TableCell>
              <TableCell>
                {' '}
                Damage: {Math.floor(player.attributes.stats.damageDealt)}
              </TableCell>
              <TableCell>
                {' '}
                Time Alive:{' '}
                {Math.floor(player.attributes.stats.timeSurvived / 60)}:
                {Math.floor(player.attributes.stats.timeSurvived % 60)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapState = state => ({
  name: state.player.name
});
export default withStyles(styles)(connect(mapState)(MatchCard));
