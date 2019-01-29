import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { fetchPlayerInfo } from '../store';
import history from '../history';
const styles = theme => ({
  container: {
    display: 'flex'
  },
  input: {
    margin: theme.spacing.unit,
    marginRight: 0,
    height: '1em',
    width: '80%'
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
    name: ''
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  onClick = () => {
    console.log('Clicked search');
  };
  render() {
    console.log(this.props);
    const { classes, searchOnClick } = this.props;
    return (
      <div className={classes.container}>
        <TextField
          className={classes.input}
          value={this.state.name}
          onChange={this.handleChange('name')}
          variant="outlined"
          height="1em"
        />
        <Button className={classes.button} variant="contained" color="default">
          <SearchIcon
            onClick={() => searchOnClick(this.state.name)}
            className={classes.iconSmall}
          />
        </Button>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  searchOnClick: name => {
    dispatch(fetchPlayerInfo(name));
    history.push('/player');
  }
});

const mapState = state => ({
  id: state.id,
  matches: state.matches,
  stats: state.stats
});

export default withStyles(styles)(
  connect(
    mapState,
    mapDispatch
  )(Search)
);
