import React, { Component } from "react";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchMatchStats } from "../store";
import MatchCard from "./MatchCard";

const styles = theme => ({
  match: {
    marginTop: theme.spacing.unit * 0.4,
    marginBottom: theme.spacing.unit * 0.4,
    width: "100%"
  },
  button: {
    backgroundColor: theme.palette.secondary.main
  },
  loading: {
    margin: "auto"
  }
});

class Matches extends Component {
  state = { limit: 0 };
  componentDidMount() {
    this.loadMore();
  }

  loadMore = () => {
    const { matchIds, loadMatchStats } = this.props;
    const { limit } = this.state;
    const matchesToFetch = matchIds.slice(limit, limit + 5);
    loadMatchStats(matchesToFetch);
    this.setState({ limit: this.state.limit + 5 });
  };
  render() {
    const { matches, classes } = this.props;
    const { limit } = this.state;
    const matchesToDisplay = matches.slice(0, limit);
    console.log("LIMIT", limit);
    return (
      <Grid container direction="row">
        {matches.length > 0 ? (
          matchesToDisplay.map(match => (
            <Grid item xs={12} className={classes.match} key={match.data.id}>
              <MatchCard match={match} />
            </Grid>
          ))
        ) : (
          <div className={classes.loading}>
            <CircularProgress color="secondary" />
          </div>
        )}
        <Button
          className={classes.button}
          disableRipple
          fullWidth
          onClick={this.loadMore}
          variant="text"
        >
          Load More
        </Button>
      </Grid>
    );
  }
}
const mapState = state => ({
  matchIds: state.player.matches,
  matches: state.matchInfo
});

const mapDispatch = dispatch => ({
  loadMatchStats: ids => dispatch(fetchMatchStats(ids))
});
export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Matches)
);
