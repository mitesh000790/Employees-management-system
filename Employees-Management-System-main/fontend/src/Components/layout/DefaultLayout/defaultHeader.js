import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppBar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';

import config from "../../../config";
import {Search, SearchIconWrapper, StyledInputBase} from "../../CommonComponents";
import {logOutUser} from "../../../Store/actions/action";

const DefaultHeader = ({setDrawerStatus, history}) => {

    const dispatch = useDispatch();

    const NAVIGATION_MENU_LIST = [
        {
            key: "notification",
            value: "Notification",
            icon: <NotificationsIcon/>,
            onClickHandler: () => {
            },
            color: "inherit",
            edge: "start",
            size: "large",
            badge: 0,
        },
        {
            key: "account",
            value: "Account",
            icon: <AccountCircle/>,
            onClickHandler: (e) => {
                setAccountMenu((accountMenu) => ({...accountMenu, data: e.currentTarget, isOpen: true}))
            },
            size: "large",
            edge: "start",
            badge: 0,
            color: "inherit",
        }
    ];

    const ACCOUNT_MENU_ITEM = [
        {
            key: "profile",
            value: "Profile",
            icon: <AccountCircle/>,
            size: "large",
            onClickHandler: () => {
                setAccountMenu(e => ({...e, isOpen: false}));
                history.replace("/profile");
            },
            edge: "start",
            badge: 0,
            color: "inherit",
        },
        {
            key: "logOut",
            value: "Log Out",
            icon: <LogoutIcon/>,
            size: "large",
            onClickHandler: () => {
                dispatch(logOutUser())
            },
            edge: "start",
            badge: 0,
            color: "inherit",
        }
    ];

    const [accountMenu, setAccountMenu] = useState({isOpen: false, data: null});
    const [mobileViewMenu, setMobileViewMenu] = useState({isOpen: false, data: null});

    const getMenuItemsList = (list) => list.map(eachIcon => <MenuItem onClick={eachIcon.onClickHandler}
                                                                      key={eachIcon.key}>
            <IconButton size={eachIcon.size}
                        aria-label={eachIcon.key}
                        key={eachIcon.key} edge={eachIcon.edge}
                        disableFocusRipple={true}
                        disableRipple={true}
                        color={eachIcon.color}>
                <Badge badgeContent={eachIcon.badge} color="error">
                    {eachIcon.icon}
                </Badge>
            </IconButton>
            <p>{eachIcon.value}</p>
        </MenuItem>
    );

    const closeAccountMenu = () => {
        setAccountMenu(() => ({data: null, isOpen: false}));
    };
    const closeMobileViewMenu = () => {
        setMobileViewMenu(() => ({data: null, isOpen: false}));
    };
    const drawerStatusSetHandler = () => {
        setDrawerStatus(drawerStatus => ({...drawerStatus, isOpen: !drawerStatus.isOpen}));
    };

    useEffect(() => {
        drawerStatusSetHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <AppBar sx={{
        backgroundColor: `var(--main)`,
        zIndex: (theme) => theme.zIndex.drawer + 1
    }} id={"AppBar"} position={"relative"}>
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{mr: 2}}
                        onClick={drawerStatusSetHandler}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{display: {xs: 'none', sm: 'block'}}}>
                {config.APPLICATION_NAME}
            </Typography>
            <Box sx={{flexGrow: 1}}/>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{'aria-label': 'search'}}/>
            </Search>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                {
                    NAVIGATION_MENU_LIST.map(eachIcon => <IconButton size={eachIcon.size} aria-label={eachIcon.key}
                                                                     key={eachIcon.key}
                                                                     onClick={eachIcon.onClickHandler}
                                                                     color={eachIcon.color}>
                            <Badge badgeContent={0} color="error">
                                {eachIcon.icon}
                            </Badge>
                        </IconButton>
                    )
                }
            </Box>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                <IconButton size="large" aria-label="show more" aria-haspopup="true" color="inherit"
                            onClick={(e) => {
                                setMobileViewMenu((data) => ({...data, data: e.currentTarget, isOpen: true}))
                            }}>
                    <MoreIcon/>
                </IconButton>
            </Box>
            <Menu open={accountMenu.isOpen}
                  anchorEl={accountMenu.data}
                  onClose={closeAccountMenu}
                  anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
                {getMenuItemsList(ACCOUNT_MENU_ITEM)}
            </Menu>
            <Menu open={mobileViewMenu.isOpen}
                  anchorEl={mobileViewMenu.data}
                  onClose={closeMobileViewMenu}
                  anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
                {getMenuItemsList(NAVIGATION_MENU_LIST)}
            </Menu>
        </Toolbar>
    </AppBar>
};

export default DefaultHeader;