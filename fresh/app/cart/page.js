import {age , name} from './data.js'
let Basket = ['Tomatoes', 'Pasta']

export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명 {age}</p>
          <p>$40 {name}</p>
          <p>1개</p>
        </div>
        <CartItem product={Basket[0]}/>
        <CartItem/>
    </div>
    )
}


function CartItem(props) {
    return(
        <div className="cart-item">
        <p>상품명 {props.product} </p>
        <p>$40</p>
        <p>1개</p>
      </div>
 

    )
}