import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 150,
    // backgroundColor: theme.palette.background.paper,
  },
}));

const options = [
  ['Change side, change sign','change'],
  ['Balance','balance'],
//   'Hide sensitive notification content',
//   'Hide all notification content',
];

export default function SimpleListMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    // console.log(event)
    props.onChangeMethod(options[index][1])
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
        //   aria-controls="lock-menu"
        //   aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText align="center" style={{textOverflow:"ellipsis", overflow: "hidden", whiteSpace: "nowrap"}} 
          primary={options[selectedIndex][0]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
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
