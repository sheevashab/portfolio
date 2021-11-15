import './Projects.css';
import FindThatFootyPlayer from '../../assets/findthatfootyplayer.png'

export default function Project3() {
  return (
    <section id='project-three' className='project-page'>
      <div className='project-container'>
        <div className='project-description-header'>
          | DESCRIPTION |
        </div>
        <div className='project-description-text'>
          The assignment was to use vanilla JavaScript to make Axios calls that retrieve data from an external API and append it to the DOM. Find That Footy [Player]! is an app that can search a soccer player by name or return a player card via the random player generator button.
        </div>
        <img src={FindThatFootyPlayer}
          className='project-screenshot'
          alt='landing page for Find That Footy Player app'
          onClick={() => window.open('https://sheevashab.github.io/Find-That-Footy-Player/', '_blank')}
        />
        <div className='project-resources-header'>
          | TECH STACK |
        </div>
        <div className='project-resources-text'>
          HTML, JavaScript, CSS, Axios
        </div>
      </div>
      <div className='project-scroll-text'>
        | KEEP CALM AND SCROLL ON |
      </div>
    </section>
  )
}
