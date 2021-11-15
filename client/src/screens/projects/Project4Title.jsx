import './ProjectTitle.css'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function Project1Title() {
  return (
    <section id='project-four-title' className='project-title-page'>
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
              <GitHubIcon fontSize="large" />
            </IconButton>
          </span>
          <span className="parent-span">
            <IconButton
              aria-label='website-design-delights'
              onClick={() => window.open('https://brave-williams-1296d2.netlify.app')}
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
