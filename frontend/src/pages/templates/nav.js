import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import Contact from '../contact/contact'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const logo = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '36px',
  lineHeight: 'normal',
  color: '#FFFFFF',
  marginBottom: '35px',
  paddingTop: '25px',
  paddingLeft: '370px'
}

const postLink = {
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '32px',
  lineHeight: 'normal',
  color: '#FFFFFF',
  paddingTop: '30px',
  paddingLeft: '600px'
}

const contactLink = {
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '32px',
  lineHeight: 'normal',
  color: '#FFFFFF',
  paddingTop: '30px',
  paddingLeft: '140px'
}

const appBar = {
  backgroundColor: '#2D2D2D',
  paddingTop: '18px',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)'
}

class Nav extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })

    console.log(this.state)
  }

  handleClose = () => {
    this.setState({
      open: false
    })
    // window.location.reload()
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position='static' style={appBar}>
          <Typography>
            <Grid container spacing={40}>
              <Grid item xs={4} style={logo}>
                <Tooltip title='Clique para visualizar todos posts' placement='bottom'>
                  <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Rockr Blog</Link>
                </Tooltip>
              </Grid>
              <Grid item xs={4} style={postLink}>
                <Tooltip title='Clique para visualizar todos posts' placement='bottom'>
                  <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Posts</Link>
                </Tooltip>
              </Grid>
              <Grid item xs={4} style={contactLink}>
                <Contact />
              </Grid>
            </Grid>
          </Typography>
        </AppBar>
      </div>
    )
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Nav)
