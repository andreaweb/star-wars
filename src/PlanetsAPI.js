
const api = "https://swapi.co/api/planets/" 
/*there are 61 planets... here I can call a random number from 1 to 61 every time button is clicked*/

export const getPlanet = (randomPlanet) =>
  fetch(api + randomPlanet)
    .then(res => res.json())
    .then(data =>{ let planet = data; console.log(data); return planet})