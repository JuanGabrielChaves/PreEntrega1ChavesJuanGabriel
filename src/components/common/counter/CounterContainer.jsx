/** @format */

import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No puede ser menos que 1",
            });
        }
    };

    let objectProps = {
        restar,
        sumar,
        contador,
        onAdd,
    };

    return <CounterPresentacional {...objectProps} />;
};
