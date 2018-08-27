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
        <div className="card">
          <div className="info">
            <h1>Jakku</h1>
            <ul>
              <li><span>Clima:</span> Desconhecido</li>
              <li><span>Gravidade:</span> Desconhecido</li>
              <li><span>População:</span> Desconhecido</li>
              <li><span>Período Orbital:</span> Desconhecido</li>
              <li><span>Período de Rotação:</span> Desconhecido</li>
              <li><span>Água na Superfície:</span> Desconhecido</li>
              <li><span>Diâmetro:</span> Desconhecido</li>
              <li><span>Filmes:</span> Desconhecido</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
