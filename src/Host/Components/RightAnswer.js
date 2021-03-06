import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Radio,  RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      onChange= {e => props.callBack(props.index)}
      {...props}
    />
  );
}

export default function CustomizedRadios(props) {
  const { callBack } = props
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Click on the correct answer</FormLabel>
      <RadioGroup defaultValue="Answer A" aria-label="answer" name="customized-radios">
        <FormControlLabel value="Answer A" control={<StyledRadio index={0} callBack= {callBack}/>} label="Answer A" />
        <FormControlLabel value="Answer B" control={<StyledRadio index={1} callBack={callBack} />} label="Answer B" />
        <FormControlLabel value="Answer C" control={<StyledRadio index={2} callBack={callBack}/>} label="Answer C" />
        <FormControlLabel value="Answer D" control={<StyledRadio index={3} callBack={callBack}/>} label="Answer D" />
      </RadioGroup>
    </FormControl>
  );
}
