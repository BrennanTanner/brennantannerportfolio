import * as React from 'react';
import {
   Button,
   Stack,
   Box,
   Typography,
   Container,
   Avatar,
} from '@mui/material';
import image from '../assets/space-w-alpha.png';
import pfp from '../assets/pfp-small.png';
export default function Introduction() {
   return (
      <Box
         sx={{
            display: 'flex',
            bgcolor: 'background.paper',
            pt: 8,
            pb: 10,
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
         }}
      >
         <Container data-aos='zoom-y-out' maxWidth='sm' sx={{ pt: 20 }}>
            <Stack direction='row' spacing={2}>
               <Avatar
                  alt='Brennan Tanner'
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
                  BRENNAN TANNER🐢
               </Typography>
            </Stack>
            <Typography
               variant='h5'
               align='left'
               data-aos='fade-up'
               data-aos-delay='1500'
            > <br/> &#123; FULL STACK DEVELOPER, UI/UX DESIGNER &#125;</Typography>
            <Typography
               variant='h7'
               align='left'
               color='text.secondary'
               paragraph
               data-aos='fade-up'
               data-aos-delay='1500'
            >
                As a true renaissance man of the web, I always focus on being a team-player, a hardworker, and a continual student of web technologies. Some would say that my spirit animal is a Tortoise because I love lettuce and I have a very strong back.
            </Typography>
            <Stack
               sx={{ pt: 4 }}
               direction='row'
               spacing={2}
               justifyContent='left'
               data-aos='fade-up'
               data-aos-delay='3000'
            >
               <Button variant='contained'>MORE</Button>
               <Button variant='outlined'>PRINT CV</Button>
            </Stack>
         </Container>
      </Box>
   );
}
