import React, {useState, useEffect, useRef} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {withStyles} from '@material-ui/styles';
import {ChromePicker} from 'react-color';
import Button from "@material-ui/core/Button";
import DraggableColorBox from './DraggableColorBox';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function NewPaletteForm(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setCurrentColor] = React.useState("plum");
  const [colorsArray, setColorsArray] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");

  useEffect(() => {

    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colorsArray.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      colorsArray.every(
        ({color}) => color.toLowerCase() !== currentColor.toLowerCase()
      )
    );
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (currentColor) => {
    setCurrentColor(currentColor.hex);
  };

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newName
    }
    setColorsArray(colorsArray => ([...colorsArray, newColor]));
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePaletteChange = (event) => {
    setNewPaletteName(event.target.value);
  }

  const handleSubmit = () => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newPaletteName.toLowerCase().replace(/ /g,"-"),
      colors: colorsArray
    }
    console.log(newPalette)
    props.savePalette(newPalette);
    props.history.push('/')
  }
  const removeColor = (colorName) => {
    setColorsArray(
      colorsArray.filter(color => color.name !== colorName)
    )
  }

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
              </form>

            <Button></Button>
          </Toolbar>
        </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <Typography variant="h4">
            Design Your Palette
          </Typography>
          <div>
            <Button variant='contained' color='secondary'>Clear Palette</Button>
            <Button variant='contained' color='primary'>Random Color</Button>
          </div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}/>
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newName}
            onChange={handleNameChange}
            validators={[
              'required',
              'isColorNameUnique',
              'isColorUnique'
              ]}
            errorMessages={[
              'this field is required',
              'Color name must be unique',
              'Color already used'
              ]}
            />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            style={{backgroundColor: currentColor}}
          >Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
            {colorsArray.map(color => (
              <DraggableColorBox
                color={color.color}
                name={color.name}
                key={color.name}
                handleClick={() => removeColor(color.name)}
                />
            ))}
        </main>
    </div>
  );
}

export default withStyles(useStyles,{withTheme: true})(NewPaletteForm);




