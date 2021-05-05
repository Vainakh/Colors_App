import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';

class Navbar extends Component {
  render() {
    const {level, changeLevel} = this.props;
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
      </header>
    )
  }
}

export default Navbar;