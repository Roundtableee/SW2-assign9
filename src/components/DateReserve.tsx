'use client';

import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';

export default function DateReserve() {
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={dateValue}
        onChange={(newValue) => setDateValue(newValue)}
        slotProps={{
          textField: { variant: 'standard' },
        }}
        
        
        slots={{
          textField: (params) => <TextField {...params} variant="standard" />,
        }}
        
      />
    </LocalizationProvider>
  );
}
