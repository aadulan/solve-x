import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import React, { useState } from "react";
import "./index.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles(theme => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
  group:{
    padding: theme.spacing(2),
  }
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [helper, setHelper] = useState(false);
    const [signs, setSigns] = useState(false);
    const [unpack, setUnpack] = useState(false);

    const handleSignChange = () => event => {
        setSigns(event.target.checked);
        props.onChangeSigns(event);
    
      }
    
      const handleUnpackChange = () => event => {
        props.onChangeUnpack(event);
        setUnpack(event.target.checked);
    
      }
    
      const handleHelperChange = () => event => {
        props.onChangeHelper(event);
        setHelper(event.target.checked);
    
      }
  
    const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div >
      <Button style={{color:"white"}} startIcon={<HelpOutlineIcon/>} aria-describedby={id}  color="default" onClick={handleClick} >
        Helper 
      </Button>
      <Popover
        className={classes.pop}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <FormGroup className={classes.group}>
            <FormControlLabel
              control={
                <Switch
                  checked={helper}
                  onChange={handleHelperChange()}
                  value="helper"
                  color="primary"
                />
              }
              label="Helper Mode"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={signs}
                  onChange={handleSignChange()}
                  value="signs"
                  color="primary"
                  disabled={!helper}
                />
              }
              label="Show Signs"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={unpack}
                  onChange={handleUnpackChange()}
                  value="unpack"
                  color="primary"
                  disabled={!helper}
                />
              }
              label="Unpack Variable"
            />

          </FormGroup>
      </Popover>
    </div>
  );
}
