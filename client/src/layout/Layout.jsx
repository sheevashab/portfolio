import Navbar from '../components/Navbar'
import './Layout.css'

export default function Layout(props) {
  const { children } = props
  return (
    <div className='layout'>
      <Navbar />
      <div className='children-container'>{children}</div>
    </div>
  )
}
