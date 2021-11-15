import './Contact.css';
import { NavHashLink } from 'react-router-hash-link';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

export default function Contact() {
  return (
    <section id='contact' className='contact-page'>
      <div className='contact-header'>
        CONTACT
      </div>
      <div className='contact-links'>
        <span className="parent-span">
          <IconButton
            aria-label='sheeva-shabahang-linkedin'
            onClick={() => window.open('https://www.linkedin.com/in/sheeva-shabahang-2255a562/')}
            sx={{ color: '#EDF2F3', }}>
            <LinkedInIcon fontSize="large" />
            <h5 className='contact-link'>linkedin</h5>
          </IconButton>
        </span>

        <span className="parent-span">
          <IconButton
            aria-label='sheeva-shabahang-github'
            onClick={() => window.open('https://github.com/sheevashab/')}
            sx={{ color: '#EDF2F3', }}>
            <GitHubIcon fontSize="large" />
            <h5 className='contact-link'>github</h5>
          </IconButton>
        </span>

        <span className="parent-span">
          <IconButton
            aria-label='sheeva-shabahang-email'
            onClick={() => window.open('mailto:sheeva.shabahang@gmail.com')}
            sx={{ color: '#EDF2F3', }}>
            <EmailRoundedIcon fontSize="large" />
            <h5 className='contact-link'>email</h5>
          </IconButton>
        </span>

        <span className="parent-span">
          <IconButton
            aria-label='sheeva-shabahang-resume'
            onClick={() => window.open('https://res.cloudinary.com/dyyjvyqtn/image/upload/v1636938339/SheevaShabahang_ResumeLink_xnw7uo.jpg')}
            sx={{ color: '#EDF2F3', }}>
            <AttachFileRoundedIcon fontSize="large" />
            <h5 className='contact-link'>resume</h5>
          </IconButton>
        </span>
      </div>
      <div className='contact-scroll-text'>
        <NavHashLink smooth to='#landing'>
          <KeyboardArrowUpRoundedIcon sx={{ color: '#E8CBB1' }} />
          SCROLL HOME
        </NavHashLink>
      </div>
    </section >
  )
}
