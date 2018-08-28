import React from 'react'
// import { Switch, Route } from 'react-router-dom' //will add later for gh-pages
import Planets from './Planets'
import * as PlanetsAPI from './PlanetsAPI'
import './App.css'

export default class App extends React.Component {
  state = {
    planet: ''
  }

  getRandomNumber(){
    return Math.floor(Math.random()*61)
  }

  getRandomPlanet = () =>{
    return PlanetsAPI.getPlanet(this.getRandomNumber()).then((planet) => this.setState({planet}))
  }

  componentDidMount(){
    this.getRandomPlanet()
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
          <Planets {...this.state} />
          <button onClick={this.getRandomPlanet}>Next <i className="fa fa-space-shuttle"></i></button>
        </div>
      </div>
    )
  }
}
