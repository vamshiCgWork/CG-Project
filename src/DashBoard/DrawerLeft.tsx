import React from 'react'
import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { isTemplateLiteral } from 'typescript';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

interface Props {
    leftDraw: boolean,
    setLeftDraw: React.Dispatch<React.SetStateAction<boolean>>
}


const listArr = ['Inbox', 'Starred', 'Send email', 'Drafts']
export default function DrawerLeft({ leftDraw, setLeftDraw }: Props) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setLeftDraw(open);
            };
    const listNames = <Box
        sx={{ width: 350, p: 1.5 }}
        role="presentation"
    //onClick={toggleDrawer(false)}
    //onKeyDown={toggleDrawer(false)}
    >
        <List
            subheader={<ListSubheader
                sx={{
                    fontWeight: 800,
                    paddingLeft: 0,
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center'
                }}
                component="div"
            >
                <ArrowBackIcon sx={{ mr: 1 }} onClick={toggleDrawer(false)} />
                MENU</ListSubheader>}>
            <ListItem button disabled sx={{ backgroundColor: 'lightblue' }} >
                <ListItemText primary='DashBoard' />
            </ListItem>
        </List>
        <List disablePadding>
            {listArr.map((text, index) => (
                <ListItem button key={text} >
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <ListItemButton onClick={handleClick} >
            <ListItemText primary="Inbox" color='red' />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItemButton>
            </List>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Archived" />
                </ListItemButton>
            </List>
        </Collapse>
    </Box>
    return (<Drawer
        anchor='left'
        open={leftDraw}
        onClose={toggleDrawer(false)}
    >
        {listNames}
    </Drawer>)
}
