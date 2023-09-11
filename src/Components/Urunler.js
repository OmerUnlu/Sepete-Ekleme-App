import React from 'react'
import { Typography, Grid, Card, CardActionArea, CardMedia,CardContent } from '@mui/material'

const Urunler = ({product, onClick}) => {
    return (
        <>
            <Grid item xs={6} sm={4} md={3}>
                <Card sx={{ maxWidth: 345 }} onClick={onClick}>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={product.img} alt="green iguana"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='redCapter' >
                             {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             {product.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}

export default Urunler