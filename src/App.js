import React, {Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './ColorHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => <h1>Palette goes here!</h1>}/>
          <Route exact path='/palette/:id' render={() => <h1>Individual Palette!</h1>}/>
        </Switch>
        {/* <div>
          <Palette palette={generatePalette(seedColors[4])}/>
        </div> */}
      </div>
    );
  }
}

export default App;
