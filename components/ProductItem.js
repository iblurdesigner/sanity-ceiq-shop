import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import NextLink from 'next/link'
import {urlForThumbnail} from '../utils/image'

export default function ProductItem({product}) {
  return (
    <Card>
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component='img'
            image={urlForThumbnail(product.image)}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography>
              {product.rating} ({product.numReviews} revisiones)
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${product.price}</Typography>
        <Button size='small' color='primary'>
          Añadir al carrito
        </Button>
      </CardActions>
    </Card>
  )
}
