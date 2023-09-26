import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import './styles/main.css';
import AOS from 'aos';
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
   const location = useLocation();

   useEffect(() => {
      AOS.init({
         once: true,
         disable: 'phone',
         duration: 700,
         easing: 'ease-out-cubic',
      });
   });

   useEffect(() => {
      document.querySelector('html').style.scrollBehavior = 'auto';
      window.scroll({ top: 0 });
      document.querySelector('html').style.scrollBehavior = '';
   }, [location.pathname]); // triggered on route change

   return (
      <>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={ <Navigate to="/" /> }/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
         </Routes>
      </>
   );
}

export default App;
