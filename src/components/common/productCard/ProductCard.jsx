/** @format */

import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, img, id }) => {
    return (
        <Grid container rowSpacing={0} columnSpacing={{ xs: 2, sm: 5, md: 7 }}>
            <Grid item width={325}>
                <Card sx={{ width: 250, margin: "1rem auto" }}>
                    <CardMedia image={img} component="img" alt={`imagen del libro ${title}`} sx={{ height: "100%" }} />
                    <CardContent>
                        <Typography>{title}</Typography>
                    </CardContent>
                    <Typography ml={2} fontWeight={"bold"}>
                        $ {price?.toFixed(2)}.-
                    </Typography>
                    <CardActions>
                        <Link to={`/itemDetail/${id}`}>
                            <Button size="small">Ver detalle</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProductCard;
