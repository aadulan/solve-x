import React from 'react';
import { PropTypes } from 'prop-types';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ModalSection from './InfoSection';
import TeX from '@matejmazur/react-katex';
import Table from './Table';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Button,
} from '@mui/material';

const info = [
  {
    header: 'Helper Mode',
    info: (
      <Typography align="left">
        Allows you to see hidden operations and signs:
        <Typography align="center">
          <TeX math={'2 \\rightarrow +2'} />
          <br />
          <TeX math={'3x \\rightarrow 3 \\times x'} />
        </Typography>
      </Typography>
    ),
  },
  {
    header: 'Methods',
    info: (
      <Typography align="left">
        You can use your preferred method to solve equations: balance or change side,
        change sign
      </Typography>
    ),
  },
  {
    header: 'Free Style',
    info: (
      <Typography align="left">
        Try out your own Equation. Only <TeX math={'x'} /> can be used a variable!
      </Typography>
    ),
  },
  {
    header: 'Equation Changer',
    margin: false,
    info: (
      <Typography align="left">
        Experiment with the equation. Input a number and an operation and see the equation
        change.
        <br />
        <Typography variant="subtitle2">Controls:</Typography>
        <Table />
      </Typography>
    ),
  },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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
      <IconButton style={{ color: 'white' }} onClick={handleClickOpen}>
        <InfoIcon />
      </IconButton>
      <BootstrapDialog
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Info
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {info.map((e, index) => (
            <ModalSection
              key={index}
              title={e.header}
              info={e.info}
              margin={e.margin}
            ></ModalSection>
          ))}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
