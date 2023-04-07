import * as React from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import Adobe from '../assets/Adobe.svg';
import Babel from '../assets/Babel.svg';
import Css from '../assets/Css.svg';
import Figma from '../assets/Figma.svg';
import Html5 from '../assets/Html.svg';
import Js from '../assets/Js.svg';
import Mongo from '../assets/Mongo.svg';
import Nodejs from '../assets/Node.svg';
import Reactsvg from '../assets/React.svg';
import Vite from '../assets/Vite.svg';
import Rails from '../assets/Rails.svg';
import Github from '../assets/Github.svg';

export default function Skills() {
   const SkillItems = [
      {
         id: 1,
         title: 'HTML',
         image: Html5,
      },
      {
         id: 2,
         title: 'CSS',
         image: Css,
      },
      {
         id: 3,
         title: 'Js',
         image: Js,
      },
      {
         id: 4,
         title: 'React',
         image: Reactsvg,
      },
      {
         id: 5,
         title: 'Vite',
         image: Vite,
      },
      {
         id: 6,
         title: 'Babel',
         image: Babel,
      },
      {
         id: 7,
         title: 'MongoDB',
         image: Mongo,
      },
      {
         id: 8,
         title: 'Node.js',
         image: Nodejs,
      },
      {
         id: 9,
         title: 'Figma',
         image: Figma,
      },
      {
         id: 10,
         title: 'Adobe',
         image: Adobe,
      },
      {
         id: 11,
         title: 'GitHub',
         image: Github,
      },
      {
         id: 12,
         title: 'Ruby on Rails',
         image: Rails,
      },
   ];

   const skills = SkillItems.map((item) => {
      return (
         <Grid item key={item.id} xs={6} sm={4} md={2}>
            <Card
               className='no-print'
               sx={{
                  height: '100%',
                  padding: '15px',
                  display: 'flex',
                  flexDirection: 'column',
               }}
            >
               <CardMedia component='img' image={item.image} alt={item.title} />
            </Card>
            <Typography className='print-only'>{item.title}</Typography>
         </Grid>
      );
   });

   return (
      <Container sx={{ py: 20 }} maxWidth='lg' className='print-style'>
         <Typography
            variant='h3'
            sx={{ pb: 4 }}
            data-aos='fade-right'
            data-aos-delay='150'
         >
            <span className='no-print'>// </span>SKILLS
         </Typography>
         <Grid container spacing={4} data-aos='fade-left' data-aos-delay='300'>
            {skills}
         </Grid>
      </Container>
   );
}
