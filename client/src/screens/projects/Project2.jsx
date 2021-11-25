import './Projects.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import HogwartsHopefuls from '../../assets/hogwartshopefuls.png';

export default function Project2() {
  return (
    <section id='project-two' className='project-page'>
      <div className='project-background'>
        <div className='project-title-banner'>
          <div className='project-title-header'>
            HOGWARTS HOPEFULS
          </div>
          <div className='project-title-links'>
            <span className="parent-span">
              <IconButton
                aria-label='github-hogwarts-hopefuls'
                onClick={() => window.open('https://github.com/sheevashab/Hogwarts-Hopefuls')}
                sx={{ color: '#EDF2F3', }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </span>
            <span className="parent-span">
              <IconButton
                aria-label='website-hogwarts-hopefuls'
                onClick={() => window.open('https://boring-hopper-18fd57.netlify.app/')}
                sx={{ color: '#EDF2F3', }}>
                <LanguageRoundedIcon fontSize="medium" />
              </IconButton>
            </span>
          </div>
          <div className='project-title-header'>
            ...
          </div>
        </div>

        <div className='project-container'>
          <div className='project-description-container'>
            <div className='project-description-header'>
              | DESCRIPTION |
            </div>
            <div className='project-description-text'>
              The assignment was to create a full-stack, full-CRUD RESTful app. Hogwarts Hopefuls employs user authentication to allow prospective 'students' to create a magical avatar.
            </div>
          </div>
          <div className='project-screenshot-container'>
            <img src={HogwartsHopefuls}
              className='project-screenshot'
              alt='landing page for Hogwarts Hopefuls app'
              onClick={() => window.open('https://boring-hopper-18fd57.netlify.app/home', '_blank')}
            />
          </div>
          <div className='project-techstack-container'>
            <div className='project-resources-header'>
              | TECH STACK |
            </div>
            <div className='project-resources-text'>
              React, React Router Dom, Ruby on  Rails, Axios, CORS, JWT, bcrypt, Heroku, Netlify, CSS
            </div>
          </div>
        </div>
      </div>

      <div className='project-scroll-text'>
        | KEEP CALM AND SCROLL ON |
      </div>
    </section>
  )
}
