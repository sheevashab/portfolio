import './Contact.css';
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
        <div><LinkedInIcon fontSize="large" /></div>
        <a href='https://www.linkedin.com/in/sheeva-shabahang-2255a562/' target='_blank' rel="noreferrer">linkedin</a>
        <div><GitHubIcon fontSize="large" /></div>
        <a href='https://github.com/sheevashab/' target='_blank' rel="noreferrer">github</a>
        <div><EmailRoundedIcon fontSize="large" /></div>
        <a href='mailto:sheeva.shabahang@gmail.com'>email</a>
        <div><AttachFileRoundedIcon fontSize="large" /></div>
        <div>resume</div>
      </div>
    </section>
  )
}
