import React from 'react'
import './App.css'

export class Planets extends React.Component {
	render() {
  		return  (
			<div className="info">
				<h2>Jakku</h2>
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
	    )
	}
}