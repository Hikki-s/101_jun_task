import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const MySelect = ({ setSelected, selected, option, labelName }) => {
    const handleOnChange = (event, value) => {
        setSelected(value);
    };

    return (
        <Autocomplete
            options={option}
            value={selected}
            onChange={handleOnChange}
            sx={{ width: '30%' }}
            renderInput={(params) => <TextField {...params} label={labelName} />}
        />
    );
};

export default MySelect;