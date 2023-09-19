import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutMe = () => {

  return (
    <Box>
      <Typography variant="h1">About Me</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src= 'https://source.unsplash.com/random' alt="My image" sx={{ width: 100, height: 100, borderRadius: '50%' }} />
        <Box sx={{ marginLeft: '2rem' }}>
          <Typography variant="body1">
            Hi, my name is [your name] and I'm a [your profession]. I'm passionate about [your interests] and I'm always looking for new ways to learn and grow.
          </Typography>
          <Typography variant="body1">
            I'm currently working on [your current project] and I'm really excited about the possibilities it offers. I'm also interested in [other interests].
          </Typography>
          <Typography variant="body1">
            In my free time, I enjoy [your hobbies]. I'm also a big fan of [your favorite things].
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;