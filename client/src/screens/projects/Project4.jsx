import './Projects.css';
import DesignDelights from '../../assets/designdelights.png'

export default function Project4() {
  return (
    <section id='project' className='project-page'>
      <div className='project-container'>
        <img src={DesignDelights}
          className='project-screenshot'
          alt='landing page for Design Delights app'
          href='https://brave-williams-1296d2.netlify.app/'
        />
        <div className='project-description-header'>
          | DESCRIPTION |
        </div>
        <div className='project-description-text'>
          The assignment was to create a React app that makes API calls to Airtable. Design Delights is an interactive design blog where users can add and delete content.
        </div>
        <div className='project-resources-header'>
          | TECH STACK |
        </div>
        <div className='project-resources-text'>
          React, React Router Dom, Axios, Netlify, TailWindCSS, CSS
        </div>
      </div>
      <div className='project-scroll-text'>
        KEEP CALM AND SCROLL ON
      </div>
    </section>
  )
}
