import './ProjectTitle.css'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function Project3Title() {
  return (
    <section id='project-three-title' className='project-title-page'>
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
              <GitHubIcon fontSize="large" />
            </IconButton>
          </span>
          <span className="parent-span">
            <IconButton
              aria-label='website-footy'
              onClick={() => window.open('https://sheevashab.github.io/Find-That-Footy-Player/')}
              sx={{ color: '#EDF2F3', }}>
              <LanguageRoundedIcon fontSize="large" />
            </IconButton>
          </span>
        </div>
      </div>
      <div className='project-title-scroll-text'>
        | KEEP CALM AND SCROLL ON |
      </div>
    </section>
  )
}
