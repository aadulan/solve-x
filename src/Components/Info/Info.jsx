import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import ModalSection from './InfoSection'
import TeX from '@matejmazur/react-katex';
import Table from './Table'

const info = [
    {
      header:"Helper Mode",
      info: <Typography align="left">
        Allows you to see hidden operations and signs:
        <Typography align="center">
            <TeX  math={"2 \\rightarrow +2"}/>
          <br/>
            <TeX math={"3x \\rightarrow 3 \\times x"}/>
        </Typography>
      </Typography>
    },
    {
      header:"Methods",
      info:<Typography align="left">
        You can use your preferred method to solve equations: balance or change side, change sign
      </Typography>
    },
    {
      header: "Free Style",
      info: <Typography align="left">
        Try out your own Equation. Only <TeX  math={"x"}/> can be used a variable!
      </Typography>
    },
    {
      header: "Equation Changer",
      margin: false ,
      info: <Typography align="left">
        Experiment with the equation. Input a number and an operation and see the equation change.
        <br/>
        <Typography variant="subtitle2">
          Controls:
        </Typography>
        <Table/>
      </Typography>
      
    }
  
  ]

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <IconButton style={{color:"white"}} onClick={handleClickOpen}>
        <InfoIcon/>
      </IconButton>
      <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Info
        </DialogTitle>
        <DialogContent dividers>
        {info.map((e, index) => (
               <ModalSection 
               key={index} 
               title={e.header} 
               info={e.info}
               margin={e.margin}
               >
               </ModalSection>
             )

             )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
