import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
});

class StatsDialog extends Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { data, name, open } = this.props;
    const numOfGames = data.wins + data.losses;
    const distance = data.walkDistance + data.swimDistance + data.rideDistance;

    return (
      <Dialog open={open} onClose={this.handleClose}>
        <DialogTitle>{name}</DialogTitle>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Kills: {data.kills}</TableCell>
              <TableCell>Assists: {data.assists}</TableCell>
              <TableCell>DBNOs: {data.dBNOs}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Damage: {data.damageDealt}</TableCell>
              <TableCell>
                K/D:{' '}
                {data.kills === 0 ? 0 : (data.kills / numOfGames).toFixed(2)}
              </TableCell>
              <TableCell>
                HeadShot %:{' '}
                {data.headshotKills === 0
                  ? 0
                  : ((data.headshotKills / data.kills) * 100).toFixed(0)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Average Damage:{' '}
                {data.damageDealt === 0
                  ? 0
                  : Math.floor(data.damageDealt / numOfGames)}
              </TableCell>
              <TableCell>Most kills in a game: {data.roundMostKills}</TableCell>
              <TableCell>Wins: {data.wins}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Top10s: {data.top10s}</TableCell>
              <TableCell>
                Average Time Survied:{' '}
                {data.timeSurvived === 0
                  ? 0
                  : ((data.timeSurvived / numOfGames).toFixed(0) / 60).toFixed(
                      1
                    )}
              </TableCell>
              <TableCell>
                Average Distance Traveled:{' '}
                {distance === 0 ? 0 : (distance / numOfGames).toFixed(2)}meters
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Dialog>
    );
  }
}

export default withStyles(styles)(StatsDialog);
