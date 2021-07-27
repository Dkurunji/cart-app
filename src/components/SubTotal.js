import React from 'react'

function SubTotal(props) {
    return (
        <div className="subtotal-container" style={styles}>
            <span>Total Price : {props.subTotal}.00 Rs</span>
        </div>
    )
}


const styles = {
    backgroundColor: 'grey',
    padding: 10,
    textAlign: 'end',
    fontSize:25,
}

export default SubTotal;
