import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import api from '../../services/api'
import Swal from 'sweetalert2'

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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#2D2D2D'
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

const label = {
  color: '#000000',
  fontSize: '24px',
  lineHeight: '34px',
  fontStyle: 'normal'
}

const input = {
  background: '#FFFFFF',
  border: '1px solid #2D2D2D',
  boxSizing: 'border-box',
  borderRadius: '4px',
  width: '565px',
  height: '60px'
}

const textArea = {
  background: '#FFFFFF',
  border: '1px solid #2D2D2D',
  boxSizing: 'border-box',
  borderRadius: '4px',
  width: '565px',
  height: '200px'
}

const initialState = {
  contact: {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}

/* eslint-disable */
class Contact extends React.Component {
  state = {
    ...initialState,
    open: this.props.open
  }

  handleFormClear = () => {
    this.setState({
      contact: initialState.contact,
    });
  };

  handleChange(event) {
    const contact = { ...this.state.contact }
    contact[event.target.name] = event.target.value
    this.setState({ contact })
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  async handleSave (e){
    e.preventDefault()

    try {
      const contact = this.state.contact
      const response = await api.post('contact', contact)

      this.setState({
        contact: initialState.contact      
      });

      Swal.fire({
        type: 'success',
        title: `${response.data.email} cadastrado com sucesso!`,
        showConfirmButton: false,
        timer: 2500
      })

      this.setState({ open: false })
    }  catch (error) {
      error.response.data.errors.map(error => {
        console.log(error)        
      });
    }
  }

  render () {
    const { classes } = this.props
    const { contact } = this.state;

    return (
      <div>
        <Tooltip title='Clique para inserir um novo contato' placement='bottom'>
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }} onClick={this.handleClickOpen}>Contact</Link>
        </Tooltip>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby='customized-dialog-title'
          open={this.state.open}
          fullWidth
        >
          <Grid container direction='column' alignItems='center'>
            <DialogTitle id='customized-dialog-title' onClose={this.handleClose}>
              <div style={{ fontSize: '36px', color: '#F1A10A', fontWeight: 'bold', fontStyle: 'normal' }}>Contact</div>
            </DialogTitle>

            <DialogContent>
              <Typography gutterBottom>
                <form>
                  <label for="exampleForm2" style={label}>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    style={input} 
                    onChange={e => this.handleChange(e)}
                    class="form-control" 
                    required
                    placeholder="Fill your full name" 
                  /><br /><br />

                  <label for="exampleForm2" style={label}>E-mail</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    style={input}
                    onChange={e => this.handleChange(e)}
                    class="form-control" 
                    placeholder="Fill a valid e-mail" 
                  /><br /><br />

                  <label for="exampleForm2" style={label}>Phone</label>
                  <input 
                    type="text" 
                    required
                    name="phone" 
                    style={input} 
                    class="form-control"
                    onChange={e => this.handleChange(e)} 
                    placeholder="Fill your phone" 
                  /><br /><br />

                  <label for="exampleForm2" style={label}>Post</label>
                  <textarea 
                    rows="5" 
                    required
                    name="message" 
                    onChange={e => this.handleChange(e)}
                    style={textArea} 
                    class="form-control" 
                    placeholder="Hello..." 
                  /><br />
                </form>
              </Typography>
            </DialogContent>
          </Grid>

          <DialogActions>
            <Grid item xs='7'>
              <Button variant="contained" color="primary" className={classes.button} 
                onClick={e => this.handleSave(e)}>
                Submit
              </Button>
            </Grid>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(Contact);

