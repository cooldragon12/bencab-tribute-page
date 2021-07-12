import {useState, useEffect} from 'react'
import './App.css';
import {Intro, NavSideBar, Timeline, WorksGallery, Awards} from './main'
// import {SwipeScroll} from './utility'







function MainCompiler() {
  const [scrollState, setScrollState] = useState(0);
  const handleScroll = ()=>{
    const position = window.pageXOffset;
    setScrollState(position)
    console.log(position)
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll,{passive:true});
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  })
  // const container = document.getElementById('main-container');
  // new SwipeScroll(container);
  return (
    <div id="main-container" className="main-container">
      {/* The Commponent to be put */}
      <NavSideBar scroll={scrollState}/>
      <Intro scroll={scrollState}/>
      <Timeline scroll={scrollState}/>
      <WorksGallery scroll={scrollState}/>
      <Awards/>
    </div>
  )
}

export default MainCompiler;
