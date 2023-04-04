import * as React from 'react';
import { Button, Stack, Box, Typography, Container } from '@mui/material';
import image from '../assets/space-w-alpha.png';
export default function Introduction() {
   return (
         <Box
            sx={{
               bgcolor: 'background.paper',
               pt: 8,
               pb: 6,
               backgroundImage: `url(${image})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: 'bottom',
            }}
         >
            <Container maxWidth='sm'>
               <Typography
                  component='h1'
                  variant='h2'
                  align='left'
                  color='text.primary'
                  gutterBottom
               >
                  FULLSTACK WEB DEVELOPER
               </Typography>
               <Typography
                  variant='h5'
                  align='left'
                  color='text.secondary'
                  paragraph
               >
                  Something short and leading about the collection below—its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks don&apos;t simply skip over it entirely.
               </Typography>
               <Stack
                  sx={{ pt: 4 }}
                  direction='row'
                  spacing={2}
                  justifyContent='left'
               >
                  <Button variant='contained'>MORE</Button>
                  <Button variant='outlined'>PRINT CV</Button>
               </Stack>
            </Container>
         </Box>

   );
}
