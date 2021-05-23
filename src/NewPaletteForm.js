import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
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
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableColorList from './DraggableColorList';
import {arrayMove} from "react-sortable-hoc";
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

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
    display: 'flex',
    alignItems: 'center'
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
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    width: '100%'
  },
  button: {
    width: '50%'
  }
}));

function NewPaletteForm(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setCurrentColor] = React.useState("plum");
  const [colorsArray, setColorsArray] = useState(props.palettes[0].colors);
  const [newName, setNewName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");
  const [maxColor, setMaxColor] = useState(20);

  // useEffect(() => {

  //   ValidatorForm.addValidationRule('isColorNameUnique', value =>
  //     colorsArray.every(
  //       ({name}) => name.toLowerCase() !== value.toLowerCase()
  //     )
  //   );
  //   ValidatorForm.addValidationRule('isColorUnique', value =>
  //     colorsArray.every(
  //       ({color}) => color.toLowerCase() !== currentColor.toLowerCase()
  //     )
  //   );
  // });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (currentColor) => {
    setCurrentColor(currentColor.hex);
  };

  const addNewColor = (event) => {
    const newColor = {
      color: currentColor,
      name: newName
    }
    setColorsArray(colorsArray => ([...colorsArray, newColor]));
    setNewName("");
    event.preventDefault()
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePaletteChange = (event) => {
    setNewPaletteName(event.target.value);
  };

  const clearColors = () => {
    setColorsArray(colorsArray => ([]));
  };

  const handleSubmit = (palette) => {
    let newName = palette.paletteName.toLowerCase();
    const newPalette = {
      paletteName: newName,
      id: newName.replace(/ /g,"-"),
      colors: colorsArray,
      emoji: palette.emoji
    }
    props.savePalette(newPalette);
    props.history.push('/');
  }
  const removeColor = (colorName) => {
    setColorsArray(
      colorsArray.filter(color => color.name !== colorName)
    )
  }
  const onSortEnd = ({oldIndex, newIndex}) => {
    setColorsArray(colorsArray => arrayMove(colorsArray, oldIndex, newIndex));
  };
  const addRandomColor = () => {
    const allColors = props.palettes.map(palette => palette.colors).flat();
    var rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColorsArray(colorsArray => [...colorsArray, randomColor]);
  }

  const paletteIsFull = colorsArray.length >= maxColor;

  return (
    <div className={classes.root}>
    <PaletteFormNav
      open={open}
      classes={classes}
      handleDrawerOpen={handleDrawerOpen}
      handleSubmit={handleSubmit}
      newPaletteName={newPaletteName}
      handlePaletteChange={handlePaletteChange}
    />
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
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                color='secondary'
                onClick={clearColors}
                className={classes.button}>
                Clear Palette
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={() => addRandomColor()}
                disabled={paletteIsFull}
                className={classes.button}>
                Random Color
              </Button>
            </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            currentColor={currentColor}
            updateCurrentColor={updateCurrentColor}
            addNewColor={addNewColor}
            newName={newName}
            handleNameChange={handleNameChange}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
          <DraggableColorList
            onSortEnd={onSortEnd}
            colors={colorsArray}
            removeColor={removeColor}
            axis='xy'
          />
      </main>
    </div>
  );
}

export default withStyles(useStyles,{withTheme: true})(NewPaletteForm);




