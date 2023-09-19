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
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
                     <BusIcon />
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
                     <LaptopMacIcon />
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
                  Summer 2023 - Now
               </TimelineOppositeContent>
               <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color='primary'>
                     <LaptopMacIcon />
                  </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography color='primary' variant='h6' component='span'>
                     Engineered Labs
                  </Typography>
                  <Typography>Manager of E-commerce</Typography>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos='flip-up' data-aos-delay='150'>
               <TimelineOppositeContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant='h3'>🏃</Typography>{' '}
               </TimelineOppositeContent>
               <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color='primary' variant='outlined'></TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent
                  sx={{ m: 'auto 0' }}
                  align='right'
                  variant='body2'
                  color='text.secondary'
               >
                  We are here
               </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos='flip-up' data-aos-delay='150'>
            <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align='right'
                  variant='body2'
                  color='text.secondary'
               >
                  December 2023
               </TimelineOppositeContent>
              
               <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color='primary' variant='outlined'>
                     <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>
               <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography color='primary' variant='h6' component='span'>
                     Gradute BYU-I
                  </Typography>
                  <Typography>
                     Bachelors of Computer Information Techonology
                     <br /> Majoring in Web Design and Development
                  </Typography>
               </TimelineContent>
            </TimelineItem>
            <TimelineItem data-aos='flip-up' data-aos-delay='150'>
            <TimelineOppositeContent sx={{ py: '12px', px: 2 }}>
                  <Typography color='primary' variant='h6' component='span'>
                     Begin my career as a Web Developer
                  </Typography>
                  <Typography>
                     You could advertise your company here!
                  </Typography>
               </TimelineOppositeContent>
               <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color='primary' variant='outlined'>
                     <ArrowDownIcon />
                  </TimelineDot>
               </TimelineSeparator>
               <TimelineContent sx={{ m: 'auto 0' }}
                  align='right'
                  variant='body2'
                  color='text.secondary'>
               </TimelineContent>
            </TimelineItem>
         </Timeline>
      </Container>
   );
}
