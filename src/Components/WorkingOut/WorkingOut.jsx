import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import WorkingOutCard from './WorkingOutCard'
import { useRef } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    bottom: 0,
    overflow: 'auto',
    maxHeight: 150,
    minHeight: 150,
    overflowY:'scroll'
    // boxShadow: 'inset 1px -17px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function PinnedSubheaderList(props) {
  const classes = useStyles();
  const list = useRef(null)

  useEffect(() => {
    list.current.scrollTop = list.current.scrollHeight;
  })

  return (
    <List dense={true} className={classes.root} ref={list} >
        {props.workingOut.map((step, index) => (
            <WorkingOutCard
                key={index}
                step={step}
                i={index+1}
            />
      
        ))}
     
    </List>
  );
}