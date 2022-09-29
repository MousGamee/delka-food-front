
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { AppBar, Box, IconButton, Toolbar, Typography, } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant='regular' sx={{
                backgroundColor: '#8e4e4E',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Stack direction={'row'} spacing={1} sx={{
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        height: 50,
                        objectFit: 'contain'
                    }}>
                        <img src='./images/logo-white.png' className='logo' />
                    </Box>
                    <Typography variant='h5' component={'h1'}>Mon site</Typography>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <Link>Acceuil</Link>
                    <Link>Acceuil</Link>
                    <Link>Acceuil</Link>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar