import * as React from 'react';
import {
   Container,
   Typography,
   Button,
   Grid,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
} from '@mui/material';

export default function Projects() {
   const PostItems = [
      {
         id: 1,
         title: 'Proffesional Network App',
         description: 'A large-scale social-media app focused on networking, much like linked in. The frontend made using React with MUI. The backend is built using Node.js, express, and MongoDB',
         url: '',
         // image: Html5,
      },
      {
         id: 2,
         title: 'Anna Abby Studios',
         description: 'A portfolio site made on commision for an artist. The frontend is built with vanilla HTML, CSS, and JS. The backend is using Node.js, Express, and MongoDB.',
         url: '',
         // image: Css,
      },
      {
         id: 3,
         title: 'To-do manager',
         description: 'A project done to learn Ruby on rails and sql databases. It was an interesting project, since I needed to set up a linux enviorment and the essentials of Ruby. Bootstrap for styling.',
         url: '',
         // image: Css,
      },
      {
         id: 4,
         title: 'CRM Solutions',
         description: 'A simple static site made on commision for a small customer relations company.',
         url: '',
         //image: Js,
      },
      {
         id: 5,
         title: 'How long is it?',
         description: 'Early website made while experimenting with API. This site uses vanilla HTML, CSS, and JS with the movie database API.',
         url: '',
         //image: Reactsvg,
      },
      {
         id: 6,
         title: 'Behance Portfolio',
         description: 'My behance portfolio with graphic design projects if you are interested. New graphic design projects will be posted on this site.',
         url: '',
         // image: Vite,
      },
   ];

   const posts = PostItems.map((item) => {
      return (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: '100%' }}>
               <CardActionArea>
                  <CardMedia
                     component='img'
                     height='140'
                     //image='/static/images/cards/contemplative-reptile.jpg'
                     alt='green iguana'
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='div'>
                        {item.title}
                     </Typography>
                     <Typography variant='body2' color='text.secondary'>
                       {item.description}
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         </Grid>
      );
   });

   return (
      <Container sx={{ py: 8 }} maxWidth='lg'>
         <Typography variant='h3' sx={{ pb: 4 }}>
            PROJECTS
         </Typography>
         <Grid container spacing={4}>
            {posts}
         </Grid>
      </Container>
   );
}
