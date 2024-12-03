import theme from '@material-tailwind/react/theme'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { style } from 'framer-motion/client'
import React, { useState } from 'react'

const StyledToobar: any = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search: any = styled("div")(({ theme }: any) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons: any = styled(Box)(({ theme }: any) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToobar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Joachin DEV</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder='Search' />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src=""
                        onClick={() => setOpen(!open)}
                    />
                </Icons>
                <UserBox onClick={() => setOpen(!open)}>
                    <Avatar sx={{ width: 30, height: 30 }} src="" />
                    <Typography variant="h6">Joachin</Typography>
                </UserBox>
            </StyledToobar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby='demo-positioned-btn'
                open={open}
                onClose={() => setOpen(!open)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar