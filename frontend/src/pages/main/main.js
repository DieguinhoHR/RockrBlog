import React, { Component } from 'react'
import styled from 'styled-components'
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'

import charlieBrow from './charlie-brown.png'
import cpm22 from './cpm22.png'
import skank from './skank.png'
import offspring from './offspring.png'
import projota from './projota.png'
import sepultura from './sepultura.png'
import slipknot from './slipknot.png'
import disturbed from './disturbed.png'
import tavares from './tavares.png'
import orappa from './orappa.png'

import GridContainer from '../../common/grid-container'
import GridContainerWithAnImage from '../../common/grid-container-with-an-image'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import api from '../../services/api'
import Tooltip from '@material-ui/core/Tooltip'

import {
  withStyles
} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  }
})

const Container = styled.div`
  padding-top: 70px;
`
class Main extends Component {
  state = {
    posts: []
  }

  async componentDidMount () {
    const response = await api.get('posts')

    this.setState({
      posts: response.data
    })
  }

  render () {
    const { classes } = this.props
    const { posts } = this.state

    return (
      <Container>
        <Grid container direction='row' style={{ paddingBottom: '70px' }}>
          {
            posts.map(response => {
              const id = parseInt(response.id)
              if (id === 1 || id === 2) {
                return (
                  <Grid item xs={6}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <Tooltip title='Clique na descrição para visualizar este post' placement='top'>
                          <Link to={`/post/${response.id}`} style={{ textDecoration: 'none' }}>
                            <GridContainer
                              image={response.photo === 'offspring' ? offspring : projota}
                              title={response.author}
                              subtitle1={response.title}
                              subtitle2={response.content}
                            />
                          </Link>
                        </Tooltip>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              }
            })
          }
        </Grid>

        <Grid container direction='row-reverse' style={{ paddingBottom: '70px' }}>
          {
            posts.map(response => {
              const id = parseInt(response.id)

              if (id === 3) {
                return (
                  <Grid item xs={8}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <Tooltip title='Clique na descrição para visualizar este post' placement='right'>
                          <Link to={`/post/${response.id}`} style={{ textDecoration: 'none' }}>
                            <GridContainerWithAnImage
                              image={charlieBrow}
                              title={response.author}
                              subtitle1={response.title}
                              subtitle2={response.content}
                            />
                          </Link>
                        </Tooltip>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              }
            })
          }
        </Grid>

        <Grid container direction='row' style={{ paddingBottom: '70px' }}>
          {
            posts.map(response => {
              const id = parseInt(response.id)
              if (id === 4 || id === 5) {
                return (
                  <Grid item xs={6}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <Tooltip title='Clique na descrição para visualizar este post' placement='top'>
                          <Link to={`/post/${response.id}`} style={{ textDecoration: 'none' }}>
                            <GridContainer
                              image={response.photo === 'cpm22' ? cpm22 : skank}
                              imageRightPosition
                              title={response.author}
                              subtitle1={response.title}
                              subtitle2={response.content}
                            />
                          </Link>
                        </Tooltip>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              }
            })
          }
        </Grid>

        <Grid container direction='row' style={{ paddingBottom: '70px' }}>
          {
            posts.map(response => {
              const id = parseInt(response.id)

              if (id === 6) {
                return (
                  <Grid item xs={8}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <Tooltip title='Clique na descrição para visualizar este post' placement='left'>
                          <Link to={`/post/${response.id}`} style={{ textDecoration: 'none' }}>
                            <GridContainerWithAnImage
                              image={sepultura}
                              title={response.author}
                              subtitle1={response.title}
                              subtitle2={response.content}
                            />
                          </Link>
                        </Tooltip>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              }
            })
          }
        </Grid>

        <Grid container direction='row' style={{ paddingBottom: '70px' }}>
          {
            posts.map(response => {
              const id = parseInt(response.id)
              if (id === 7 || id === 8) {
                return (
                  <Grid item xs={6}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <Tooltip title='Clique na descrição para visualizar este post' placement='top'>
                          <Link to={`/post/${response.id}`} style={{ textDecoration: 'none' }}>
                            <GridContainer
                              image={response.photo === 'projota' ? projota : slipknot}
                              title={response.author}
                              subtitle1={response.title}
                              subtitle2={response.content}
                            />
                          </Link>
                        </Tooltip>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              }
            })
          }
        </Grid>

        <Grid container direction='row-reverse' style={{ paddingBottom: '70px' }}>
          {
            posts.map(response => {
              const id = parseInt(response.id)

              if (id === 9) {
                return (
                  <Grid item xs={8}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <Tooltip title='Clique na descrição para visualizar este post' placement='right'>
                          <Link to={`/post/${response.id}`} style={{ textDecoration: 'none' }}>
                            <GridContainerWithAnImage
                              image={disturbed}
                              title={response.author}
                              subtitle1={response.title}
                              subtitle2={response.content}
                            />
                          </Link>
                        </Tooltip>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              }
            })
          }
        </Grid>

        <Grid container direction='row'>
          {
            posts.map(response => {
              const id = parseInt(response.id)
              if (id === 10 || id === 11) {
                return (
                  <Grid item xs={6}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <Tooltip title='Clique na descrição para visualizar este post' placement='top'>
                          <Link to={`/post/${response.id}`} style={{ textDecoration: 'none' }}>
                            <GridContainer
                              image={response.photo === 'tavares' ? tavares : orappa}
                              imageRightPosition
                              title={response.author}
                              subtitle1={response.title}
                              subtitle2={response.content}
                            />
                          </Link>
                        </Tooltip>
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              }
            })
          }
        </Grid>
      </Container>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.string
}

export default withStyles(styles)(Main)
