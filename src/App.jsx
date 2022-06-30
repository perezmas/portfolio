import { useState } from 'react'
import logo from './logo.svg'

import { About, Contact, Footer, Header, Resume, Navbar, Projects } from './components';


const App = () => {

  return (
    <div className="min-h-screen">
      <Header />
      <div>
        <Navbar />
      </div>
      <div>
        <Projects />
        <About />
        <Resume />
        <Footer />
      </div>
    </div>
  )
}

export default App
