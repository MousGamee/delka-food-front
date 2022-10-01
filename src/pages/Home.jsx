import { Box, Container, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FoodCard from '../components/home/FoodCard'
import { homeImage } from '../dummyData'
import { COLORS } from '../theme/Colors'
import { SIZES } from '../theme/Sizes'

const Home = () => {
  return (
    // Start hero section
    <>

      <Box component={"section"} sx={{
        background: 'url(./images/heroimage.jpg) no-repeat',
        backgroundSize: 'cover',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
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
            fontSize: '1rem',
          }}>Plat du jour</Typography>
        </Box>
        <Box sx={{
          background: COLORS.white,
          padding: "40px 120px",
          borderRadius: SIZES.radius
        }}>
          <Link><Typography component={'h2'} variant="h4">Plakali de Youpougo</Typography></Link>
          <Typography component={'p'} sx={{
            textAlign: 'center',
            color: COLORS.lightGrey,
            fontSize: '.8rem',
            marginTop: SIZES.spacing
          }}>22 Juin 2022</Typography>
        </Box>
      </Box>
      {/* // end of hero section */}

      <Box component={'section'} sx={{
        backgroundColor: '#d3d3d3',
      }}>
        {/* // Start of Popular Food */}
        <Container sx={{
          backgroundColor: COLORS.white,
          padding: "4%",
          transform: 'translateY(-50px)'
        }}>

          <Typography variant='h5' textAlign={'center'}>Title</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <FoodCard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FoodCard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FoodCard />
            </Grid>
          </Grid>
          <Box component={'section'} sx={{
            marginTop: '120px'
          }}>
            <Box>
              <Typography variant='h5' textAlign={'center'}>Title de la section</Typography>
              <Typography variant='subtitle1' textAlign={'center'}>Sous titre de la section</Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FoodCard />
              <ImageList sx={{ width : {xs : '100%', sm :'70%' } }} cols={2} rowHeight={164}>
                {homeImage.map((item) => (
                  <ImageListItem key={item.id}>
                    <img
                      src={item.img}
                      srcSet={item.img}
                      alt={item.img}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Stack>
          </Box>
        </Container>
      </Box>
      {/* // End of Popular Food */}

    </>

  )
}

export default Home