import { FormControl, OutlinedInput } from '@mui/material';
import { ListParams } from 'models';
import React, { ChangeEvent } from 'react';

interface SearchFieldProps {
    filter: ListParams;
    onSearchChange?: (newFilter: ListParams) => void;
}
export const SearchField = ({ onSearchChange }: SearchFieldProps) => {
    const searchRef = React.useRef<HTMLInputElement>();

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!onSearchChange) return;

        const newFilter: ListParams = {
            //@ts-ignore
            ...filter,
            name_like: e.target.value,
            _page: 1,
        };
        onSearchChange(newFilter);
    };

    return (
        <FormControl fullWidth variant="outlined" size="small">
            <OutlinedInput
                id="searchByName"
                label="Search by name"
                // @ts-ignore
                defaultValue={filter.name_like}
                onChange={handleSearchChange}
                inputRef={searchRef}
            />
        </FormControl>
    );
};
