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
import Github from '../assets/Github-text.svg';
import pronet from '../assets/pronet.jpg';
import anna from '../assets/anna.jpg';
import todo from '../assets/pronet.jpg';
import crm from '../assets/crm.jpg';
import Ux from '../assets/UX.jpg';
import behance from '../assets/behance.jpg';
import { Link } from 'react-router-dom';

export default function Projects() {
   const PostItems = [
      {
         id: 1,
         title: 'Proffesional Network App',
         description:
            'A large-scale social-media app focused on networking, much like linked in. The frontend made using React with MUI. The backend is built using Node.js, express, and MongoDB. Mobile view is under construction.',
         url: 'https://professional-network-frontend.vercel.app',
         github:
            'https://github.com/byui-wdd430/professional-network-BrennanTanner',
         image: pronet,
      },
      {
         id: 2,
         title: 'Anna Abby Studios',
         description:
            'A portfolio site made on commision for an artist. The frontend is built with vanilla HTML, CSS, and JS. The backend is using Node.js, Express, and MongoDB.',
         url: 'https://annaabbystudios.com/',
         github: 'https://github.com/BrennanTanner/annaabbystudios',
         image: anna,
      },
      {
         id: 3,
         title: 'To-do manager',
         description:
            'A project done to learn Ruby on rails and sql databases. It was an interesting project, since I needed to set up a linux enviorment and the essentials of Ruby. Bootstrap for styling.',
         url: '',
         github: 'https://github.com/BrennanTanner/todoManager',
         image: todo,
      },
      {
         id: 4,
         title: 'CRM Solutions',
         description:
            'A simple static site made on commision for a small customer relations company. It is a brochure with an email function. ',
         url: '',
         github: 'https://github.com/BrennanTanner/CRM',
         image: crm,
      },
      {
         id: 5,
         title: 'UX Case Study',
         description:
            'Here is a case study presentation from a UX study done for the family search app using Figma. This UX study is only a proof of concept.',
         url: 'https://brennantanner.github.io/brennantanner/ART337R/Project3/',
         github: 'https://brennantanner.github.io/brennantanner/',
         image: Ux,
      },
      {
         id: 6,
         title: 'Behance Portfolio',
         description:
            'My behance portfolio with graphic design projects if you are interested. New graphic design projects will be posted on this site.',
         url: 'https://www.behance.net/brennantanner',
         github: '',
         image: behance,
      },
   ];

   const posts = PostItems.map((item) => {
      return (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: '100%' }} className='no-print'>
               <CardActionArea href={item.url} target='_blank'>
                  <CardMedia
                     component='img'
                     height='140'
                     image={item.image}
                     alt={item.title}
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h5'>
                        {item.title}
                     </Typography>
                     <Typography variant='body2' color='text.secondary'>
                        {item.description}
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions>
                  <Button
                     size='small'
                     variant='outlined'
                     color='primary'
                     href={item.github}
                     target='_blank'
                  >
                     <CardMedia
                        component='img'
                        image={Github}
                        alt='GitHub link'
                        sx={{ width: '75px', padding: '10px' }}
                     />
                  </Button>
               </CardActions>
            </Card>
            <Typography className='print-only' variant='h5'>
               {item.title}
            </Typography>
            <Typography className='print-only'>
               Project: <i className='print-inline'>{item.url}</i>
            </Typography>
            <Typography className='print-only'>
               Github: <i className='print-inline'>{item.github}</i>
            </Typography>
            <Typography className='print-only'>{item.description}</Typography>
         </Grid>
      );
   });

   return (
      <Container sx={{ py: 8 }} maxWidth='lg' className='print-style'>
         <Typography
            variant='h3'
            sx={{ pb: 4 }}
            data-aos='fade-right'
            data-aos-delay='150'
         >
            <span className='no-print'>// </span>PROJECTS
         </Typography>
         <Grid
            container
            spacing={4}
            data-aos='fade-left'
            data-aos-delay='300'
         >
            {posts}
         </Grid>
      </Container>
   );
}
