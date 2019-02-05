import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, ButtonBase, Button } from '@material-ui/core';
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

  handleSubmit = name => event => {
    const {search} = this.props
    const {name} = this.state
    event.preventDefault()
    search(name)
  }

  render() {
    const { classes} = this.props;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit('name')}>
        <TextField
          className={classes.input}
          value={this.state.name}
          onChange={this.handleChange('name')}
          variant="outlined"
          height="1em"
          fullWidth
        />
        
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type='submit'
          disabled={this.state.name.length < 1}
        >
          <SearchIcon
            className={classes.iconSmall}
          />
        </Button>
      </form>
    );
  }
}

const mapDispatch = dispatch => ({
  search: async name => {
    await dispatch(fetchPlayerInfo(name));
    history.push('/player');
  }
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatch
  )(Search)
);
