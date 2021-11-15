import Landing from '../screens/landing/Landing';
import About from '../screens/about/About';
import Portfolio from '../screens/projects/Portfolio';
import Project1Title from '../screens/projects/Project1Title';
import Project1 from '../screens/projects/Project1';
import Project2Title from '../screens/projects/Project2Title';
import Project2 from '../screens/projects/Project2';
import Project3Title from '../screens/projects/Project3Title';
import Project3 from '../screens/projects/Project3';
import Project4Title from '../screens/projects/Project4Title';
import Project4 from '../screens/projects/Project4';
import Contact from '../screens/contact/Contact';

export default function MainContainer() {
  return (
    <div className='main-container'>
      <Landing />
      <About />
      <Portfolio />
      <Project1Title />
      <Project1 />
      <Project2Title />
      <Project2 />
      <Project3Title />
      <Project3 />
      <Project4Title />
      <Project4 />
      <Contact />
    </div>
  )
}
