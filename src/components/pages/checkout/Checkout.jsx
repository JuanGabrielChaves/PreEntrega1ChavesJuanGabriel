/** @format */

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Checkout.css";
const Checkout = () => {
    const [info, setInfo] = useState({
        nombre: "",
        telefono: "",
        email: "",
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info);
    };

    return (
        <div className="container">
            <form action="" onSubmit={handleSubmit} className="form">
                <TextField fullWidth="true" id="nombre" name="nombre" label="nombre" variant="outlined" onChange={handleChange} margin="normal" />
                <TextField fullWidth="true" id="telefono" name="telefono" label="telefono" variant="outlined" onChange={handleChange} margin="normal" />
                <TextField fullWidth="true" id="email" name="email" label="email" variant="outlined" onChange={handleChange} margin="normal" />
                <div className="btn">
                    <Button type="submit" variant="contained">
                        ENVIAR
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
