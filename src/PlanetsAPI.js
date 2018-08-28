
const api = "https://swapi.co/api/planets/" 

export const getPlanet = (randomPlanet) =>
  fetch(api + randomPlanet)
    .then(res => res.json())
    .then(data =>{ let planet = data; return planet})