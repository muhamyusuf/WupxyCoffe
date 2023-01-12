import React from 'react'
import './App.css';
import { Navbar, Header, Brand, OurService, Contact} from './components/export_components';

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Header/>
        <Brand/>
        <OurService/>
        <Contact/>
    </div>
  )
}

export default App
