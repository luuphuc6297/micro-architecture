import { Box, Skeleton } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

interface LazyLoadContainerProps {
    width: number | string;
    height: number | string;
}

export const LazyLoadContainer = ({ width, height }: LazyLoadContainerProps) => {
    return (
        <React.Fragment>
            <Box
                sx={{
                    bgcolor: grey[100],
                    p: 8,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Skeleton sx={{ bgcolor: 'grey.200' }} variant="rectangular" width={width} height={height} />
            </Box>
        </React.Fragment>
    );
};
