import React, { Component } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { default as match } from '../data/match.json';

class MatchCard extends Component {
  render() {
    // const { classes } = props;
    // console.log(match);
    const joe = match.included.filter(
      obj =>
        obj.type === 'participant' && obj.attributes.stats.name === 'joefr0'
    )[0];
    // console.log('JOE', joe);
    const rosters = match.included.filter(
      obj =>
        obj.type === 'roster' &&
        obj.relationships.participants.data.includes({
          type: 'participant',
          id: joe.id
        })
    );
    // console.log('ROSTER', rosters);
    return (
      <Paper>
        <Typography>{match.data.attributes.mapName}</Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>RANK</TableCell>
              <TableCell> Kills: {joe.attributes.stats.kills}</TableCell>
              <TableCell> Assists: {joe.attributes.stats.assists}</TableCell>
              <TableCell> DBNO: {joe.attributes.stats.DBNOs}</TableCell>
              <TableCell>
                {' '}
                Damage: {Math.floor(joe.attributes.stats.damageDealt)}
              </TableCell>
              <TableCell>
                {' '}
                Time Alive: {Math.floor(joe.attributes.stats.timeSurvived / 60)}
                :{Math.floor(joe.attributes.stats.timeSurvived % 60)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default MatchCard;
