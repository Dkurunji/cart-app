import React from 'react';
import { Fragment } from 'react';
import CartItem from './CartItem';

function NavList(props) {
    
    const products = props.products;
 
    return (
        <Fragment>
            {products.map((product) => { return <CartItem product={product} onIncrementQty={props.onIncrementQty} onDecrementQty={props.onDecrementQty} onDelete={props.onDelete} key={product.id}/>})}
        </Fragment>
    )
}

export default NavList
