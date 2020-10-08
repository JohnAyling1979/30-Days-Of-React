import React from 'react'
import ReactDOM from 'react-dom'

// importing data
import { tenHighestPopulation } from './data/ten_most_highest_populations'

const numbers = [];
const colors = [];

for (let i = 0; i < 32; i++) {
  numbers.push(i);
}

for (let i = 0; i <= 32; i++) {
  let str = '0123456789abcdef'
  let color = ''

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }

  colors.push('#' + color);
}

const PrimeSquare = ({number}) => {
  const isEven = number % 2 === 0;
  let color = ''

  if (isEven) {
    color = 'orange';
  } else {
    color = 'purple';
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

const ColorSquare = ({color}) => (
  <div className='square' style={{background: color}}>
    <p>{color}</p>
  </div>
)

const total = tenHighestPopulation[0].population;

const Country = ({country, population}) => {
  const width = population / total * 100 + '%';
  return (
    <div>
      <p className='country'>{country}</p>
      <p className='bar-section'>
        <p style={{height: '24px', width, background: 'orange'}}/>
      </p>
      <p className='population'>{population}</p>
    </div>
  )
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

        <h2>30 Days of React</h2>
        <h3>Hex Colors</h3>
        {colors.map((color, index) => <ColorSquare key={index} color={color} />)}

        <h3>World Population</h3>
        {tenHighestPopulation.map(data => <Country key={data.country} country={data.country} population={data.population}/>)}
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
