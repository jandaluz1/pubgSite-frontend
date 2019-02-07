import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "./Search";

const styles = {
  // root: {
  //   flexGrow: 1
  // },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" className={classes.container}>
        <Toolbar>
          <Typography variant="h5" color="secondary" inline>
            PUBG
          </Typography>
          <Typography variant="h5" color="primary" inline>
            stats
          </Typography>
        </Toolbar>
        <Search />
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
