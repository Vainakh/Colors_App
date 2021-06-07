import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import {ChromePicker} from 'react-color';
import Button from "@material-ui/core/Button";
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {
      paletteIsFull,
      currentColor,
      updateCurrentColor,
      addNewColor,
      newName,
      handleNameChange,
      classes
    } = this.props;

    return (
      <div >
        <ChromePicker
          color={currentColor}
          onChangeComplete={updateCurrentColor}
          className={classes.picker}
          />
        <form
          className={classes.picker}
          onSubmit={addNewColor}>
          <input
            className={classes.colorNameInput}
            value={newName}
            placeholder="Enter Color Name"
            variant='filled'
            onChange={handleNameChange}/>
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={paletteIsFull}
            style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
            className={classes.addColor}
          >
          {paletteIsFull ? "Palette is Full" : "Add Color"}
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm);