import React, {Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './ColorHelpers';
import {Route, Switch} from 'react-router-dom';
import PaletteList from './PaletteList';

class App extends Component {

  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id
    })
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={(routeProps) => <PaletteList
              palettes={seedColors}
            {...routeProps}
            />}/>
          <Route
            exact
            path='/palette/:id'
            render={
              (routeProps) =>
              <Palette palette={
                generatePalette(this.findPalette(routeProps.match.params.id))}/>}
                />
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={() => <h1>Single Color Page</h1>}
          />
        </Switch>
        {/* <div>
          <Palette palette={generatePalette(seedColors[4])}/>
        </div> */}
      </div>
    );
  }
}

export default App;
