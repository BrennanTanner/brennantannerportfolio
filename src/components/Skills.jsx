import * as React from 'react';
import { useState } from 'react';
import {
   Container,
   Typography,
   Grid,
   Card,
   CardMedia,
   ToggleButton,
   ToggleButtonGroup,
   Stack,
   Grow,
} from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import CSharp from '../assets/CSharp.svg';
import DotNet from '../assets/DotNet.svg';
import SqlServer from '../assets/SqlServer.svg';
import Js from '../assets/Js.svg';
import Shopify from '../assets/Shopify.svg';
import IIS from '../assets/IIS.svg';
import Radzen from '../assets/Radzen.svg';
import Reactsvg from '../assets/React.svg';
import Nodejs from '../assets/Node.svg';

export default function Skills() {
   const SkillItems = [
      {
         id: 1,
         title: 'C#',
         image: CSharp,
         tag: 'backend',
      },
      {
         id: 2,
         title: '.NET',
         image: DotNet,
         tag: 'backend',
      },
      {
         id: 3,
         title: 'SQL Server',
         image: SqlServer,
         tag: 'backend',
      },
      {
         id: 4,
         title: 'JavaScript',
         image: Js,
         tag: 'frontend',
      },
      {
         id: 5,
         title: 'Shopify',
         image: Shopify,
         tag: 'frontend',
      },
      {
         id: 6,
         title: 'Radzen',
         image: Radzen,
         tag: 'frontend',
      },
      {
         id: 7,
         title: 'React',
         image: Reactsvg,
         tag: 'frontend',
      },
      {
         id: 8,
         title: 'Node.js',
         image: Nodejs,
         tag: 'backend',
      },
   ];

   const [category, setCategory] = useState('frontend');

   const handleChange = (event, newCategory) => {
         setCategory(newCategory);
   };

   const skills = SkillItems.map((item) => {
      return (
         <Grow
            in={category == item.tag}
            {...(category == item.tag ? { timeout: 1000 } : {})}
            key={item.id}
         >
            <Grid item key={item.id} xs={6} sm={4} md={2}>
               <Card
                  //data-aos='flip-down'
                  className='no-print'
                  sx={{
                     height: '100%',
                     padding: '15px',
                     display: 'flex',
                     flexDirection: 'column',
                  }}
               >
                  <CardMedia
                     component='img'
                     image={item.image}
                     alt={item.title}
                  />
               </Card>
            </Grid>
         </Grow>
      );
   });

   skills.sort((a, b) => {
      const itemA = a.props.in
      const itemB = b.props.in
      if (itemA < itemB) {
        return 1;
      }
      if (itemA > itemB) {
        return -1;
      }
      // items must be equal
      return 0;
   })

   const printSkills = SkillItems.map((item) => {
      return (
         <Typography key={item.id} className='print-only'>{item.title},&nbsp;</Typography>
      );
   });

   return (
      <Container sx={{ py: 20 }} className='print-style'>
         <Typography
            variant='h3'
            sx={{ pb: 4 }}
            data-aos='fade-right'
            data-aos-delay='150'
         >
            <span className='no-print'>// </span>SKILLS
         </Typography>
         <ToggleButtonGroup
            color='primary'
            className='no-print'
            value={category}
            sx={{ pb: 5 }}
            data-aos='fade-left'
            exclusive
            onChange={handleChange}
            aria-label='Platform'
         >
            <ToggleButton value='frontend'>Frontend</ToggleButton>
            <ToggleButton value='backend'>Backend</ToggleButton>
         </ToggleButtonGroup>
         <Stack direction='row' spacing={2}>
            {printSkills}
         </Stack>
         <TransitionGroup>
            <Grid
               container
               spacing={4}
               data-aos='fade-left'
               data-aos-delay='300'
            >
               {skills}
               {!category && (
                  <div style={{ margin: '0 30%', position: 'absolute' }}>
                     <h1 style={{ fontSize: '60pt' }} data-aos='flip-up'>
                        🦧
                     </h1>
                     <h3 data-aos='fade-down'>Oo oo aa aa</h3>
                  </div>
               )}
            </Grid>
         </TransitionGroup>
      </Container>
   );
}
