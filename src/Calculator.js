import React, { useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EqDisplay from './EqDisplay'
import { Grid } from '@material-ui/core';
import { Button, ButtonGroup } from "@material-ui/core"; 
import TextField from "@material-ui/core/TextField";

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  button: {
    margin: theme.spacing(1),
  }
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("")

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleFormChange = (e) => { 
    setText(e.target.value); 
}


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Equation App Solver
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <EqDisplay/>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Grid container direction='column'>
        <Grid container direction='row'>
        <TextField
                            id="text"
                            // label="Password"
                            type="text"
                            // autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                            fullWidth={true}
                            required={true}
                            // className='field'
                            onChange={handleFormChange}
                        />

        </Grid>

        <Grid container direction='row'>
        <ButtonGroup
        fullWidth={true}
              size="large"
              color='primary'
            >
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button> ÷ </Button>
            </ButtonGroup>
        </Grid>
        <Grid container direction='row'>
        <ButtonGroup
        fullWidth={true}
              size="large"
              color='primary'
            >
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>×</Button>
            </ButtonGroup>
        </Grid>
        <Grid container direction='row'>
        <ButtonGroup
            fullWidth={true}
              size="large"
              color='primary'
            >
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>-</Button>
            </ButtonGroup>
        </Grid>
        <Grid container direction='row'>
            {/* <div style={{ width:'25%' }}> </div> */}
            <ButtonGroup
                fullWidth={true}
                size="large"
                color='primary'
                // style={{ width:'75%' }}
            >
                <Button>0</Button>
                <Button>+</Button>
            </ButtonGroup>
           
        </Grid>
        <Grid container direction='row'>
            <ButtonGroup
                fullWidth={true}
                size="large"
                color='primary'
            >
                
                <Button>Enter</Button>
            </ButtonGroup>
           
        </Grid>
        </Grid>
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
          ))}
        </List> */}
      </Drawer>
    </div>
  );
}