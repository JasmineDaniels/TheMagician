import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import Play from './components/Play';
import Portal from './components/Portal';
import './css/root.css'
//import SignIn from './components/SignIn'

export default function App (){
    return (
      <>
        <div className='root maximize'>
        <Router>
      <>
        <Header/>
        <AppNavbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/play' element={<Play/>} />
          <Route path='/portal' element={<Portal/>} />
          {/* <Route path='/signin' element={<SignIn/>} /> */}
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
    </div>
    </>
    )
}