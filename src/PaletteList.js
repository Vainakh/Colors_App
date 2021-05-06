import React, {Component} from 'react';
import './PaletteList.css';
import {Link} from 'react-router-dom';

class PaletteList extends Component {

  render() {
    const {palettes} = this.props;
    return (
      <div>
         <div>React Colors</div>
         {palettes.map(palette => (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    )
  }
}

export default PaletteList;


