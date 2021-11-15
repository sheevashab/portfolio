import './Projects.css';
import SevenWanders from '../../assets/sevenwanders.png';

export default function Project1() {
  return (
    <section id='project-one' className='project-page'>
      <div className='project-container'>
        <div className='project-description-header'>
          | DESCRIPTION |
        </div>
        <div className='project-description-text'>
          The assignment was to create a MERN stack app. Seven Wanders is a travel blog where users can read and share their experiences. The site is aimed at inspiring users to decide their next destination and/or to offer a recommendation based on their own travels.
        </div>
        <img src={SevenWanders}
          className='project-screenshot'
          alt='landing page for Seven Wanders app'
          onClick={() => window.open('https://sevenwanders.netlify.app/', '_blank')}
        />
        <div className='project-resources-header'>
          | TECH STACK |
        </div>
        <div className='project-resources-text'>
          React, React Router Dom, MongoDB, Express, Node, Axios, JWT, bcrypt, Heroku, Netlify, CSS
        </div>
      </div>
      <div className='project-scroll-text'>
        | KEEP CALM AND SCROLL ON |
      </div>
    </section>
  )
}
