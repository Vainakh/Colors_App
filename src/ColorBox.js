import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css'

class ColorBox extends Component {
  render() {
    const {name, background} = this.props;
    return (
      <CopyToClipboard text={background}>
        <div
          className="ColorBox"
          style={{background}}>
          {/* <span>{this.props.name}</span>
          <span>MORE</span> */}
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          <span className='see-more'>More</span>
        </div>
      </CopyToClipboard>
    )
  }
};

export default ColorBox;
