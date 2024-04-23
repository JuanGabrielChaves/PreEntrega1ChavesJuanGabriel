/** @format */

import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, img, id }) => {
    return (
        <Grid container spacing={1} m={1}>
            <Grid item xs={11} m={0} width={325}>
                <Card sx={{ maxWidth: 350 }}>
                    <CardMedia sx={{ height: 500 }} image={img} component="img" alt={`imagen del libro ${title}`} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" height={30} mb={5}>
                            {title}
                        </Typography>

                        <Typography variant="h6">$ {price}.-</Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/itemDetail/${Number(id)}`}>
                            <Button size="small">Ver detalle</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProductCard;
