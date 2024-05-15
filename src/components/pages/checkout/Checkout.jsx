/** @format */

import { Button, TextField } from "@mui/material";
import "./Checkout.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
const Checkout = () => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [order, setOrder] = useState({});
    const [error, setError] = useState(null);
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
        onSubmit: async (values) => {
            try {
                let obj = {
                    buyer: values,
                    items: cart,
                    total: total,
                };
                let ordersCollection = collection(db, "orders");
                const docRef = await addDoc(ordersCollection, obj);
                setOrderId(docRef.id);

                const refDoc = doc(collection(db, "orders"), docRef.id);
                const ordenDeCompra = await getDoc(refDoc);
                setOrder({ id: ordenDeCompra.id, ...ordenDeCompra.data() });
                console.log(order);

                cart.forEach((product) => {
                    let productRef = doc(db, "products", product.id);
                    updateDoc(productRef, { stock: product.stock - product.quantity });
                });

                clearCart();
            } catch (error) {
                setError(error);
            }
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Este campo es obligatorio").min(3, "Mínimo 3 caracteres"),
            telefono: Yup.string().required("Este campo es obligatorio").min(8, "Mínimo 8 caracteres"),
            email: Yup.string().email("Debe ser un correo válido").required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
    });
    console.log(order);
    return (
        <>
            {orderId ? (
                <>
                    <h1>Orden de compra:</h1>
                    <div className="contactData">
                        <h4 id="title">Datos del comprador:</h4>
                        <h4>Nombre: {order.buyer.nombre}</h4>
                        <h4>Telefono: {order.buyer.telefono}</h4>
                        <h4>Email: {order.buyer.email}</h4>
                    </div>
                    <div className="products">
                        {order.items.length > 0 && (
                            <div className="listContainer">
                                <div>Descripción del Producto</div>
                                <div>Precio</div>
                                <div>Cantidad</div>
                            </div>
                        )}
                        {order.items.map((product) => (
                            <div className="itemContainer" key={product.id}>
                                <h4>{product.title}</h4>
                                <h4>$ {product.price?.toFixed(2)}</h4>
                                <h4>{product.quantity}</h4>
                            </div>
                        ))}
                    </div>
                    <h3>Total: $ {order.total.toFixed(2)}</h3>
                    <h4>ID de la operación: {order.id}</h4>
                    <h2>Muchas gracias por su compra !</h2>
                    <h5>Conserve el número de ID de la operación</h5>
                </>
            ) : (
                <>
                    <h3>Para finalizar la compra ingrese los datos de contacto</h3>
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
