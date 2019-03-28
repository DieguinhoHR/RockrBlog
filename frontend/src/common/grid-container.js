import React from 'react'

import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.div`
  height: 320px;
  width: 320px;
`

const Title = styled.div`
  padding-left: 50px;
  padding-top: 28px;
  font-size: 24px;
  font-weight: normal;
`

const Subtitle1 = styled.div`
  padding-left: 50px;
  font-size: 36px;
  font-weight: bold;
  color: #F1A10A;
`

const Subtitle2 = styled.div`
  padding-left: 50px;
  font-size: 24px;
  padding-top: 5px;
  font-weight: normal;
  color: #2D2D2D;
`

function GridContainer ({ image, title, subtitle1, subtitle2 }) {
  return (
    <Grid container wrap='nowrap' spacing={8}>
      <Image>
        <Grid item>
          <Link to='/'>
            <img src={image} />
          </Link>
        </Grid>
      </Image>
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
    </Grid>
  )
}

GridContainer.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string
}

export default GridContainer
