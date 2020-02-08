import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Helper from './Helper'
import MethodMenu from './MethodMenu'
import HelperPop from './HelperPop'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
      menuButton: {
          marginRight: 5
        // marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
  list: {
    width: 275,
  },
  fullList: {
    width: 'auto',
  },
});


export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {/* <ListItem>
          <Method onChangeMethod={props.onChangeMethod}/>
        </ListItem> */}
        <Divider />
        <ListItem>
          {/* <Helper 
          onChangeUnpack={props.onChangeUnpack}
          onChangeSigns={props.onChangeSigns}
          onChangeHelper={props.onChangeHelper}/> */}

        </ListItem>
        <Divider />

        {/* <ListItem>
         
        </ListItem> */}


        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
    </div>
  );

  return (
    <React.Fragment>
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <img  src="operations.svg" alt="logo" style={{width:50, height:50 ,marginRight:"auto"}} ></img>
            {/* <IconButton  onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton> */}
            {/* <Typography variant="h6" className={classes.title}>
            </Typography> */}
             <MethodMenu 
             onChangeMethod={props.onChangeMethod}/>
             <HelperPop 
             onChangeUnpack={props.onChangeUnpack}
            onChangeSigns={props.onChangeSigns}
            onChangeHelper={props.onChangeHelper}
            />
        </Toolbar>
        </AppBar>
    </div>
        {/* <div>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
        </Drawer>
        </div> */}
    </React.Fragment>
  );
}
