import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
const SuperCoin = () => {
    const [SuperCoin, setSuperCoin] = useState(0);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    useEffect(() => {
        if (totalAmount >= 100) {
            setSuperCoin(10);
        } else {
            setSuperCoin(0);
        }
    });
    return(
       <div className="super-coins" style={{textAlign:'center'}}>
        <h2 className="super-coins-title">Super Coins</h2>
        <p className="super-coins-info">You will earn {SuperCoin} super coins with this purchase.</p>
      </div>
    )
}
export default SuperCoin;