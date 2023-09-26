import AboutMe from '../components/AboutMe';
import NavBar from '../components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { dark } from '../styles/dark';
import CssBaseline from '@mui/material/CssBaseline';
import { useCallback } from 'react';
import '../styles/main.css';

const theme = createTheme(dark);

function App() {
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

export default App;
