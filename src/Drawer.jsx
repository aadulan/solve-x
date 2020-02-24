import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MethodMenu from './MethodMenu'
import HelperPop from './HelperPop'
import { Link } from "react-router-dom";
import Modal from "./Modal"


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

  return (
    <React.Fragment>
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <Link
          to={{
            pathname: "/",
          }}
          style={{marginRight:"auto"}}
          >
            <img  src="operations.svg" alt="logo" style={{width:50, height:50 ,marginRight:"auto"}} ></img>
          </Link>
             <MethodMenu 
             onChangeMethod={props.onChangeMethod}/>
             <HelperPop 
             onChangeUnpack={props.onChangeUnpack}
            onChangeSigns={props.onChangeSigns}
            onChangeHelper={props.onChangeHelper}
            />
            <Modal/>
        </Toolbar>
        </AppBar>
    </div>
    </React.Fragment>
  );
}
