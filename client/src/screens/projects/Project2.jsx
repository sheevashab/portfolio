import './Projects.css';
import HogwartsHopefuls from '../../assets/hogwartshopefuls.png';

export default function Project2() {
  return (
    <section id='project-two' className='project-page'>
      <div className='project-container'>
        <div className='project-description-header'>
          | DESCRIPTION |
        </div>
        <div className='project-description-text'>
          The assignment was to create a full-stack, full-CRUD RESTful app. Hogwarts Hopefuls employs user authentication to allow prospective 'students' to create a magical avatar.
        </div>
        <img src={HogwartsHopefuls}
          className='project-screenshot'
          alt='landing page for Hogwarts Hopefuls app'
          onClick={() => window.open('https://boring-hopper-18fd57.netlify.app/home', '_blank')}
        />
        <div className='project-resources-header'>
          | TECH STACK |
        </div>
        <div className='project-resources-text'>
          React, React Router Dom, Ruby on  Rails, Axios, CORS, JWT, bcrypt, Heroku, Netlify, CSS
        </div>
      </div>
      <div className='project-scroll-text'>
        | KEEP CALM AND SCROLL ON |
      </div>
    </section>
  )
}
