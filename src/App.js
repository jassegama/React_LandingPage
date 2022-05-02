import React from 'react'
import { Services , Footer, Header, Possibility, About } from './containers'
import { CTA, Navbar } from './components';
import './App.css' 

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
      <About />
     <Services />
    </div>
  )
}

export default App