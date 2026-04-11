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
            "The Beacon is a simple messaging service. Users can add friends, create groups, and do one simple task: light their beacon. This notifies the group that a beacon has been lit, and they can light theirs in response.",
         url: 'https://www.lightthebeacon.app/',
         github: 'https://github.com/BrennanTanner/The-Beacon-supabase-nextjs',
      },
      {
         id: 2,
         title: 'Slice Cube',
         description:
            "A Godot game built entirely from scratch for a game jam in 1 week. Slice and dice your way through cubes in this fun, fast-paced game.",
         url: 'https://ggmg.itch.io/slice-cube',
         github: null,
      },
      {
         id: 3,
         title: 'BITS - Beef Inventory Tracking System',
         description:
            "Home-grown enterprise software with a wide suite of tools for managing data at Riverbend Meats and other beef plants. Built with C#, Blazor, and .NET. Handles inventory, order management, harvest data capture, EDI communication, FTP and REST API integrations. Includes a dashboard application, handheld scanner Telnet software, and fulfillment and scale applications.",
         url: null,
         github: null,
      },
      {
         id: 4,
         title: 'Riverbend Ranch - Shopify',
         description:
            "E-commerce development for Riverbend Ranch on Shopify. Liquid theme customization, custom applications, and checkout UI/functions extensions.",
         url: 'https://riverbendranch.com',
         github: null,
      },
   ];

   const posts = PostItems.map((item) => {
      return (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: '100%' }} className='no-print'>
               {item.url ? (
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
               ) : (
                  <CardContent>
                     <Typography gutterBottom variant='h5'>
                        {item.title}
                     </Typography>
                     <Typography variant='body2' color='text.secondary'>
                        {item.description}
                     </Typography>
                     <Typography variant='caption' color='text.secondary' sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}>
                        Private software — no public links available
                     </Typography>
                  </CardContent>
               )}
               {item.github && (
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
               )}
            </Card>
            <Typography className='print-only' variant='h5'>
               {item.title}
            </Typography>
            {item.url && (
               <Typography className='print-only'>
                  Project: <i className='print-inline'>{item.url}</i>
               </Typography>
            )}
            {item.github && (
               <Typography className='print-only'>
                  Github: <i className='print-inline'>{item.github}</i>
               </Typography>
            )}
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
