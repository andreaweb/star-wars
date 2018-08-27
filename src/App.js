import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import Planets from './Planets'
import * as PlanetsAPI from './PlanetsAPI'
import './App.css'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

export default class App extends React.Component {
  state = {
  }

  componentDidMount(){
    PlanetsAPI.getPlanet().then((planet) => console.log(planet))
  }

  render() {
    return (
      <div className="app">
      </div>
    )
  }
}
