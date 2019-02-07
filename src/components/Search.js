import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { fetchPlayerInfo } from "../store";
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
    const { search } = this.props;
    const { name } = this.state;
    event.preventDefault();
    search(name);
  };

  render() {
    const { classes } = this.props;
    const hasError = !!this.props.errorMessage;
    return (
      <div>
        <form
          className={classes.container}
          onSubmit={this.handleSubmit("name")}
        >
          <TextField
            className={classes.input}
            value={this.state.name}
            onChange={this.handleChange("name")}
            variant="outlined"
            height="2em"
            placeholder="Player Name"
            error={hasError}
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
        {hasError && (
          <Typography variant="subtitle1" color="error">
            {this.props.errorMessage}
          </Typography>
        )}
      </div>
    );
  }
}

const mapState = state => ({
  errorMessage: state.player.errorMessage
});

const mapDispatch = (dispatch, ownProps) => ({
  search: name => {
    try {
      dispatch(fetchPlayerInfo(name));
    } catch (error) {
      console.log("MAPDISPATCH", error);
      console.log(ownProps);
    }
  }
  // reset: async () => {
  //   dispatch(clearMatchStats());
  //   dispatch(clearPlayer());
  // }
});

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Search)
);
