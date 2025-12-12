import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductViewer from './components/productViewer';
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from 'gsap/all';
import Showcase from './components/Showcase';
import Performance from './components/Performance';
import Features from './components/Features';
import Footer from './components/Footer';
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Features/>
      <Footer/>
    </main>
  )
}

export default App;