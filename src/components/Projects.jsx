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

export default function Projects() {
   const PostItems = [
      {
         id: 1,
         title: 'The Beacon App',
         description:
            "The beacon is a simple messaging service. Users can add friends, create groups, and do one simple task: light their beacon. This notifies the group that a beacon has been lit, and they can light theirs in response.",
         url: 'https://www.lightthebeacon.app/',
         github: 'https://github.com/BrennanTanner/The-Beacon-supabase-nextjs',
      },
      {
         id: 2,
         title: 'Big Mo\'s Delivery',
         description:
            "Big Mo's is a browser based game that I built for a game jam. I built this game in 3 weeks using Javascript tools like Phaser 3. I also updated an abandoned isometric-view plugin, which ate up a lot of my time. But I am proud of how it turned out.",
         url: 'https://ggmg.itch.io/big-mos-delivery',
         github: 'https://github.com/BrennanTanner/Mode-Game',
      },
      {
         id: 3,
         title: 'Shotgun Dave',
         description:
            "Shotgun Dave is a simple videogame built in the browser. It uses the phaser engine and custome artwork done by me. This project was my first experience learning game development and was one of the hardest projects I have ever done.",
         url: 'https://shotgundave.netlify.app',
         github: 'https://github.com/BrennanTanner/Shotgun-Game',
      },
      {
         id: 4,
         title: 'Bear Grease E-commerce',
         description:
            '[Broken, Needs Update] \nAn ongoing project of mine. Styling is minimal right now as I work on functionality. It uses the Printify API, Firebase Functions, and React (I am currently planning to remake this project with other tools)',
         url: 'https://bear-grease.web.app',
         github: 'https://github.com/BrennanTanner/bear-grease',
      },
      {
         id: 5,
         title: 'Proffesional Network App',
         description:
            'A large-scale social-media app focused on networking, much like linked in. The frontend made using React with MUI. The backend is built using Node.js, express, and MongoDB. Mobile view is under construction.',
         url: 'https://professional-network-frontend.vercel.app',
         github:
            'https://github.com/byui-wdd430/professional-network-BrennanTanner',
      },
      {
         id: 6,
         title: 'Anna Abby Studios',
         description:
            '[Broken, Needs Update] \n A portfolio site made on commision for an artist. This is one of my first big projects in web development. The frontend is built with vanilla HTML, CSS, and JS. The backend is using Node.js, Express, and MongoDB.',
         url: 'https://annaabbystudios.com/',
         github: 'https://github.com/BrennanTanner/annaabbystudios',
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
                     src={`https://api.microlink.io?url=${item.url}&screenshot=true&meta=false&embed=screenshot.url`}
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
         <Grid container spacing={4} data-aos='fade-left' data-aos-delay='300'>
            {posts}
         </Grid>
      </Container>
   );
}
