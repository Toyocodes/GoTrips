import { useState } from 'react'
// import TopBar from './Components/TopBar'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import CarouselSection from './Components/CarouselSection'
import DestinationFilter from './Components/DestinationFilter'
// import About from './Components/About'
import Offer from './Components/Offer'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'


function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <CarouselSection />
      <DestinationFilter/>
      <Offer/>
      {/* <About /> */}
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
