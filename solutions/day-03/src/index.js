import React from 'react'
import ReactDOM from 'react-dom'
import cssLogo from './images/css_logo.png'
import htmlLogo from './images/html_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'
import john from './images/john.jpg'

const header = (
  <div>
    <h1 className='header-title' >Front end Technologies</h1>
    <div>
      <img className='logo' src={cssLogo} alt='css logo' />
      <img className='logo' src={htmlLogo} alt='html logo' />
      <img className='logo' src={jsLogo} alt='js logo' />
      <img className='logo' src={reactLogo} alt='react logo' />
    </div>
  </div>
);

const avatar = (
  <div className='avatar-root'>
    <img className='avatar-image' src={john} alt='John ayling'/>
    <p className='avatar-name'>John Ayling</p>
    <p className='avatar-name'>Programmer</p>
  </div>
)

const skillHtml = (skill) => (
  <p key={skill} className='skill'>{skill}</p>
)

const skills = [
  'HTML',
  'CSS',
  'JS',
  'jQuery',
  'React',
  'React Native',
  'PHP',
  'C#',
  'Unity',
];

const card = (
  <div className='card'>
    {avatar}
    <div>Skills</div>
    <div className='skill-section'>
      {skills.map(skill => skillHtml(skill))}
    </div>
  </div>
)

const app = (
  <div>
    {header}
    {card}
  </div>
);

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)
