import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      format: "hex",
      open: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(event) {
    this.setState({format: event.target.value, open: true});
    this.props.handleChange(event.target.value);
  }
  closeSnackbar(){
    this.setState({open: false});
  }
  render() {
    const {level, changeLevel} = this.props;
    const {format} = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              railStyle={{height: "8px"}}
              handleStyle={{
                backgroundColor: "green",
                outline: "none",
                border: "2px solid green",
                boxShadow: "none",
                width: "13px",
                height: "13px",
                marginLeft: "-7px",
                marginRight: "-2px"

              }}
              activeHandleStyle={{
                backgroundColor: "green",
                outline: "none",
                border: "2px solid green",
                boxShadow: "none",
                width: "13px",
                height: "13px",
                marginLeft: "-7px",
                marginRight: "-2px"
              }}
              hoverHandleStyle={{
                backgroundColor: "green",
                outline: "none",
                border: "2px solid green",
                boxShadow: "none",
                width: "13px",
                height: "13px",
                marginLeft: "-7px",
                marginRight: "-2px"
              }}
              focusHandleStyle={{
                backgroundColor: "green",
                outline: "none",
                border: "2px solid green",
                boxShadow: "none",
                width: "13px",
                height: "13px",
                marginLeft: "-7px",
                marginRight: "-3px"
              }}
              trackStyle={{backgroundColor: "transparent"}}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format}
                  onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb 255, 255, 255</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba255, 255, 255, 1.0</MenuItem>
          </Select>
        </div>
        <Snackbar
          onClose={this.closeSnackbar}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
              >
              <CloseIcon/>
            </IconButton>
          ]}
          />
      </header>
    )
  }
}

export default Navbar;