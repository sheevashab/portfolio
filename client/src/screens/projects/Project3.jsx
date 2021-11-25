import './Projects.css';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import FindThatFootyPlayer from '../../assets/findthatfootyplayer.png'

export default function Project3() {
  return (
    <section id='project-three' className='project-page'>
      <div className='project-background'>
        <div className='project-title-banner'>
          <div className='project-title-header'>
            FIND THAT FOOTY [PLAYER]! <br />
          </div>
          <div className='project-title-links'>
            <span className="parent-span">
              <IconButton
                aria-label='github-footy'
                onClick={() => window.open('https://github.com/sheevashab/Find-That-Footy-Player')}
                sx={{ color: '#EDF2F3', }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </span>
            <span className="parent-span">
              <IconButton
                aria-label='website-footy'
                onClick={() => window.open('https://sheevashab.github.io/Find-That-Footy-Player/')}
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
              The assignment was to use vanilla JavaScript to make Axios calls that retrieve data from an external API and append it to the DOM. Find That Footy [Player]! is an app that can search a soccer player by name or return a player card via the random player generator button.
            </div>
          </div>
          <div className='project-screenshot-container'>
            <img src={FindThatFootyPlayer}
              className='project-screenshot'
              alt='landing page for Find That Footy Player app'
              onClick={() => window.open('https://sheevashab.github.io/Find-That-Footy-Player/', '_blank')}
            />
          </div>
          <div className='project-techstack-container'>
            <div className='project-resources-header'>
              | TECH STACK |
            </div>
            <div className='project-resources-text'>
              HTML, JavaScript, CSS, Axios
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
