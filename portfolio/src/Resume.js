import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navabr from './Navbar';

const useStyle = makeStyles(theme => ({
    mainContiner: {
        background: '#233',
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        // '&:before': {
        //     content: "''",
        //     position: 'absolute',
        //     height: '100%',
        //     border: '1px solid tan',
        //     right: '40px',
        //     top: 1
        // },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        },

        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% -1px)',
                right: 'auto'
            }

        }
    },
    timelineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: '-0.625rem',
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderwidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },

    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "auto",
            "&:nth-of-type(2n)": {
                display: "none"
            }
        }
    },

    heading: {
        color: "tomato",
        padding: "3rem",
        textTransform: "uppercase"
    },

    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))




const Resume = () => {
    const classes = useStyle()


    return (
        <>
            <Navabr />
            <Box component='header' className={classes.mainContiner}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    Web Development Knowledge
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                        Front End
                </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5"
                            align="center"
                            className={classes.subHeading}>
                            Tools
                    </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            React, Angular, Express
                    </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            React-Router & NPM
                    </Typography>

                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                        2015
                </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5"
                            align="center"
                            className={classes.subHeading}>
                            HTML & Css
                    </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Bootstrap, Material ui, Tailwinds
                    </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Javascript ES5/ES6, JQuery, Typescript 
                    </Typography>

                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                        Back End
                </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5"
                            align="center"
                            className={classes.subHeading}>
                            Databases
                    </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            MongoDB, Django, MySQL, 
                    </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            {/* Lorem20 */}
                    </Typography>

                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timelineItem}`}>
                        2021
                </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5"
                            align="center"
                            className={classes.subHeading}>
                            tools
                    </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                        JSON Web Token, APIs, PyCharm
                    </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            {/* Lorem20 */}
                    </Typography>

                    </Box>
                </Box>
            </Box>
        </>
    )

}

export default Resume;