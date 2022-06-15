import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { SxProps } from '@mui/system';

export interface SelectOption {
  description: string;
  value: string | number;
}

export interface SelectProps {
  id?: string;
  label: string;
  options: SelectOption[];
  onChange: (value: string | number) => void;
  value: string | number;
  sx?: SxProps;
}

export const Select = ({
  id,
  label,
  options,
  value,
  onChange,
  sx,
}: SelectProps) => {
  const componentId = id || label.replace(/[\s]+/, '_');
  return (
    <TextField
      select
      id={componentId}
      label={label}
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ width: '100%', ...(sx || {}) }}>
      {options.map((option) => (
        <MenuItem key={option.description} value={option.value}>
          {option.description}
        </MenuItem>
      ))}
    </TextField>
  );
};
