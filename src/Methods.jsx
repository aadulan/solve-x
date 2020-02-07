import React, { useState } from "react";
import "./index.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function Method(props) {
    const [value, setValue] = useState('change')

    const changeMethod = event => {
        props.onChangeMethod(event);
        setValue(event.target.value);
      };


    return(
    <FormControl component="fieldset">
          <FormLabel component="legend">Methods</FormLabel>
          <RadioGroup aria-label="methods" name="methods" value={value} onChange={changeMethod}>
            <FormControlLabel value='change' control={<Radio color="primary" />} label="Change side, change sign" />
            <FormControlLabel value='balance' control={<Radio color="primary" />} label="Balance" />
          </RadioGroup>
        </FormControl>
    )
}