import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StripeBand from './components/StripeBand'
import Facts from './components/Facts'
import About from './components/About'
import Story from './components/Story'
import Sisters from './components/Sisters'
import Jatre from './components/Jatre'
import Gallery from './components/Gallery'
import VideoSection from './components/VideoSection'
import Visit from './components/Visit'
import Footer from './components/Footer'

/**
 * Section order follows a visit: darshan → who she is → how she came →
 * her sisters → the jatre → the album → the road here.
 * Dark bands are inside the sanctum; limewash bands are the walled
 * courtyard, and each one opens with the painted wall stripe.
 */
export default function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <StripeBand />
        {/* <Facts /> */}
        <About />
        <Story />
        <Jatre />
        <Gallery />
        <VideoSection />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
