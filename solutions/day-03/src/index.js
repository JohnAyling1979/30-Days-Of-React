import React from 'react'
import ReactDOM from 'react-dom'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import reactLogo from './images/react_logo.png'

const header = (
  <div>
    <h1 className='header-title' >Front end Technologies</h1>
    <div>
      <img className='logo' src={cssLogo} alt='css logo' />
      <img className='logo' src={htmlLogo} alt='html logo' />
      <img className='logo' src={reactLogo} alt='react logo' />
    </div>
  </div>
);

const app = (
  <div>
    {header}
  </div>
);

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
