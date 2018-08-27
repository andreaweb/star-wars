
const api = "https://swapi.co/api/planets/61" 
/*there are 61 planets... here I can call a random number from 1 to 61 every time button is clicked*/

export const getPlanet = () =>
  fetch(api)
    .then(res => res.json())
    .then(data =>{ let planet = data; return planet})