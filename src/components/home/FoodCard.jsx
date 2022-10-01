import { Card, CardActionArea, CardContent, CardMedia, Typography, } from "@mui/material"


const FoodCard = () => {
  return (
    <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/200/300"
        alt="green iguana"
        sx={{
          objectFit : 'cover'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default FoodCard