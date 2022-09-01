import { SvgIconComponent } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Container, Grid, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
// import { useStore } from 'app/store';
import * as React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useLocation, useNavigate } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface INavigationItem {
    id: string;
    name: string;
    icon: SvgIconComponent;
    path: string;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    width: 48,
    height: 48,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        maxWidth: 'unset',
    },
}));

const StyledSettingWrapper = styled(Box)(({ theme }) => ({
    flexGrow: 0,
    display: 'flex',
    flexWrap: 'nowrap',
}));

const navigationItems: INavigationItem[] = [
    { id: 'journey', name: 'Journey', icon: HomeIcon, path: '/home' },
    { id: 'discussion', name: 'Discussion', icon: GroupsIcon, path: '/discussions' },
    { id: 'workbook', name: 'Workbooks', icon: OndemandVideoIcon, path: '/workbook' },
    { id: 'event', name: 'Event', icon: CalendarTodayIcon, path: '/schedule' },
    { id: 'conversations', name: 'Conversation', icon: ChatBubbleOutlineIcon, path: '/conversations' },
];

export const ResponsiveAppBar = () => {
    // const { user }: any = useStore();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const renderNavigateItems = () => {
        return navigationItems.map((item: INavigationItem) => (
            <StyledIconButton
                key={item.id}
                aria-label={item.path}
                color={item.path === location.pathname ? 'primary' : 'default'}
                onClick={() => navigate(`${item?.path}`, { replace: true })}
            >
                {<item.icon />}
            </StyledIconButton>
        ));
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', position: 'relative' }}>
            <StyledContainer>
                <Toolbar disableGutters>
                    <Grid container spacing={1} sx={{ flexWrap: 'nowrap' }}>
                        <Grid item sx={{ margin: 'auto 0' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <IconButton>
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href=""
                                    sx={{
                                        display: { xs: 'flex' },
                                        flexGrow: 1,
                                        fontSize: 18,
                                        fontWeight: 400,
                                        textDecoration: 'none',
                                        color: grey[500],
                                    }}
                                >
                                    Harvard Business School
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={10} sx={{ margin: 'auto 0' }}>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: {
                                        xs: 'none',
                                        md: 'flex',
                                        justifyContent: 'center',
                                        alightItems: 'center',
                                        gridGap: 38,
                                        gap: 38,
                                    },
                                }}
                            >
                                {renderNavigateItems()}
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                            sx={{ display: 'flex', margin: 'auto 0', justifyContent: 'flex-end', alignItems: 'center' }}
                        >
                            <StyledSettingWrapper>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                                <IconButton>
                                    <NotificationsIcon />
                                </IconButton>
                                <IconButton></IconButton>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        {/* <Avatar
                                            alt={`${user?.attributes['firstName']} ${user?.attributes['lastName']}`}
                                            src={user?.attributes['avatarUrl']}
                                        /> */}
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </StyledSettingWrapper>
                        </Grid>
                    </Grid>
                </Toolbar>
            </StyledContainer>
        </AppBar>
    );
};
