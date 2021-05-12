import React from 'react';
import {withStyles} from '@material-ui/styles';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
  }
}

function DraggableColorBox(props) {
  return (
    <div className={props.classes.root} style={{backgroundColor: props.color}}>
      {props.color}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox);