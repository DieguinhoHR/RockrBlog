import React from 'react'
import styled from 'styled-components'
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'

import charlieBrow from './charlie-brown.png'
import cpm22 from './cpm22.png'
import skank from './skank.png'
import imageLeft from './imageleft.png'
import projota from './projota.png'
import sepultura from './sepultura.png'
import slipknot from './slipknot.png'
import disturbed from './disturbed.png'
import tavares from './tavares.png'
import orappa from './orappa.png'

import GridContainer from '../../common/grid-container'
import GridContainerWithAnImage from '../../common/grid-container-with-an-image'
import Grid from '@material-ui/core/Grid'

const Container = styled.div`
  padding-top: 60px;
`

function Main (classes) {
  return (
    <Container>
      <Grid container direction='row' style={{ paddingBottom: '70px' }}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <GridContainer
                image={imageLeft}
                title='Kelsi Monahan'
                subtitle1='Qui occaecati vero et quibusdam non'
                subtitle2='Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas '
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <GridContainer
                image={projota}
                title='Mrs. Alexanne Schneider'
                subtitle1='Architecto quos rem unde quia accusantium'
                subtitle2='Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error'
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container direction='row-reverse' style={{ paddingBottom: '70px' }}>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <CardActionArea>
              <GridContainerWithAnImage
                image={charlieBrow}
                title='Dagmar Ankunding'
                subtitle1='Repellat aliquam quo sit qui praesentium ut aliquid'
                subtitle2='Ea ut et labore quidem non sit in quidem. Provident est incidunt dignissimos enim qui consequatur numquam.'
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container direction='row' style={{ paddingBottom: '70px' }}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <GridContainer
                image={cpm22}
                imageRightPosition
                title='Kelsi Monahan'
                subtitle1='Qui occaecati vero et quibusdam non'
                subtitle2='Saepe quia culpa vero.'
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6} style={{ paddingBottom: '70px' }}>
          <Card className={classes.card}>
            <CardActionArea>
              <GridContainer
                image={skank}
                imageRightPosition
                title='Mrs. Alexanne Schneider'
                subtitle1='Architecto quos rem unde quia accusantium'
                subtitle2='Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error'
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid container direction='row' style={{ paddingBottom: '70px' }}>
          <Grid item xs={8}>
            <Card className={classes.card}>
              <CardActionArea>
                <GridContainerWithAnImage
                  image={sepultura}
                  title='Sydney Legros'
                  subtitle1='Possimus saepe et illum molestiae et quibusdam'
                  subtitle2='Excepturi quod aliquid impedit earum consequatur eos. In quo fuga ad odio beatae'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction='row' style={{ paddingBottom: '70px' }}>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <GridContainer
                  image={projota}
                  title='Kelsi Monahan'
                  subtitle1='Qui occaecati vero et quibusdam non'
                  subtitle2='Saepe quia culpa vero.'
                />
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <GridContainer
                  image={slipknot}
                  title='Mrs. Alexanne Schneider'
                  subtitle1='Architecto quos rem unde quia accusantium'
                  subtitle2='Voluptatum'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction='row-reverse' style={{ paddingBottom: '70px' }}>
          <Grid item xs={8}>
            <Card className={classes.card}>
              <CardActionArea>
                <GridContainerWithAnImage
                  image={disturbed}
                  title='Sydney Legros'
                  subtitle1='Possimus saepe et illum molestiae et quibusdam'
                  subtitle2='Excepturi quod aliquid impedit earum consequatur eos. In quo fuga ad odio beatae'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction='row'>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <GridContainer
                  image={tavares}
                  imageRightPosition
                  title='Kelsi Monahan'
                  subtitle1='Qui occaecati vero et quibusdam non'
                  subtitle2='Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas'
                />
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <GridContainer
                  image={orappa}
                  imageRightPosition
                  title='Mrs. Alexanne Schneider'
                  subtitle1='Architecto quos rem unde quia accusantium'
                  subtitle2='Voluptatum omnis et dolor architecto non totam'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main
