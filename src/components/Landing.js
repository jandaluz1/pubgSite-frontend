import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Search from './Search';

const styles = theme => ({
  heroRoot: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  },
  hero: {
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
    width: '40%'
  }
});

const Landing = props => {
  const { classes } = props;
  return (
    <div className={classes.heroRoot}>
      <div className={classes.hero}>
        <Typography variant="h4" align="center">
          Get your stats
          <Search />
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Landing);
