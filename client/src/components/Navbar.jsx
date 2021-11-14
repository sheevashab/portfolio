import './Navbar.css';
import HideOnScroll from './HideOnScroll';
import { useState, useEffect, useRef } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';

export default function Navbar({ about, projects, contact }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  var about = (
    <NavHashLink className='navbar-link' smooth to='#about'>
      About Me
    </NavHashLink>
  )
  var projects = (
    <NavHashLink className='navbar-link' smooth to='#project-one-title'>
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
      <Stack spacing={2}>
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <HorizontalRuleSharpIcon />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>About Me</MenuItem>
                      <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                      <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </HideOnScroll>
    //   <nav className='navbar'>
    //   </nav>
  )
}
