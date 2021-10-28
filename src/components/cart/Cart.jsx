import React from 'react';
import classes from './Cart.module.css';
import Modal from '../ui/Modal';

function Cart(props) {
    const cartItems = [
        {
            id: 'c1',
            name: 'sushi',
            amount: 2,
            price: 12.99
        }
    ].map(item => {
        return <li>{item.name}</li>
    });
    return (
        <Modal onCartDeactivate={props.onCartDeactivate}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.67</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCartDeactivate}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;
