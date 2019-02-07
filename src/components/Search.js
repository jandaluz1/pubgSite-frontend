import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { fetchPlayerInfo, clearMatchStats, clearPlayer } from "../store";
import history from "../history";
const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  input: {
    margin: theme.spacing.unit,
    marginRight: 0,
    fontSize: 20,
    height: "1.5em",
    width: "80%"
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  iconSmall: {
    fontSize: 20
  }
});

class Search extends Component {
  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = name => event => {
    const { search, reset } = this.props;
    const { name } = this.state;
    event.preventDefault();
    reset();
    search(name);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit("name")}>
        <TextField
          className={classes.input}
          value={this.state.name}
          onChange={this.handleChange("name")}
          variant="outlined"
          height="2em"
          placeholder="Player Name"
        />

        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
          disabled={this.state.name.length < 1}
        >
          <SearchIcon className={classes.iconSmall} />
        </Button>
      </form>
    );
  }
}

const mapDispatch = dispatch => ({
  search: async name => {
    await dispatch(fetchPlayerInfo(name));
    history.push("/player");
  },
  reset: async () => {
    dispatch(clearMatchStats());
    dispatch(clearPlayer());
  }
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatch
  )(Search)
);
