import { makeStyles } from '@mui/styles';
import {
  Button,
  FormControlLabel,
  FormGroup,
  Grow,
  Popover,
  Switch,
} from '@mui/material';
import React, { useState } from 'react';
import '../../Styles/index.css';

const useStyles = makeStyles((theme) => ({
  group: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [helper, setHelper] = useState(false);
  const [signs, setSigns] = useState(false);
  const [unpack, setUnpack] = useState(false);

  const handleSignChange = () => (event) => {
    setSigns(event.target.checked);
    props.onChangeSigns(event);
  };

  const handleUnpackChange = () => (event) => {
    props.onChangeUnpack(event);
    setUnpack(event.target.checked);
  };

  const handleHelperChange = () => (event) => {
    props.onChangeHelper(event);
    setHelper(event.target.checked);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button style={{ color: 'white' }} aria-describedby={id} onClick={handleClick}>
        Helper Mode
      </Button>
      <Popover
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
        TransitionComponent={Grow}
      >
        <FormGroup className={classes.group}>
          <FormControlLabel
            className="helper"
            control={
              <Switch
                className="helper"
                checked={helper}
                onChange={handleHelperChange()}
                value="helper"
                color="primary"
              />
            }
            label="Helper Mode"
          />
          <FormControlLabel
            className="signs"
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
            className="unpack"
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
