/** @format */

import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    paddingBottom: "1rem",
                }}>
                <Container maxWidth="lg">
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={12}>
                            <Link to={"/"} className="logoFooter">
                                <Typography color="black" variant="h5">
                                    The BookStore
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textSecondary" variant="subtitle1">
                                {`${new Date().getFullYear()} | React | CoderHouse | Juan Gabriel Chaves`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;
