import './Projects.css'

export default function Project1() {
  return (
    <section id='project-one' className='project-one-page'>
      <div className='project-container'>
        <img src=''
          className='project-screenshot'
          alt='landing page for Hogwarts Hopefuls app' />
        <div className='project-description-header'>
          | DESCRIPTION |
        </div>
        <div className='project-description-text'>
          For this project
        </div>
        <div className='project-resources-header'>
          | LANGUAGES, LIBRARIES, FRAMEWORKS |
        </div>
        <div className='project-resources-text'>
          React, Ruby...
        </div>
      </div>
      <div className='project-scroll-text'>
        KEEP CALM AND SCROLL ON
      </div>
    </section>
  )
}
