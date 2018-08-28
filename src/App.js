import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import { Planets } from './Planets'
import * as PlanetsAPI from './PlanetsAPI'
import './App.css'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

export default class App extends React.Component {
  state = {
  }

  getRandomNumber(){
    return Math.floor(Math.random()*61)
  }

  componentDidMount(){
    PlanetsAPI.getPlanet(this.getRandomNumber()).then((planet) => console.log(planet))
  }

  render() {
    return (
      <div className="app">
        <i className="fa fa-hand-spock-o"></i>
        <div className="card">
          <header>
            <h1>Star Wars Random Planets</h1>
            <div className="icons-container">
              <i className="fa fa-globe"></i>
              <i className="fa fa-moon-o"></i>
              <i className="fa fa-rocket"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-sun-o"></i>
            </div>
          </header>
          <Planets/>
          <button>Next <i className="fa fa-space-shuttle"></i></button>
        </div>
      </div>
    )
  }
}
