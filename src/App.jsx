import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Header from './components/Header';
import FileDisplay from "./components/FileDisplay";
import SubmitFile from './pages/SubmitFile';
import Search from './components/Search';
import Footer from './components/Footer';
import Donate from './pages/Donate';



const App = () => {
  return (
    <HelmetProvider>
    <div className='flex flex-col h-screen '>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/filedisplay/:id" element={<FileDisplay />} />
              
              <Route path="/submitfile" element={<SubmitFile/>} />
              <Route path="/search" element={<Search/>} />
              <Route path='/donate' element={<Donate/>}/>
            </Routes>
            <Footer/>
    </div>
    </HelmetProvider>
  );
};

export default App;
