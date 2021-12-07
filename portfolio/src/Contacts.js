import React from 'react'
import { makeStyles, withStyles } from "@material-ui/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core"
// import SendIcon from "@material-ui/icons/Send"
import Mail from '@material-ui/icons/Mail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHub from '@material-ui/icons/GitHub';
import Navbar from "./Navbar"

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        margin: "5rem",
        color: "tomato",
        borderColor: "tomato",
    }
}))

// eslint-disable-next-line
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan"
            }
        }

    }
})(TextField);


const Contacts = () => {
    const classes = useStyles()
    return (
        <Box component='div' style={{ background: "#233", height: "100vh" }}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant='h5' style={{ color: "tomato", textAlign: "center", textTransform: "uppercase" }}>
                        hire or contact me...
                    </Typography>
                    <Button className={classes.button}
                        variant="outlined"
                        fullwidth={true}
                        size="large"
                        href="https://www.linkedin.com/in/dwayne-hovington-016900145/"
                        >
                        <LinkedIn />
                    </Button>

                    <Button className={classes.button}
                        variant="outlined"
                        fullwidth={true}
                        size="large"
                        href="https://github.com/hov92"
                        >
                        <GitHub />
                    </Button>

                    <Button className={classes.button}
                        variant="outlined"
                        fullwidth={true}
                        size="large"
                        href="mailto: dhov92@outlook.com"
                        >
                        <Mail />
                    </Button>

                    <Button className={classes.button}
                        variant="outlined"
                        fullwidth={true}
                        size="large"
                        href="https://docs.google.com/document/d/19sMzAAO3XvRv5wyoBV8rAD4sH87xsLGG/edit?usp=sharing&ouid=113712017206958807147&rtpof=true&sd=true"
                        >
                        <ArticleIcon />
                            RESUME
                    </Button>


                    {/* <InputField fullwidth="true" label="Name" variant="outlined" inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
                    <br />
                    <InputField fullwidth="true "label="Email" variant="outlined" inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
                    <br />
                    <InputField fullwidth="true" label="Company name" variant="outlined" inputProps={{ style: { color: "white" } }} margin="dense" size="medium" /> */}
                    
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
