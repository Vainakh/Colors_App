import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const {classes, paletteName, emoji, colors, id, openDialog} = props;
  const miniColorBoxes = colors.map(color => (
    <div className={classes.miniColor}
         style={{backgroundColor: color.color}}
         key={color.name}>
    </div>
  ));
  const deletePalette =(event) => {
    event.stopPropagation();
    openDialog(id);
  }
  return (
    <div className={classes.root}
         onClick={props.handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{transition: 'all 0.3s ease-in-out'}}
        onClick={deletePalette}
      />
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>
          {emoji}
        </span>
      </h5>
    </div>
  )
};

export default withStyles(styles)(MiniPalette);