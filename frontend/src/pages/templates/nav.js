import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import Tooltip from '@material-ui/core/Tooltip'
// import Contact from '../contact/contact'

import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='Close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions)

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
                <Tooltip title='Clique para inserir um novo contato' placement='bottom'>
                  <Link to='/' style={{ color: 'white', textDecoration: 'none' }} onClick={this.handleClickOpen}>
                    Contact
                  </Link>
                </Tooltip>
                <Dialog
                  onClose={this.handleClose}
                  aria-labelledby='customized-dialog-title'
                  open={this.state.open}
                >
                  <DialogTitle id='customized-dialog-title' onClose={this.handleClose}>
                    Contact
                  </DialogTitle>
                  <DialogContent>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                      at eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                      lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color='primary'>
                      Save changes
                    </Button>
                  </DialogActions>
                </Dialog>
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
