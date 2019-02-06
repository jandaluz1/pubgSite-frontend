import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Grid
} from '@material-ui/core';
import { borderBottom, borderColor } from '@material-ui/system';
import StatsDialog from './StatsDialog';

const styles = theme => ({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  pos: {
    marginBottom: 12
  }
});

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
    const { classes, data } = this.props;
    const name = this.props.name.toUpperCase().replace('-', ' ');
    const numOfGames = data.wins + data.losses;

    return (
      <Card className={classes.card}>
        <CardHeader
          disableTypography
          title={<Typography className={classes.title}>{name}</Typography>}
          subheader={
            <Typography>Best Rank: {data.bestRankPoint.toFixed(0)}</Typography>
          }
        >
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography>Kills:</Typography>
                  <Typography variant="subtitle1" color="secondary">
                    {data.kills}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>Wins:</Typography>
                  <Typography variant="subtitle1" color="secondary">
                    {data.wins}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>Assists: </Typography>
                  <Typography variant="subtitle1" color="secondary">
                    {data.assists}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>Top10s:</Typography>
                  <Typography variant="subtitle1" color="secondary">
                    {data.top10s}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>K/D:</Typography>
                  <Typography variant="subtitle1" color="secondary">
                    {data.kills === 0
                      ? 0
                      : (data.kills / numOfGames).toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>Avg Damage:</Typography>
                  <Typography variant="subtitle1" color="secondary">
                    {data.damageDealt === 0
                      ? 0
                      : Math.floor(data.damageDealt / numOfGames)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            onClick={this.handleOpen}
            variant="text"
            size="small"
            color="secondary"
          >
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
