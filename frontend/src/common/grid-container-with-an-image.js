import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.div`
  padding-left: 70px;
  padding-top: 200px;
  font-size: 24px;
  font-weight: normal;
`

const Subtitle1 = styled.div`
  padding-left: 70px;
  font-size: 36px;
  font-weight: bold;
  color: #F1A10A;
`

const Subtitle2 = styled.div`
  padding-left: 70px;
  font-size: 24px;
  padding-top: 5px;
  font-weight: normal;
  color: #2D2D2D;
`

const Image = styled.div`
  height: 640px;
  width: 640px;
`

function GridContainerWithAnImage ({
  image,
  title,
  subtitle1,
  subtitle2,
  imageRightPosition
}) {
  return (
    <Grid container wrap='nowrap' spacing={8}>
      { !imageRightPosition &&
        <Image>
          <Grid item>
            <Link to='/'>
              <img src={image} />
            </Link>
          </Grid>
        </Image>
      }
      <Grid item xs zeroMinWidth>
        <Title>
          <Typography component='h5' variant='h5'>
            { title }
          </Typography>
        </Title>

        <Typography variant='subtitle1'>
          <Subtitle1>
            { subtitle1 }
          </Subtitle1>
        </Typography>

        <Typography variant='subtitle2'>
          <Subtitle2>
            { subtitle2 }
          </Subtitle2>
        </Typography>
      </Grid>
      { imageRightPosition &&
        <Image>
          <Grid item>
            <Link to='/'>
              <img src={image} />
            </Link>
          </Grid>
        </Image>
      }
    </Grid>
  )
}

GridContainerWithAnImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  imageRightPosition: PropTypes.bool
}

export default GridContainerWithAnImage
