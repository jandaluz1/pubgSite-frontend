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
// import { default as match } from '../data/match.json';

class MatchCard extends Component {
  render() {
    const { name, match } = this.props;
    // console.log(match);
    const player = match.included.filter(
      obj => obj.type === 'participant' && obj.attributes.stats.name === name
    )[0];
    // console.log('JOE', joe);
    // const rosters = match.included.filter(
    //   obj =>
    //     obj.type === 'roster' &&
    //     obj.relationships.participants.data.includes({
    //       type: 'participant',
    //       id: joe.id
    //     })
    // );
    // console.log('ROSTER', rosters);
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
export default connect(mapState)(MatchCard);
