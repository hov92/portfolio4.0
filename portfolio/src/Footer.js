import React from 'react'
import { makeStyles } from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
// import Facebook from '@material-ui/icons/Facebook';
import Mail from '@material-ui/icons/Mail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
root:{
"& .MuiBottomNavigationAction-root":{
    minwidth: 0,
    maxwidth: 250,
},
"& .MuiSvgIcon-root":{
fill: "tan",
"&:hover":{
    fill:"tomato",
    fontsize:"2rem"

}
}

}
})

const Footer = () => {
    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background:"#222"}}>
            <BottomNavigationAction
            href="mailto: dhov92@outlook.com"
            className={classes.root}
            style={{padding: 0}}
            icon={<Mail/>}/>

            <BottomNavigationAction
            href="https://www.linkedin.com/in/dwayne-hovington-016900145/"
            className={classes.root}
            style={{padding: 0}}
            icon={<LinkedIn/>}/>

            <BottomNavigationAction
            href="https://github.com/hov92"
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHub/>}/>
        </BottomNavigation>
    )
}

export default Footer
