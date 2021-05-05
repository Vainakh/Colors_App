import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();

    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({format: event.target.value});
    this.props.handleChange(event.target.value);
  }
  render() {
    const {level, changeLevel, handleChange} = this.props;
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
                  onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb 255, 255, 255</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba255, 255, 255, 1.0</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

export default Navbar;