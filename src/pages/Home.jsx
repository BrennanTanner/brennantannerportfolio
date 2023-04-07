import Intro from '../components/Introduction';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { dark } from '../styles/dark';
import CssBaseline from '@mui/material/CssBaseline';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import '../styles/main.css';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import References from '../components/References';

const theme = createTheme(dark);

function App() {
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
         <Particles
            className='no-print'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            style={{}}
            options={{
               background: {
                  color: {
                     value: '#bada55',
                  },
                  opacity: 0,
                  position: 'center',
                  size: 'cover',
               },
               fullScreen: {
                  enable: false,
                  zIndex: -1, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
               },
               fpsLimit: 60,
            
               particles: {
                  number: {
                     value: 10,
                     density: {
                        enable: true,
                        value_area: 800,
                     },
                  },
                  color: {
                     value: ['#bf5e14', '#f0a465'],
                     animation: {
                        enable: true,
                        speed: -0.5,
                        sync: true,
                     },
                  },
                  shape: {
                     type: 'circle',
                  },
                  opacity: {
                     value: 0.5,
                     animation: {
                        enable: true,
                        speed: 0.5,
                        minimumValue: 0,
                        sync: false,
                     },
                  },
                  size: {
                     value: 5,
                     random: { enable: true, minimumValue: 1 },
                     animation: {
                        enable: false,
                        speed: 5,
                        minimumValue: 1,
                        sync: false,
                     },
                  },
                  life: {
                     duration: {
                        value: 80,
                     },
                     time: 10,
                     delayTime: 10,
                     count: 1,
                  },
                  move: {
                     angle: {
                        value: 45,
                        offset: 0,
                     },
                     enable: true,
                     gravity: {
                        enable: false,
                        acceleration: 0.5,
                     },
                     speed: 2,
                     direction: 'top',
                     random: false,
                     straight: false,
                     size: true,
                     outModes: {
                        default: 'destroy',
                        bottom: 'none',
                     },
                     attract: {
                        enable: false,
                        distance: 300,
                        rotate: {
                           x: 600,
                           y: 1200,
                        },
                     },
                  },
               },
               interactivity: {
                  events: {
                      onClick: {
                          enable: true,
                          mode: "repulse",
                      },
                      onHover: {
                          enable: true,
                          mode: "attract",
                      },
                      resize: true,
                  },
                  modes: {
                      attract: {
                        distance	:	200,
                        duration	:	0.4,
                        easing	:	'ease-out-quad',
                        factor	:	1,
                        maxSpeed	:	50,
                        speed	:	1.5,
                        
                      },
                      repulse: {
                          distance: 100,
                          duration: .5,
                      },
                  },
              },
               detectRetina: true,
               emitters: {
                  direction: 'top',
                  rate: {
                     quantity: 1,
                     delay: 0.5,
                  },
                  size: {
                     width: 5,
                     height: 5,
                  },
                  position: {
                     x: 50,
                     y: 94,
                  },
               },
            }}
         />
         <CssBaseline />
         <div className='App'>
            <NavBar />
            <Intro
               sx={{
                  ml: 0,
               }}
            />
            <Skills />
            <Projects />
            <Experience />
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default App;
