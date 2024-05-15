/** @format */

import { Button, TextField } from "@mui/material";
import "./Checkout.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
const Checkout = () => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    let total = getTotalPrice();

    const [info, setInfo] = useState({
        nombre: "",
        telefono: "",
        email: "",
    });
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: info,
        onChange: (event) => {
            let { name, value } = event.target;
            setInfo({ ...info, [name]: value });
        },
        onSubmit: (values) => {
            // event.preventDefault();
            let obj = {
                buyer: values,
                items: cart,
                total: total,
            };
            let ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, obj)
                .then((res) => setOrderId(res.id))
                .catch((error) => console.log(error));
            cart.forEach((product) => {
                let refDoc = doc(db, "products", product.id);
                updateDoc(refDoc, { stock: product.stock - product.quantity });
            });

            clearCart();
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("este campo es obligatorio").min(3, "minimo 3 caracteres"),
            telefono: Yup.string().required("este campo es obligatorio").min(8, "minimo 8 caracteres"),
            email: Yup.string().email("debe ser mail valido").required("este campo es obligatorio"),
        }),
        validateOnChange: false,
    });

    return (
        <>
            {orderId ? (
                <h3>Su ID es: {orderId}</h3>
            ) : (
                <>
                    <h3>Para finalizar ingrese los datos de contacto</h3>
                    <div className="container">
                        <form action="" onSubmit={handleSubmit} className="form">
                            <TextField className="inputField" fullWidth={true} id="nombre" name="nombre" label="nombre" variant="outlined" onChange={handleChange} margin="dense" error={errors.nombre ? true : false} helperText={errors.nombre} />
                            <TextField className="inputField" fullWidth={true} id="telefono" name="telefono" label="telefono" variant="outlined" onChange={handleChange} margin="dense" error={errors.telefono ? true : false} helperText={errors.telefono} />
                            <TextField className="inputField" fullWidth={true} id="email" name="email" label="email" variant="outlined" onChange={handleChange} margin="dense" error={errors.email ? true : false} helperText={errors.email} />
                            <div className="btn">
                                <Button type="submit" variant="contained">
                                    ENVIAR
                                </Button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </>
    );
};

export default Checkout;
