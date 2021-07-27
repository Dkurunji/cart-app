import React, {useState} from 'react';
import { AiOutlinePlusCircle,AiOutlineMinusCircle,AiOutlineDelete } from 'react-icons/ai';
import './CartItem.css';

function CartItem(props) {
    const { url, price, qty, title } = props.product;
    
    return (
        <div className="cart-item-container">
            <img className="item-image" src={url} alt=""/>
            <div className="item-description">
                <h3 className="f1">{title}</h3>
                <span className="f1">Rs. {price}</span>
                <span>Qty: {qty}</span>
                <div>
                    <span className="increment" onClick={ () => {props.onIncrementQty(props.product)}}><AiOutlinePlusCircle size="1.5em"/></span>
                    <span className="decrement" onClick={ () => {props.onDecrementQty(props.product)}}><AiOutlineMinusCircle size="1.5em"/></span>
                    <span className="delete" onClick={ () => {props.onDelete(props.product)}}><AiOutlineDelete size="1.5em"/></span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
