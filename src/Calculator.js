import React, { useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EqDisplay from './EqDisplay'
import { Grid, CardContent, Card } from '@material-ui/core';
import { Button, ButtonGroup } from "@material-ui/core"; 


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

export default function Calculator() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("")
  const [sign, setSign] = useState("")
  const [eq, setEq] = useState([])


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


const addNumber = (e) => {
    setNumber(number.concat(e));
}

const addSign = (e) => {
    setSign(e);
}

const emptyText = () => {
    setNumber("");
    setSign("");
}

const changeEquation = () => {
    var newSign = ""
    if (sign === "÷") {
        newSign = "divide"

    } else if (sign === "×"){
        newSign = "multiply"
    } else if (sign === "+" ){
        newSign = "add"
    } else if (sign === "-"){
        newSign = "subtract"
    }
    setEq([newSign, number])
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
        <EqDisplay calculator={eq}/>
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
        <Divider/>
        <Grid container direction='column' justify='center' align='center'>
        <Grid container direction='row'>
            <Card style={{width:'100%'}}>
                <CardContent>
                    <Typography variant="h6">
                        {sign}{number}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid container direction='row'>
        <ButtonGroup
        fullWidth={true}
              size="large"
              color='primary'
            >
              <Button onClick={() => addNumber("7")}>7</Button>
              <Button onClick={() => addNumber("8")}>8</Button>
              <Button onClick={() => addNumber("9")}>9</Button>
              <Button onClick={() => addSign("÷")}> ÷ </Button>
            </ButtonGroup>
        </Grid>
        <Grid container direction='row'>
        <ButtonGroup
        fullWidth={true}
              size="large"
              color='primary'
            >
              <Button onClick={() => addNumber("4")}>4</Button>
              <Button onClick={() => addNumber("5")}>5</Button>
              <Button onClick={() => addNumber("6")}>6</Button>
              <Button onClick={() => addSign("×")}>×</Button>
            </ButtonGroup>
        </Grid>
        <Grid container direction='row'>
        <ButtonGroup
            fullWidth={true}
              size="large"
              color='primary'
            >
              <Button onClick={() => addNumber("1")}>1</Button>
              <Button onClick={() => addNumber("2")}>2</Button>
              <Button onClick={() => addNumber("3")}>3</Button>
              <Button onClick={() => addSign("-")}>-</Button>
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
                <Button onClick={() => emptyText()} >Clear</Button>
                {/* <Button onClick={() => changeEquation()} >Enter</Button> */}
                <Button value="0" onClick={() => addNumber("0")}>0</Button>
                <Button value="+" onClick={() => addSign("+")}>+</Button>
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