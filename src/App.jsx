import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Depoiments from './sections/Depoiments'
import Contact from './sections/Contact'
import './index.css'

function App() {

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Depoiments />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
