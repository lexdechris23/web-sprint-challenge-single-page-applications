import React from 'react'
function PizzaCheckout(props) {
const {confirm} = props
 return (
  <div>
    <h2>Order Confirmation:</h2>
    <p>Name: {confirm.name}</p>
    <p>Email: {confirm.email}</p>
    <p>Phone: {confirm.phone}</p>
    <p>Size: {confirm.size}</p>
    <p>Sauce: {confirm.sauce}</p>
    <p>Special Instructions: {confirm.textarea}</p>
</div>
)}
export default PizzaCheckout 