import './Projects.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DesignDelights from '../../assets/designdelights.png'

export default function Project4() {
  return (
    <section id='project-four' className='project-page'>
      <div className='project-background'>
        <div className='project-title-banner'>
          <div className='project-title-header'>
            DESIGN DELIGHTS <br />
          </div>
          <div className='project-title-links'>
            <span className="parent-span">
              <IconButton
                aria-label='github-design-delights'
                onClick={() => window.open('https://github.com/sheevashab/design-delights')}
                sx={{ color: '#EDF2F3', }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </span>
            <span className="parent-span">
              <IconButton
                aria-label='website-design-delights'
                onClick={() => window.open('https://brave-williams-1296d2.netlify.app')}
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
              The assignment was to create a React app that makes API calls to Airtable. Design Delights is an interactive design blog where users can add and delete content.
            </div>
          </div>
          <div className='project-screenshot-container'>
            <img src={DesignDelights}
              className='project-screenshot'
              alt='landing page for Design Delights app'
              onClick={() => window.open('https://brave-williams-1296d2.netlify.app/', '_blank')}
            />
          </div>
          <div className='project-techstack-container'>
            <div className='project-resources-header'>
              | TECH STACK |
            </div>
            <div className='project-resources-text'>
              Airtable, React, React Router Dom, Axios, Netlify, TailWindCSS, CSS
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
