import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { IconButton, Card, CardActionArea, CardContent, Typography } from '@material-ui/core';
import ModalSection from './ModalSection';
import TeX from '@matejmazur/react-katex';
import Table from './Table'
import InfoIcon from '@material-ui/icons/Info';

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
    header: "Equation Changer",
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

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton style={{color:"white"}} onClick={handleOpen}>
        <InfoIcon/>
      </IconButton>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Card style={{maxWidth:400, }}>
            <CardActionArea >
              <Typography variant="h4" align="center"  style={{paddingBottom:0, paddingTop:15}}>
                Info
              </Typography>
              {/* <IconButton onClick={handleClose}>
                <CloseIcon/>
              </IconButton> */}
            <CardContent style={{padding:"2em", paddingTop:0}}>
             {info.map((e, index) => (
               <ModalSection 
               key={index} 
               title={e.header} 
               info={e.info}>
               </ModalSection>
             )

             )}
            </CardContent>
            </CardActionArea>
            </Card>
        </Fade>
      </Modal>
    </div>
  );
}
