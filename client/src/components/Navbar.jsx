import './Navbar.css';
import HideOnScroll from './HideOnScroll';
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';

export default function Navbar() {
  const [toggle, setToggle] = useState(null)
  const open = Boolean(toggle)

  const handleClick = e => {
    setToggle(e.currentTarget)
  }

  const handleClose = () => {
    setToggle(null)
  }

  return (
    <>
      <HideOnScroll>
        <nav>
          <div className='navbar-hash-link'>
            <NavHashLink smooth to='#landing'>
              <KeyboardArrowUpRoundedIcon sx={{ color: '#AFD8F2' }} />
              SCROLL HOME
            </NavHashLink>
          </div>

          <Button
            id='menu-button'
            aria-controls='nav-button'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            sx={{ color: '#AFD8F2' }}
            onClick={handleClick}
          >
            {toggle === null ? (
              <HorizontalRuleSharpIcon />
            ) : (
              <HorizontalRuleSharpIcon />
            )}
          </Button>
          <Menu
            id='nav-menu'
            anchorEl={toggle}
            open={open}
            onClose={handleClose}
            transitionDuration={1000}
            sx={{ color: '#AFD8F2' }}
          >
            <NavHashLink className='nav-link' smooth to='#about'>
              <MenuItem key='nav-link-about' onClick={handleClose}>
                About Me
              </MenuItem>
            </NavHashLink>
            <NavHashLink className='nav-link' smooth to='#project-one-title'>
              <MenuItem key='nav-link-projects' onClick={handleClose}>
                Portfolio
              </MenuItem>
            </NavHashLink>
            <NavHashLink className='nav-link' smooth to='#contact'>
              <MenuItem key='nav-link-contact' onClick={handleClose}>
                Contact
              </MenuItem>
            </NavHashLink>
          </Menu>
        </nav>
      </HideOnScroll>
    </>
  )
}