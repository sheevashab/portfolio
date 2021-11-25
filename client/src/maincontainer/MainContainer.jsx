import Landing from '../screens/landing/Landing';
import About from '../screens/about/About';
import Portfolio from '../screens/projects/Portfolio';
import Project1 from '../screens/projects/Project1';
import Project2 from '../screens/projects/Project2';
import Project3 from '../screens/projects/Project3';
import Project4 from '../screens/projects/Project4';
import Contact from '../screens/contact/Contact';

export default function MainContainer() {
  return (
    <div className='main-container'>
      <Landing />
      <About />
      <Portfolio />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Contact />
    </div>
  )
}
