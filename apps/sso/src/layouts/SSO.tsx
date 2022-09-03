import { Banner, Header } from '@micro-architecture-coaching-cloud/ui';
import { Box, Container, Grid, Hidden, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface SSOProps {
    children: React.ReactElement;
    title: string;
    headerText?: string;
    redirectBtn?: string;
    onRedirect?: () => void;
}

const CustomTitle = styled(Typography)({
    marginBottom: 24,
});

const CustomGridContainer = styled(Grid)({});

const CustomGridItem = styled(Grid)(({ theme }) => ({
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
    },
}));

const CustomizedContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: theme.breakpoints.values.sm,
    },
}));

export function SSO({ headerText, children, redirectBtn, title, onRedirect }: SSOProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <CustomGridContainer container>
                <Hidden smDown>
                    <Grid item xs={4}>
                        <Banner />
                    </Grid>
                </Hidden>
                <Header headerText={headerText} redirectBtn={redirectBtn} onRedirect={onRedirect} />
                <CustomGridItem item xs={8}>
                    <CustomizedContainer maxWidth="sm">
                        <CustomTitle variant="h1">{title}</CustomTitle>
                        {children}
                    </CustomizedContainer>
                </CustomGridItem>
            </CustomGridContainer>
        </Box>
    );
}
