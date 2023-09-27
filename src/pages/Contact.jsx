import AboutMe from '../components/AboutMe';
import NavBar from '../components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { dark } from '../styles/dark';
import CssBaseline from '@mui/material/CssBaseline';
import { useCallback } from 'react';
import '../styles/main.css';

const theme = createTheme(dark);

function Contact() {
   const particlesInit = useCallback(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
   }, []);

   const particlesLoaded = useCallback(async (container) => {
      //console.log(container);
   }, []);

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <div className='App'>
            <NavBar />
            <AboutMe/>
         </div>
      </ThemeProvider>
   );
}

export default Contact;