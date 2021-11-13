import './Navbar.css';
import HideOnScroll from './HideOnScroll';
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar({ about, projects, contact }) {
  var about = (
    <NavHashLink className='navbar-link' smooth to='#about'>
      About Me
    </NavHashLink>
  )
  var projects = (
    <NavHashLink className='navbar-link' smooth to='#project-one'>
      Portfolio
    </NavHashLink>
  )
  var contact = (
    <NavHashLink className='navbar-link' smooth to='#contact'>
      Contact Me
    </NavHashLink>
  )
  return (
    <HideOnScroll>
      <nav className='navbar'>
        {about}
        {projects}
        {contact}
      </nav>
    </HideOnScroll>
  )
}
