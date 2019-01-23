import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
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
  render() {
    const { classes } = this.props;
    return (
      <form clasName={classes.container}>
        <TextField
          className={classes.input}
          value={this.state.name}
          onChange={this.handleChange('name')}
          variant="outlined"
          height="1em"
        />
        <Button className={classes.button} variant="contained" color="default">
          <SearchIcon className={classes.iconSmall} />
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Search);
