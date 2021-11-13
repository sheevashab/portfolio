import { useScrollTrigger, Slide } from '@mui/material'

export default function HideOnScroll({ children }) {
  const trigger = useScrollTrigger()
  return (
    <Slide in={!trigger} appear={false} direction='down'>
      {children}
    </Slide>
  )
}