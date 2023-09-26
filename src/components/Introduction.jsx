import * as React from 'react';
import {
   Button,
   Stack,
   Box,
   Typography,
   Container,
   Avatar,
   Grid,
} from '@mui/material';
import starsImage from '../assets/space-w-alpha.png';
import pfp from '../assets/pfp-small.png';
export default function Introduction() {
   return (
      <Box
         className='print-style'
         sx={{
            display: 'flex',
            bgcolor: 'background.paper',
            pt: 8,
            pb: 10,
            backgroundImage: `url(${starsImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
         }}
      >
         <Container data-aos='zoom-y-out' maxWidth='sm' sx={{ pt: 20 }}>
            <Grid container columns={{ xs: 4, sm: 8 }}>
               <Grid item xs={3}>
                  <Avatar
                     alt='Brennan Tanner'
                     className='no-print'
                     src={pfp}
                     sx={{ width: 156, height: 156, margin: 'auto 0' }}
                     data-aos='fade-down'
                     data-aos-delay='1500'
                  ></Avatar>
               </Grid>
               <Grid item xs={5}>
                  <Typography
                     item
                     component='h1'
                     variant='h2'
                     align='left'
                     color='text.primary'
                     gutterBottom
                     data-aos='fade-down'
                     data-aos-delay='1500'
                  >
                     BRENNAN TANNER
                     <span className='no-print'></span>
                  </Typography>
               </Grid>
            </Grid>
            <hr className='print-only' />
            <Typography
               variant='h5'
               align='left'
               data-aos='fade-up'
               data-aos-delay='1500'
            >
               <br /> <span className='no-print'>&#123;</span> FULL STACK
               DEVELOPER, UI/UX DESIGNER{' '}
               <span className='no-print'>&#125;</span>
            </Typography>
            <Typography variant='subtitle1' className='print-only'>
               Email: brenntanner@gmail.com
               <br />
               Phone: 208-477-3417
            </Typography>
            <Typography
               variant='h7'
               align='left'
               color='text.secondary'
               paragraph
               data-aos='fade-up'
               data-aos-delay='1500'
            >
               Known for my diligent work ethic, creative problem-solving, and adventurous spirit. I am a true digital explorer and a constant student of web technologies.<br/><br/>
               
               Welcome to my portfolio — a launchpad to explore my work and understand my process for development. 
            </Typography>
            <Stack
               sx={{ pt: 4 }}
               className='no-print'
               direction='row'
               spacing={2}
               justifyContent='left'
               data-aos='flip-down'
               data-aos-delay='3000'
            >
               <Button variant='contained'>MORE</Button>
               <Button
                  variant='outlined'
                  onClick={() => {
                     window.print();
                  }}
               >
                  PRINT CV
               </Button>
            </Stack>
         </Container>
      </Box>
   );
}
