import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

import charlieBrow from '../../pages/main/charlie-brown.png'
import styled from 'styled-components'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 1210,
    height: 1300
  },
  image: {
    width: '650px',
    height: '640px'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
`

function Post (props) {
  const { classes } = props

  return (
    <Container>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={40}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt='complex' src={charlieBrow} style={{ paddingRight: '1px' }} />
            </ButtonBase>
            <Grid item xs={12} sm container>
              <Grid item xs container direction='column' spacing={32} alignItems={'flex-end'}>
                <Grid item xs style={{ paddingLeft: '100px' }}>
                  <Typography gutterBottom variant='subtitle1'
                    style={{
                      fontSize: '18px',
                      fontWeight: 'normal',
                      lineHeight: '26px',
                      color: '#032937',
                      paddingTop: '200px',
                      paddingBottom: '40px'
                    }}>
                    Jan 6. 2018
                  </Typography>
                  <Typography gutterBottom
                    style={{
                      fontSize: '26px',
                      fontWeight: 'normal',
                      lineHeight: '26px',
                      color: '#2D2D2D',
                      paddingBottom: '40px'
                    }}>
                    Kelsi Monahan
                  </Typography>
                  <Typography gutterBottom
                    style={{
                      fontSize: '36px',
                      fontWeight: 'bold',
                      lineHeight: 'normal',
                      color: '#F1A10A',
                      paddingBottom: '250px'
                    }}>
                    Qui occaecati vero et quibusdam non
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{
                fontSize: '24px',
                fontWeight: 'normal',
                lineHeight: '34px',
                color: '#2D2D2D',
                padding: '10px 200px 200px 200px',
                position: 'relative'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean eleifend ligula in nulla vulputate pharetra.Proin condimentum, libero quis feugiat pharetra, ante arcu faucibus felis, vel elementum magna felis in libero.Aliquam id ultricies purus.Etiam at ullamcorper enim.Cras vel elit ac lorem condimentum dignissim.Ut rhoncus neque finibus erat congue, id tempus lacus hendrerit.Curabitur non faucibus diam.Sed id ante id dolor euismod varius eu vel velit.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  )
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Post)
