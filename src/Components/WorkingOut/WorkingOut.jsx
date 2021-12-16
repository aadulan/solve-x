import React from 'react';
import { makeStyles } from '@mui/styles';
import WorkingOutCard from './WorkingOutCard';
import { useRef } from 'react';
import { useEffect } from 'react';
import { List } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    bottom: 0,
    overflow: 'auto',
    maxHeight: 150,
    minHeight: 150,
    overflowY: 'scroll',
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
  const list = useRef(null);

  useEffect(() => {
    list.current.scrollTop = list.current.scrollHeight;
  });

  return (
    <List dense={true} className={classes.root} ref={list}>
      {props.workingOut.map((step, index) => (
        <WorkingOutCard key={index} step={step} i={index + 1} />
      ))}
    </List>
  );
}
