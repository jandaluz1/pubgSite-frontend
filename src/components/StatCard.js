import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Modal
} from '@material-ui/core';
import StatsDialog from './StatsDialog';

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

class StatCard extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, data, name } = this.props;
    const numOfGames = data.wins + data.losses;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography>Best Rank: {data.bestRankPoint.toFixed(0)}</Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Kills: {data.kills}</TableCell>
                <TableCell>Wins: {data.wins}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Assists: {data.assists}</TableCell>
                <TableCell>Top10s: {data.top10s}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  K/D:{' '}
                  {data.kills === 0 ? 0 : (data.kills / numOfGames).toFixed(2)}
                </TableCell>
                <TableCell>
                  Average Damage:{' '}
                  {data.damageDealt === 0
                    ? 0
                    : Math.floor(data.damageDealt / numOfGames)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <Button onClick={this.handleOpen} variant="text" size="small">
            More Stats
          </Button>
        </CardActions>
        <StatsDialog
          open={this.state.open}
          onClose={this.handleClose}
          name={name}
          data={data}
        />
      </Card>
    );
  }
}

StatCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StatCard);
