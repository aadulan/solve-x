import React, { useState } from "react";
import "./index.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./index.css";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';


export default function Helper(props) {
    const [helper, setHelper] = useState(false);
    const [signs, setSigns] = useState(false);
    const [unpack, setUnpack] = useState(false);
    // const [value, setValue] = useState('change')

    // const changeMethod = event => {
    //     props.onChangeMethod(event);
    //     setValue(event.target.value);
    //   };

    const handleSignChange = () => event => {
        setSigns(event.target.checked);
        props.onChangeSigns(event);
    
      }
    
      const handleUnpackChange = () => event => {
        props.onChangeUnpack(event);
        setUnpack(event.target.checked);
    
      }
    
      const handleHelperChange = () => event => {
        props.onChangeHelper(event);
        setHelper(event.target.checked);
    
      }

    return(
        <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={helper}
                  onChange={handleHelperChange()}
                  value="helper"
                  color="primary"
                />
              }
              label="Helper Mode"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={signs}
                  onChange={handleSignChange()}
                  value="signs"
                  color="primary"
                  disabled={!helper}
                />
              }
              label="Show Signs"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={unpack}
                  onChange={handleUnpackChange()}
                  value="unpack"
                  color="primary"
                  disabled={!helper}
                />
              }
              label="Unpack Variable"
            />

          </FormGroup>
    )
}