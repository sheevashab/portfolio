import './ProjectTitle.css'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function Project2Title() {
  return (
    <section id='project-two-title' className='project-title-page'>
      <div className='project-title-banner'>
        <div className='project-title-header'>
          HOGWARTS HOPEFULS <br />
        </div>
        <div className='project-title-links'>
          <span className="parent-span">
            <IconButton
              aria-label='github-hogwarts-hopefuls'
              onClick={() => window.open('https://github.com/sheevashab/Hogwarts-Hopefuls')}
              sx={{ color: '#EDF2F3', }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </span>
          <span className="parent-span">
            <IconButton
              aria-label='website-hogwarts-hopefuls'
              onClick={() => window.open('https://boring-hopper-18fd57.netlify.app/')}
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
