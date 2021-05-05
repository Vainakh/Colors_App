import React, {Component} from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css';
import Slider from 'rc-slider';



class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500 };

    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({level});
  }
  render() {
    const {colors} = this.props.palette;
    const {level} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ))
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
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
        {/*Navbar goes here*/}
          <div className="Palette-colors">
          {colorBoxes}
          </div>
          {/* footer eventually */}
      </div>
    )
  }
}

export default Palette;