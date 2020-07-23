import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 150 ,
    textOverflow:"ellipsis", 
    overflow: "hidden", 
    whiteSpace: "nowrap"
  },
}));

const options = [
  ['Change side, change sign','change'],
  ['Balance','balance'],
];

export default function SimpleListMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    props.onChangeMethod(options[index][1])
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Button 
        endIcon={<ExpandMoreIcon/>} 
        onClick={handleClickListItem} 
        style={{justifyContent:"left",maxWidth:150, textOverflow:"ellipsis", overflow: "hidden", whiteSpace: "nowrap", color:"white"}}>
          Method
      </Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{paddingTop:0, paddingBottom:0}}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
               {option[0]} 
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
