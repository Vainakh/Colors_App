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
import {withStyles, makeStyles, useTheme} from "@material-ui/core/styles";
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/paletteFormNavStyles';

class PaletteFormNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {classes,
      open,
      handleDrawerOpen,
      handleSubmit,
      newPaletteName,
      handlePaletteChange,
    } = this.props;

    return (
      <div className={classes.root}>
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
                Create A New Palette
              </Typography>
          </Toolbar>
            <div className={classes.navBtns}>
              <PaletteMetaForm
                handleSubmit={handleSubmit}
                newPaletteName={newPaletteName}
                handlePaletteChange={handlePaletteChange}
              />
                <Link to='/' className={classes.link}>
                  <Button
                    // className={classes.button}
                    variant='contained'
                    color='secondary'>Go Back</Button>
                </Link>

              </div>
            {/* <Button></Button> */}
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteFormNav);