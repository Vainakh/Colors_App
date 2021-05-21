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

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    dispaly: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: "64px",
    alignItems: 'center'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    margin: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space between'
  },
  button: {
  },
  link: {
    textDecoration: 'none',
    marginLeft: '10px'
  }
})

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
              {/* 1 */}
              {/* <ValidatorForm onSubmit={handleSubmit}>

              </ValidatorForm> */}
          </Toolbar>
            <div className={classes.navBtns}>
              {/* <form onSubmit={handleSubmit}>
                <input
                  label="New Palette Name"
                  value={newPaletteName}
                  name="newPaletteName"
                  onChange={handlePaletteChange}
                  // validator={["required"]}
                  // errorMessages={["Enter Palette Name"]}
                  />
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  >
                  Save Palette
                </Button>
              </form> */}
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