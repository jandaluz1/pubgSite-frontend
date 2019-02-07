import React, { Component } from "react";
import Stats from "./Stats";
import Matches from "./Matches";
import Appbar from "./Appbar";
import {
  Switch,
  FormGroup,
  FormControlLabel,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    background: "inherit",
    width: "90%",
    margin: "auto"
  }
});

class Player extends Component {
  state = {
    mode: "fpp"
  };
  handleChange = event => {
    this.state.mode !== "fpp"
      ? this.setState({ mode: "fpp" })
      : this.setState({ mode: "tpp" });
  };
  render() {
    const { classes, name } = this.props;
    const fppMode = ["solo-fpp", "duo-fpp", "squad-fpp"];
    const tppMode = ["solo", "duo", "squad"];
    const { mode } = this.state;
    const gameType = mode === "fpp" ? fppMode : tppMode;
    return (
      <div className={classes.root}>
        <Appbar />
        <Typography variant="h5" align="center">
          Season Stats for {name}
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={mode === "fpp"} onChange={this.handleChange} />
            }
            label={mode === "fpp" ? "fpp" : "tpp"}
          />
        </FormGroup>

        <Stats gameType={gameType} />

        <Typography variant="h5" align="center">
          Recently Played Matches
        </Typography>

        <div>
          <Matches />
        </div>
      </div>
    );
  }
}
const mapState = state => {
  return {
    name: state.player.name,
    matchIds: state.player.matches,
    matches: state.matchInfo
  };
};

export default withStyles(styles)(connect(mapState)(Player));
