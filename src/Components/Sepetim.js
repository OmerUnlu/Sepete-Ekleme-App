import React from 'react'
import { Typography,Card, CardActionArea,CardContent } from '@mui/material'

const Sepetim = ({bas}) => {
  return (
    <>
           <Card sx={{ width: "98%", margin:"0 auto 10px auto"}}>
                    <CardActionArea>
                        <CardContent className='basket'>
                            <Typography gutterBottom variant="div" sx={{width:"270px"}} >
                            Ürün Adı:  {bas.name}
                            </Typography>
                            <Typography variant="div" sx={{width:"150px"}}>
                             Adet:  {bas.adet}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
            </Card>
    </>
  )
}

export default Sepetim