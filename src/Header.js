import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import PizzaForm from "./PizzaForm";
import "./App.css";



function PizzaHeader() {
return (<Router>
  
  <div className="body">
    
    <div className="navBar">
      
      <div className="link1">
        <h1>PizzaLand</h1>
        <Link to="/">Home</Link>
    </div>
     </div>
     <div className="link2">
        <Link to="/Form">Place Order</Link>
        <Route path="/Form">
        <PizzaForm/>
      </Route>
      </div>
     

</div>
   </Router>
   );}
export default PizzaHeader 