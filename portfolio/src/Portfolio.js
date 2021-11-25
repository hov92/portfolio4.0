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
                            <CardMedia component="img" alt="Project1" height="140" image="data:image/jpeg;base64,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" />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Entertainment Search
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This entertainment search was created using React and also Material-UI. This application uses the APIs from https://developers.themoviedb.org/. With this website users can search for their favorite movie or tv shows, see what is trending right now and watch a trailer from their selected movie or show. Users on the movies and tv shows page can select which genre they would like to view. The average viewer rating is located on the top right with averages of 7 and above in blue and less than 7 in red.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://demoentertainmentsearch.herokuapp.com/">
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
                                    SellIt!
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    SellIt! An Ecommerce Website where users can buy items that are put on for sale from other users. This app was created using MERN stack framework. Once users create an account they are free to shop and pay for their item and will receive their receipt via email. Also users can message Admin to become a Seller of products.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://sell--it.herokuapp.com/">
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
