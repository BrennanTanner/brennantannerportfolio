import * as React from 'react';
import {
   Button,
   Stack,
   Box,
   Typography,
   Container,
   Avatar,
   Divider
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
            <Stack direction='row' spacing={2}>
               <Avatar
                  alt='Brennan Tanner'
                  className='no-print'
                  src={pfp}
                  sx={{ width: 156, height: 156, margin: 'auto 0' }}
                  data-aos='fade-down'
                  data-aos-delay='1500'
               ></Avatar>
               <Typography
                  component='h1'
                  variant='h2'
                  align='left'
                  color='text.primary'
                  gutterBottom
                  data-aos='fade-down'
                  data-aos-delay='1500'
               >
                  BRENNAN TANNER<span className='no-print'>🐢</span>
               </Typography>
            </Stack>
            <hr className='print-only'/>
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
               As a true renaissance man of the web, I always focus on being a
               team-player, a hardworker, and a continual student of web
               technologies. Some would say that my spirit animal is a Tortoise
               because I love lettuce and I have a very strong back.
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
               <Button variant='outlined' onClick={() => {window.print()}}>PRINT CV</Button>
            </Stack>
         </Container>
      </Box>
   );
}
