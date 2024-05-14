/** @format */
import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, error }) => {
    return (
        <Grid container>
            {items.map(({ id, title, description, price, img }) => {
                return (
                    <Grid item key={id}>
                        <ProductCard title={title} description={description} price={price} img={img} id={id} />;
                    </Grid>
                );
            })}
            {error && <h2>{error.message}</h2>}
        </Grid>
    );
};

export default ItemList;
