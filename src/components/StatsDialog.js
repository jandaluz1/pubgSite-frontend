import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    width: '60%',
    margin: 'auto',
    padding: theme.spacing.unit * 4,
    outline: 'none',
  }
 });

class StatsDialog extends Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { data, name, open, classes } = this.props;
    const numOfGames = data.wins + data.losses;
    const distance = data.walkDistance + data.swimDistance + data.rideDistance;

    return (
      <Dialog open={open} onClose={this.handleClose} className={classes.paper} maxWidth='lg' fullWidth>
        <DialogTitle>{name}</DialogTitle>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>Kills:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.kills}</Typography>
              </TableCell>
              <TableCell>
                <Typography>Assists:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.assists}</Typography>
              </TableCell>
              <TableCell>
                <Typography>DBNOs:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.dBNOs}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Damage:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.damageDealt}</Typography>
              </TableCell>
              <TableCell>
                <Typography>K/D:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.kills === 0 ? 0 : (data.kills / numOfGames).toFixed(2)}</Typography>
              </TableCell>
              <TableCell>
                <Typography>HeadShot %:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.headshotKills === 0
                  ? 0
                  : ((data.headshotKills / data.kills) * 100).toFixed(0)}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Average Damage:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.damageDealt === 0
                  ? 0
                  : Math.floor(data.damageDealt / numOfGames)}</Typography>
              </TableCell>
              <TableCell>
                <Typography>Most kills in a game:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.roundMostKills}</Typography>
              </TableCell>
              <TableCell>
                <Typography>Wins:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.wins}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Top10s:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.top10s}</Typography>
              </TableCell>
              <TableCell>
                <Typography>Average Time Survied:</Typography>
                <Typography variant="subtitle1" color="secondary">{data.timeSurvived > 1 ? 0 : Math.floor(data.timeSurvived / numOfGames / 60)}:
                {Math.floor((data.timeSurvived / numOfGames) % 60) > 9
                  ? Math.floor((data.timeSurvived / numOfGames) % 60)
                  : '0' + Math.floor((data.timeSurvived / numOfGames) % 60)}</Typography>
              </TableCell>
              <TableCell>
                <Typography>Average Distance Traveled:</Typography>
                <Typography variant="subtitle1" color="secondary">{distance === 0 ? 0 : (distance / numOfGames).toFixed(2)} meters</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Dialog>
    );
  }
}

export default withStyles(styles)(StatsDialog);
