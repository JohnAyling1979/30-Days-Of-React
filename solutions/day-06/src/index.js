import React from 'react'
import ReactDOM from 'react-dom'


// importing data

import { countriesData } from './data/countries'
import { tenMostHighestPopulations } from './data/ten_most_highest_populations'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

const numbers = [];

for (let i = 0; i < 32; i++) {
  numbers.push(i);
}

const PrimeSquare = ({number}) => {
  const isEven = number % 2 === 0;
  let color = ''

  if (isEven) {
    color = 'green';
  } else {
    color = 'yellow';
  }

  let prime = number > 1;

  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      prime = false
    }
  }

  if (prime) {
    color = 'red';
  }

  return (
    <div className='square' style={{background: color}}>
      <p>{number}</p>
    </div>
  );
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
      <h2>30 Days of React</h2>
      <h3>Number Generator</h3>
      {numbers.map(number => <PrimeSquare key={number} number={number} />)}

      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
