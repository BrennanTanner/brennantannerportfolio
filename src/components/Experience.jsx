import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BusIcon from '@mui/icons-material/DirectionsBus';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Experience() {
   //add popover to timeline items

   return (
      <Container maxWidth='lg' className='print-style'>
         <Timeline position='alternate' sx={{ py: 20 }} maxWidth='lg'>
            <Typography
               variant='h3'
               sx={{ pb: 4 }}
               data-aos='fade-right'
               data-aos-delay='150'
            >
               <span className='no-print'>// </span>EXPERIENCE
            </Typography>
            <Box className='experiences'>
               <TimelineItem data-aos='flip-up' data-aos-delay='150'>
                  <TimelineOppositeContent
                     sx={{ m: 'auto 0' }}
                     align='right'
                     variant='body2'
                     color='text.secondary'
                  >
                     2018 - 2022
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineDot color='primary'>
                        <BusIcon className='no-print' />
                     </TimelineDot>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography color='primary' variant='h6' component='span'>
                        Holland America Princess
                     </Typography>
                     <Typography>CDL driver guide</Typography>
                  </TimelineContent>
               </TimelineItem>
               <TimelineItem data-aos='flip-up' data-aos-delay='150'>
                  <TimelineOppositeContent sx={{ py: '12px', px: 2 }}>
                     <Typography color='primary' variant='h6' component='span'>
                        San Antonio Hospital, CA
                     </Typography>
                     <Typography>Web development internship</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineConnector />
                     <TimelineDot color='primary'>
                        <LaptopMacIcon className='no-print' />
                     </TimelineDot>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                     sx={{ m: 'auto 0' }}
                     align='right'
                     variant='body2'
                     color='text.secondary'
                  >
                     Summer 2022
                  </TimelineContent>
               </TimelineItem>
               <TimelineItem data-aos='flip-up' data-aos-delay='150'>
                  <TimelineOppositeContent
                     sx={{ m: 'auto 0' }}
                     align='right'
                     variant='body2'
                     color='text.secondary'
                  >
                     Summer 2023 - March 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineConnector />
                     <TimelineDot color='primary'>
                        <LaptopMacIcon className='no-print' />
                     </TimelineDot>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                     <Typography color='primary' variant='h6' component='span'>
                        Engineered Labs
                     </Typography>
                     <Typography>
                        Web developer & Manager of E-commerce
                     </Typography>
                  </TimelineContent>
               </TimelineItem>

               <TimelineItem
                  className='no-print'
                  data-aos='flip-up'
                  data-aos-delay='150'
               >
                  <TimelineOppositeContent sx={{ py: '12px', px: 2 }}>
                     <Typography color='primary' variant='h6' component='span'>
                        Gradute BYU-I
                     </Typography>
                     <Typography>
                        Bachelor's of Computer Information Technology
                        <br /> Majoring in Web Design and Development
                     </Typography>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                     <TimelineConnector />
                     <TimelineDot color='primary' variant='filled'>
                        <SchoolIcon className='no-print' />
                     </TimelineDot>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                     sx={{ m: 'auto 0' }}
                     align='right'
                     variant='body2'
                     color='text.secondary'
                  >
                     December 2023
                  </TimelineContent>
               </TimelineItem>
               <TimelineItem
                  className='no-print'
                  data-aos='flip-up'
                  data-aos-delay='150'
               >
                  <TimelineOppositeContent sx={{ py: '12px', px: 2 }}>
                     <Typography color='primary' variant='h6' component='span'>
                        Riverbend Meats LLC
                     </Typography>
                     <Typography>Junior Software Developer</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                     <TimelineConnector />
                     <TimelineDot color='primary' sx={{ fontSize: '1.2rem', p: '4px' }}>
                        <span className='no-print' role='img' aria-label='cow'>🐄</span>
                     </TimelineDot>
                     <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                     sx={{ m: 'auto 0' }}
                     align='right'
                     variant='body2'
                     color='text.secondary'
                  >
                     March 2024 - Now
                  </TimelineContent>
               </TimelineItem>
            </Box>
         </Timeline>
      </Container>
   );
}
