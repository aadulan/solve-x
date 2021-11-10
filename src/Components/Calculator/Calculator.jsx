import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, CardContent, Card, Fab, Divider } from '@material-ui/core';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CalculatorButton from './CalculatorButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    // maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

let buttons = [
  '7',
  '8',
  '9',
  '÷',
  '4',
  '5',
  '6',
  '×',
  '1',
  '2',
  '3',
  '-',
  'empty',
  '0',
  'cal',
  '+',
];

export default function Calculator(props) {
  const classes = useStyles();
  const [number, setNumber] = useState('');
  const [sign, setSign] = useState('');
  const [isPositive, setPositive] = useState('+');
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const emptyText = () => {
    setNumber('');
    setSign('');
  };

  const addNumberSign = () => {
    if (isPositive === '+') {
      setPositive('-');
    } else {
      setPositive('+');
    }
  };

  const addNumber = (e) => {
    if (number.length >= 5) {
      props.onMessage('Maximum number of digits reached');
      props.onVariant('error');
      props.onOpen(true);
    } else {
      setNumber(number.concat(e));
    }
  };

  const addSign = (e) => {
    setSign(e);
  };

  const calculateExpression = () => {
    var newSign = '';
    if (sign === '÷') {
      newSign = 'divide';
    } else if (sign === '×') {
      newSign = 'multiply';
    } else if (sign === '+') {
      newSign = 'add';
    } else if (sign === '-') {
      newSign = 'subtract';
    }

    props.onCalChange(newSign, isPositive.concat(number));
    if (newSign === '' || number === '') {
      props.onMessage('Number or sign empty!');
      props.onVariant('error');
      props.onOpen(true);
    } else {
      props.onEnterChange(true);
      setNumber('');
      setSign('');
      setPositive('+');
    }
  };

  const funcs = {
    number: (n) => addNumber(n),
    sign: (s) => addSign(s),
    calc: () => calculateExpression(),
    empty: () => emptyText(),
  };

  const buttonToFunc = (val) => {
    if ('0123456789'.indexOf(val) !== -1) {
      return funcs.number;
    } else if ('+-×÷'.indexOf(val) !== -1) {
      return funcs.sign;
    } else if (val === 'empty') {
      return funcs.empty;
    } else {
      return funcs.calc;
    }
  };

  return (
    <Draggable>
      <Card className={classes.root}>
        <CardActions disableSpacing>
          <DragIndicatorIcon />
          <Typography variant="subtitle1">Equation Changer</Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container direction="column" justifyContent="center" align="center">
              <Grid container direction="row">
                <Card style={{ width: '100%' }}>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      align="center"
                    >
                      <Fab
                        style={{ marginRight: 20 }}
                        onClick={() => addNumberSign()}
                        size="small"
                        color="primary"
                        aria-label="add"
                      >
                        <img
                          src="plus-minus.svg"
                          alt="sign"
                          style={{ maxWidth: 20 }}
                        ></img>
                      </Fab>
                      <Typography
                        className="number"
                        style={{ marginRight: 'auto' }}
                        align="left"
                        variant="h6"
                      >
                        {isPositive === '+' ? '' : '-'}
                        {number}
                      </Typography>
                      <Grid item>
                        <Divider orientation="vertical" />
                      </Grid>
                      <Typography
                        className="sign"
                        style={{ width: 30 }}
                        align="center"
                        variant="h6"
                      >
                        {sign}
                      </Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid style={{ marginTop: 4 }} container direction="row">
                {buttons.map((val, index) => (
                  <CalculatorButton key={index} val={val} cb={buttonToFunc(val)} />
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Draggable>
  );
}
