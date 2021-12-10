import './Navbar.css';
import HideOnScroll from './HideOnScroll';
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      color: '#5289B5',
      '& .MuiMenuItem-root': {
        fontFamily: 'Raleway, sans-serif',
        fontSize: 16,
        '&:hover': {
          color: '#AFD8F2',
        }
      }
    },
  },
})

export default function Navbar() {
  const classes = useStyles()
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
            className={classes.menu}
            id='nav-menu'
            anchorEl={toggle}
            open={open}
            onClose={handleClose}
            transitionDuration={770}
          >
            <NavHashLink className='nav-link' smooth to='#about'>
              <MenuItem
                key='nav-link-about'
                className={classes.menuItem}
                onClick={handleClose}
              >
                About Me
              </MenuItem>
            </NavHashLink>

            <NavHashLink className='nav-link' smooth to='#portfolio'>
              <MenuItem key='nav-link-projects' className={classes.menuItem} onClick={handleClose}>
                Portfolio
              </MenuItem>
            </NavHashLink>

            <NavHashLink className='nav-link' smooth to='#contact'>
              <MenuItem key='nav-link-contact' className={classes.menuItem} onClick={handleClose}>
                Contact
              </MenuItem>
            </NavHashLink>

          </Menu>
        </nav>
      </HideOnScroll>
    </>
  )
}