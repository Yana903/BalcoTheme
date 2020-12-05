import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles (theme => ({
  formControl: {
    margin: theme.spacing (0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing (0),
    color: '#fff',
    '&::before': {
      border: 'none'
    },
    '&:hover': {
      border: 'none'
    }
  },
  phonesBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  phones: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
}));

export default function SimpleSelect () {
  const classes = useStyles();
  const [phone, setPhone] = React.useState ('');

  const handleChange = event => {
    setPhone (event.target.value);
  };

  return (
    <div className={classes.phonesBox}>
      <div className={classes.phones}>
        <PhoneIphone style={{color:'#fff'}}/>
        <FormControl className={classes.formControl}>
          <Select
            value={phone}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{'aria-label': 'Without label'}}
          >
            <MenuItem value="">
              <em>+380(50)302-55-22</em>
            </MenuItem>
            <MenuItem value={20}>+380(57)717-61-17</MenuItem>
            <MenuItem value={30}>+380(57)717-50-27</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* <Button variant="contained" color="primary" marginLeft="20px">
        Заказать звонок
      </Button> */}
    </div>
  );
}
