import React, {Component,useState, useEffect, useRef} from 'react';
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

class ColorPickerForm extends Component {

  render() {
    const {
      paletteIsFull,
      currentColor,
      updateCurrentColor,
      addNewColor,
      newName,
      handleNameChange
    } = this.props;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}/>
        <form onSubmit={addNewColor}>
          <input
            value={newName}
            onChange={handleNameChange}
            // validators={[
            //   'required',
            //   'isColorNameUnique',
            //   'isColorUnique'
            //   ]}
            // errorMessages={[
            //   'this field is required',
            //   'Color name must be unique',
            //   'Color already used'
            //   ]}
            />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={paletteIsFull}
            style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
          >
          {paletteIsFull ? "Palette is Full" : "Add Color"}
          </Button>
        </form>
      </div>
    )
  }
}

export default ColorPickerForm;