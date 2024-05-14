/** @format */
import "./ItemDetail.css";
import "../../common/themeStyles";
import { CounterContainer } from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
    return (
        <>
            <h1>{item.title}</h1>
            <div className="grid-container">
                <div className="addToCart">
                    <h2>$ {item.price?.toFixed(2)}.-</h2>
                    <div className="counterContainer">
                        <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
                    </div>
                </div>
                <div className="imgDetail">
                    <img src={item.img} alt={`imagen del libro: ${item.title}`} />
                </div>
                <div className="detail">
                    <h2>Descripción:</h2>
                    <h4> {item.description}</h4>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
