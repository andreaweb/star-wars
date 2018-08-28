import React from 'react'
import './App.css'

const Planets = (props) => {
	return  (
		<div className="info">
			<h2>{props.planet.name}</h2>
			<ul>
			  <li><span>Climate:</span> {props.planet.climate}</li>
			  <li><span>Gravity:</span> {props.planet.gravity}</li>
			  <li><span>Population:</span> {props.planet.population}</li>
			  <li><span>Orbital Period:</span> {props.planet.orbital_period}</li>
			  <li><span>Rotation Period:</span> {props.planet.rotation_period}</li>
			  <li><span>Surface Period:</span> {props.planet.surface_water}</li>
			  <li><span>Terrain:</span> {props.planet.terrain}</li>
			  <li><span>Number of Films:</span> {props.planet.films ? props.planet.films.length : null}</li>
			</ul>
		</div>
    )
}

export default Planets;