import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import campfireImage from '../assets/campfire.png';

function Copyright() {
   return (
      <Typography variant='body2' color='text.secondary' align='center'>
         {'Copyright © '}
         <Link color='inherit' href='https://brennantanner.com/'>
            Brennan Tanner
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

export default function Footer() {
   return (
      <Box className='no-print' component='footer'>
         <Typography variant='h6' align='center' gutterBottom>

         </Typography>
         <Typography
            variant='subtitle1'
            align='center'
            color='text.secondary'
            component='p'
            data-aos='fade'
            data-aos-delay='300'
         >
            There is nothing like sitting around a campfire getting to know someone.<br/>Thanks for stopping by!
         </Typography>
          <Box sx={{pb: 40}}>

          </Box>
          <Copyright />
         <Box
            sx={{
               backgroundImage: `url(${campfireImage})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'contain',
               backgroundPosition: 'bottom',
               height: '100%',
               width: '100vw',
               maxWidth: '100%',
               position: 'absolute',
               bottom: '0',
               zIndex: '-2',
            }}
         ></Box>
      </Box>
   );
}
