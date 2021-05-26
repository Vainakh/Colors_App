import React, {Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './ColorHelpers';
import {Route, Switch, withRouter} from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savedPalettes || seedColors }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  };
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id
    })
  };
  deletePalette(id) {
    this.setState(
      st => ({palettes: st.palettes.filter(
      palette => palette.id !== id
    )}),
    this.syncLocalStorage
    )
    console.log('clicked')
  };
  savePalette(newPalette) {
    this.setState({
      palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage);
  };
  syncLocalStorage() {
    window
      .localStorage
      .setItem('palettes',
      JSON.stringify(this.state.palettes));
  };
  render() {
    const {location} = this.props;
    return (
      <Route render={(
        {location}
        ) => (
        <TransitionGroup>
          <CSSTransition
            key={location}
            classNames="fade"
            timeout={500}
            >
            <Switch
              location={location}
            >
              <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <div className='page'>
                    <NewPaletteForm
                      savePalette={this.savePalette}
                      palettes={this.state.palettes}
                      {...routeProps}/>
                      </div>
                    )
                  }/>
                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={
                  (routeProps) =>
                (
                <div className='page'>
                  <SingleColorPalette
                  palette={
                  generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                  colorId={routeProps.match.params.colorId}
                />
                </div>)
                }/>
              <Route
                exact
                path='/'
                render={(routeProps) => (
                  <div className='page'>
                <PaletteList
                  deletePalette={this.deletePalette}
                  palettes={this.state.palettes}
                {...routeProps}
                />
                  </div>
                )}/>
              <Route
                exact
                path='/palette/:id'
                render={
                 (routeProps) =>
                 <div>
                <Palette palette={
                  generatePalette(this.findPalette(routeProps.match.params.id))}
              />
                </div>
              }/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>)}/>
    );
  }
}

export default withRouter(App);
