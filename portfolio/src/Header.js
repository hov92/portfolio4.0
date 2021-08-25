import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import Typed from "react-typed";

//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "35%",
        left: "38%",
        TRANSFORM: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src="https://avatars.githubusercontent.com/u/76871974?s=400&u=75bca61cd6c4fb87aef51c20c9c3517d1efe78cf&v=4" alt="Dwayne Moji" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Welcome to Dwayne's Portfolio"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={["Web Development", "React.js", "GraphQL", "MongoDB", "MySQL"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
            </Typography>
        </Box>
    )
}

export default Header;
