
import Navbar from '../src/Components/Navbar/Navbar'
import Hero from '../src/Components/Hero/Hero'
import Solution from '../src/Components/Solution/Solution'
import About from '../src/Components/About/About'
import TeamExperts from './Components/Team Experts/Teamexpert'
import GreenMovement from './Components/Greenmovement/Greenmovement'
import Faqpage from './Components/Faqpage/Faqpage'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/contact'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solution />
      <About />
      <TeamExperts />
      <GreenMovement />
      <Faqpage />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
