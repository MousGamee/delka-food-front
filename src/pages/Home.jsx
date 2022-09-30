import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { COLORS } from '../theme/Colors'
import { SIZES } from '../theme/Sizes'

const Home = () => {
  return (
    <Box component={"section"} sx={{
      background: 'url(./images/heroimage.jpg) no-repeat',
      backgroundSize: 'cover',
      minHeight: '500px',
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        background: COLORS.secondary,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        padding: '10px 35px',
        objectFit: 'contain',
        transform: 'translateY(25px)'
      }}>
        <Typography component={'h3'} sx={{
          color: COLORS.white,
          fontWeight: '600',
          fontSize : '1rem',
        }}>Plat du jour</Typography>
      </Box>
      <Box sx={{
        background: COLORS.white,
        padding: "40px 120px",
        borderRadius : SIZES.radius
      }}>
        <Link><Typography component={'h2'} variant="h4">Plakali de Youpogo</Typography></Link>
        <Typography component={'p'} sx={{
          textAlign: 'center',
          color : COLORS.lightGrey,
          fontSize : '.8rem',
          marginTop : SIZES.spacing
        }}>22 Juin 2022</Typography>
      </Box>
    </Box>
  )
}

export default Home