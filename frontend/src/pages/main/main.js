import React, { useState } from 'react'
import styled from 'styled-components'
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import imageLeft from './imageleft.png'
import imageRight from './imageRight.png'

import GridContainer from '../../common/grid-container'
import Grid from '@material-ui/core/Grid'

const Container = styled.div`
  padding-top: 50px;
`

function Main (classes) {
  const spacing = useState(40)

  return (
    <Container>
      <Grid container direction='row' alignItems='center' spacing={spacing}>
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
                image={imageRight}
                title='Mrs. Alexanne Schneider'
                subtitle1='Architecto quos rem unde quia accusantium'
                subtitle2='Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error'
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main
