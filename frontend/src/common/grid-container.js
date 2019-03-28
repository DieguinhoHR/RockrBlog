import React from 'react'

import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

function GridContainer ({ image, title, subtitle1, subtitle2 }) {
  return (
    <Grid container wrap='nowrap' spacing={16}>
      <Grid item>
        <Link to='/'>
          <img src={image} />
        </Link>
      </Grid>
      <Grid item xs zeroMinWidth>
        <Typography component='h5' variant='h5' style={{ paddingLeft: '50px', paddingTop: '28px', fontSize: '24px', fontWeight: 'normal' }}>
          { title }
        </Typography>
        <Typography variant='subtitle1' style={{ paddingLeft: '50px', fontSize: '36px', fontWeight: 'bold', color: '#F1A10A' }}>
          { subtitle1 }
        </Typography>
        <Typography variant='subtitle2' style={{ paddingLeft: '50px', paddingTop: '5px', fontSize: '24px', fontWeight: 'normal', color: '#2D2D2D' }}>
          { subtitle2 }
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
