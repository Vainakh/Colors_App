import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const {classes, open, handleDrawerOpen, handleSubmit, newPaletteName, handlePaletteChange} = this.props;
    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='default'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
              <Typography
                variant="h6"
                color='inherit'
                noWrap>
                Persistent drawer
              </Typography>
              {/* 1 */}
              {/* <ValidatorForm onSubmit={handleSubmit}>

              </ValidatorForm> */}
              <form onSubmit={handleSubmit}>
                <input
                    label="New Palette Name"
                    value={newPaletteName}
                    name="newPaletteName"
                    onChange={handlePaletteChange}
                    // validator={["required"]}
                    // errorMessages={["Enter Palette Name"]}
                    />
                  {/* 1 */}
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  // onClick={handleSubmit}
                  >
                  Save Palette
                </Button>
                <Link to='/'>
                  <Button variant='contained' color='secondary'>Go Back</Button>
                </Link>
              </form>
            <Button></Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default PaletteFormNav;