import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

import charlieBrow from '../../pages/main/charlie-brown.png'
import cpm22 from '../../pages/main/cpm22.png'
import skank from '../../pages/main/skank.png'
import offspring from '../../pages/main/offspring.png'
import projota from '../../pages/main/projota.png'
import sepultura from '../../pages/main/sepultura.png'
import slipknot from '../../pages/main/slipknot.png'
import disturbed from '../../pages/main/disturbed.png'
import tavares from '../../pages/main/tavares.png'
import orappa from '../../pages/main/orappa.png'

import styled from 'styled-components'

import api from '../../services/api'

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

class Post extends React.Component {
   state = {
     post: []
   }

   async componentDidMount () {
     /* eslint-disable */
     const id = this.props.match.params.post_id
     /* eslint-enable */

     const response = await api.get(`posts/${id}`)

     this.setState({
       post: response.data
     })
   }

   loadPhoto (resp) {
     if (resp.photo === 'charlieBrow') return charlieBrow
     if (resp.photo === 'projota') return projota
     if (resp.photo === 'cpm22') return cpm22
     if (resp.photo === 'skank') return skank
     if (resp.photo === 'offspring') return offspring
     if (resp.photo === 'sepultura') return sepultura
     if (resp.photo === 'slipknot') return slipknot
     if (resp.photo === 'disturbed') return disturbed
     if (resp.photo === 'tavares') return tavares
     if (resp.photo === 'orappa') return orappa
   }

   render () {
     const { classes } = this.props
     const { post } = this.state

     return (
       <Container>
         { post.map(resp => (
           <div className={classes.root}>
             <Paper className={classes.paper}>
               <Grid container spacing={40}>
                 <ButtonBase className={classes.image}>
                   <img
                     className={classes.img}
                     alt='complex'
                     src={this.loadPhoto(resp)}
                     style={{ paddingRight: '1px' }}
                   />
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
                         { resp.posted_at }
                       </Typography>
                       <Typography gutterBottom
                         style={{
                           fontSize: '26px',
                           fontWeight: 'normal',
                           lineHeight: '26px',
                           color: '#2D2D2D',
                           paddingBottom: '40px'
                         }}>
                         { resp.author }
                       </Typography>
                       <Typography gutterBottom
                         style={{
                           fontSize: '36px',
                           fontWeight: 'bold',
                           lineHeight: 'normal',
                           color: '#F1A10A',
                           paddingBottom: '250px'
                         }}>
                         { resp.title }
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
                     { resp.content }
                   </Typography>
                 </Grid>
               </Grid>
             </Paper>
           </div>
         ))}
       </Container>
     )
   }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Post)
