import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
   AppBar,
   Box,
   Divider,
   Drawer,
   IconButton,
   List,
   ListItem,
   ListItemText,
   ListItemButton,
   Toolbar,
   Typography,
   Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const navigate = useNavigate();
   const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
   };

   const handleNav = (page) => {
      navigate(`/${page}`);
   };

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
         <Typography variant='h6' sx={{ my: 2 }}>
            // BRENNAN TANNER
         </Typography>
         <Divider />
         <List>
            {navItems.map((item) => (
               <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                     <ListItemText primary={item} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

      //add some progress or navagation animations
   return (
      <Box className='no-print' sx={{ display: 'flex' }}>
         <AppBar component='nav' color="transparent" sx={{backdropFilter:"blur(15px)"}}>
            <Toolbar>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  variant='h6'
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  // BRENNAN TANNER
               </Typography>
               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                     <Button href={`/${item}`} key={item} sx={{ color: '#fff' }}>
                        {item}
                     </Button>
                  ))}
               </Box>
            </Toolbar>
         </AppBar>
         <Box component='nav'>
            <Drawer
               container={container}
               variant='temporary'
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
      </Box>
   );
}

export default DrawerAppBar;
