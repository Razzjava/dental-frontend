import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function SignUp(props) {
  const [open, setOpen] = React.useState(false);



  return (
    <React.Fragment>
     
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Dental Practice Sign Up
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
          <TextField
          required
          id="outlined-required"
          label="Practice Name"
          onChange={props.handleName}
        
        />
          </Typography>
          <Typography gutterBottom>
          <TextField
          required
          id="outlined-required"
          label=" Work Email"
          onChange={props.handleEmail}
         
        />
        </Typography>
          <Typography gutterBottom>
          <TextField
          required
          id="outlined-required"
          label=" Location"
          onChange={props.handleLocation}
        />
          </Typography>
          <Typography gutterBottom>
          <TextField
          required
          id="outlined-required"
          type="number"
          label=" Free Spaces"
          onChange={props.handleSapces}
        />
          </Typography>
          <Typography gutterBottom>
          <TextField
          required
          id="outlined-required"
          label="Password"
          type='password'
          onChange={props.handlePassword}
        />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            Sign Up
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
