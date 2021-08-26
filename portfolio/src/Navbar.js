import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Button,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import {
    // AssignmentInd,
    School,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import Footer from "./Footer"

//CSS STYLES
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [{
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
},
{
    listIcon: <School />,
    listText: "Knowledge",
    listPath: "/resume"
},
{
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
},
{
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts"
}]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    }

    const classes = useStyles()

    const sideList = slider => (

        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}>
            <Button href=" http://localhost:3000/Portfoleo">
                <Avatar className={classes.avatar} src="https://avatars.githubusercontent.com/u/76871974?s=400&u=75bca61cd6c4fb87aef51c20c9c3517d1efe78cf&v=4" alt="Dwayne Moji" />
            </Button>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem}
                            primary={lsItem.listText} />
                    </ListItem>
                ))}

            </List>
        </Box>
    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <MenuIcon style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>
                            Dwayne's Portfolio
                    </Typography>
                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                            <Footer />
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;