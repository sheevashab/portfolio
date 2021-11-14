import './Contact.css';
import { HashLink } from 'react-router-hash-link';
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
        <div><LinkedInIcon /></div>
        <a href='https://www.linkedin.com/in/sheeva-shabahang-2255a562/' target='_blank'>linkedin</a>
        <div><GitHubIcon /></div>
        <a href='https://github.com/sheevashab/' target='_blank'>github</a>
        <div><EmailRoundedIcon /></div>
        <a href='mailto:sheeva.shabahang@gmail.com'>email</a>
        <div><AttachFileRoundedIcon /></div>
        <div>resume</div>
      </div>
    </section>
  )
}
