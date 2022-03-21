import './App.css';
import About from './components/about/about';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react';
import Loader from './components/loader/loader'

import './locomotive-scroll.css'
import Ticker from './components/ticker / ticker';

function App() {

  const locomotive = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          lerp: 0.085
        }
      }
  containerRef={locomotive} >

    
    
    <div data-scroll-container className="App" ref={locomotive}>
      <Loader />
      <Header />
      <Hero />
      <Ticker text="Trey Hardin is a Creative Director based in New York City." />
      <About />
    </div>

  </LocomotiveScrollProvider>
  );
}

export default App;
