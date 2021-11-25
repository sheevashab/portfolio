import './Projects.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SevenWanders from '../../assets/sevenwanders.png';

export default function Project1() {
  return (
    <section id='project-one' className='project-page'>
      <div className='project-background'>
        <div className='project-title-banner'>
          <div className='project-title-header'>
            SEVEN WANDERS
          </div>
          <div className='project-title-links'>
            <span className="parent-span">
              <IconButton
                aria-label='github-seven-wanders'
                onClick={() => window.open('https://github.com/sheevashab/seven-wanders')}
                sx={{ color: '#EDF2F3', }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </span>
            <span className="parent-span">
              <IconButton
                aria-label='website-seven-wanders'
                onClick={() => window.open('https://sevenwanders.netlify.app/')}
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
              The assignment was to create a MERN stack app. Seven Wanders is a travel blog where users can read and share their experiences. The site is aimed at inspiring users to decide their next destination and/or to offer a recommendation based on their own travels.
            </div>
          </div>
          <div className='project-screenshot-container'>
            <img src={SevenWanders}
              className='project-screenshot'
              alt='landing page for Seven Wanders app'
              onClick={() => window.open('https://sevenwanders.netlify.app/', '_blank')}
            />
          </div>
          <div className='project-techstack-container'>
            <div className='project-resources-header'>
              | TECH STACK |
            </div>
            <div className='project-resources-text'>
              React, React Router Dom, MongoDB, Express, Node, Axios, JWT, bcrypt, Heroku, Netlify, CSS
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
