import React from 'react'
import { makeStyles } from "@material-ui/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import Navbar from "./Navbar"
// import project1 from "/Users/dwaynehovington/Desktop/Portfoleo/portfoleo/src/budgettracker.png"
// import project2 from "/Users/dwaynehovington/Desktop/Portfoleo/portfoleo/src/BuddyFinderBanner.jpg"
// import project3 from "/Users/dwaynehovington/Desktop/Portfoleo/portfoleo/src/GroGroGro.jpeg"
// import project4 from "/Users/dwaynehovington/Desktop/Portfoleo/portfoleo/src/pypcopy.jpeg"


const useStyles = makeStyles({
    mainContainer: {
        background: "#223",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" >
                {/* Project1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project1" height="140" image="https://yt3.ggpht.com/Lj-sIXJG4nVnmzL6YHizTXKsZTiJ1qyzmTKyT-AxTxejLfNDlGPGjldoBnhnF8bD7cdiGmpA3yI=s900-c-k-c0x00ffffff-no-rj" />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Futube
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    CSS based Youtube clone design by React and Material UI
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://futube-react.herokuapp.com/">
                                Live Demo
    </Button>
                        </CardActions>

                    </Card>
                </Grid>

                {/* Project2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project2" height="140" image="https://github.com/smakela13/project-buddy-finder/blob/main/assets/images/Buddy_Finder.jpg?raw=true" />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Buddy Finder
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Buddy Finder is a website designed to find loving homes for abandoned pets.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://smakela13.github.io/project-buddy-finder/">
                                Live Demo
    </Button>
                        </CardActions>

                    </Card>
                </Grid>
                {/* Project3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project3" height="140" image="https://goop-img.com/wp-content/uploads/2021/01/iStock-1157106624.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    GroGroGro
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                web applications that ease the pain of remembering family household grocery list. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://grogrogro.herokuapp.com/">
                                Live Demo
    </Button>
                        </CardActions>

                    </Card>
                </Grid>
                {/* Project4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project4" height="140" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMJfkmS6Gj819Wddg1qQu8Ac0EG0RzPgw-g&usqp=CAU" />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Pick Your Poison
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Choose how to enjoy your night
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://pyp-react-4.herokuapp.com/">
                                Live Demo
    </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio;
