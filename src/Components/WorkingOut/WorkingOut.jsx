import React from 'react';
import { makeStyles } from '@mui/styles';
import WorkingOutCard from './WorkingOutCard';
import { useRef } from 'react';
import { useEffect } from 'react';
import { List } from '@mui/material';

// 432 = 1.2 * 360
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 432,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    bottom: 0,
    overflow: 'auto',
    maxHeight: 250,
    minHeight: 250,
    overflowY: 'scroll',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  '&::-webkit-scrollbar': {
    '-webkit-appearance': 'none',
    width: '7px',
    height: '7px',
    '-webkit-overflow-scrolling': 'auto',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    '-webkit-box-shadow': '0 0 1px rgba(255, 255, 255, 0.5)',
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
