import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";
import SubTotal from "./components/SubTotal";
import Store from "./components/Store";

const items = [
  {
    id: 1,
    title: "apple 5 smart watch",
    url: "https://www.reliancedigital.in/medias/Apple-Watch-SE-GPS-44mm-Sport-Band-491901148-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDQ1MjN8aW1hZ2UvanBlZ3xpbWFnZXMvaDEzL2hlNi85Mzg0NjM0ODc1OTM0LmpwZ3w5MWVkOWIwNjFjMTMyMzFjNTE2NzAzNzYzY2NlNTlhNTlkZDQ0MzY1YzhhNTYwNTZjMTQ2MDRhNGUwOGE5NzA2",
    price: 30000,
    qty: 3,
  },
  {
    id: 2,
    title: "Washing Machine",
    url: "https://www.reliancedigital.in/medias/Bosch-WAK20165IN-Washing-Machines-491281226-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzU3NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDg1L2hiNi84OTYyODMwOTI1ODU0LmpwZ3w0MWIyM2VkNTNmYmNhYzE0NzJmMzgwYTY5YTMzOGMzYjExZjAwMmU1Y2IzN2FhMjY4Mjg5ODI0OWRjOGNlZTcz",
    price: 30000,
    qty: 1,
  },
];
class App extends React.Component{

    constructor(){
        super()
        this.state = {
            products: items,                
        }
    }   

   incrementQtyHandler = (product) => {   
       const {products} = this.state;
       const index = products.indexOf(product);       

       products[index].qty += 1;
       this.setState({
           products,
       })
    }
    
    decrementQtyHandler = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
       
       
        if (products[index].qty === 0) return;        
        
       products[index].qty -= 1;
       this.setState({
           products,
       })
    }
    
    deleteItemHandler = (product) => {
       
        const { products } = this.state;
        
        const newProducts = products.filter((item) => {
            return item !== product;
        })
    
        this.setState({
            products:newProducts,
        })        
    } 

    getTotalQty = () => {
        const { products } = this.state;
        let count = 0;

        products.forEach((item) => {
            count += item.qty;
        })
        return count;
    }

    getTotal = () => {
        const { products } = this.state;
        let total = 0;

        products.forEach((item) => {
            total += item.qty * item.price;
        })
        return total;
    }



    render() {       
        
        return (
            <div>
                <Navbar count={this.getTotalQty()}/>
                <CartList products={this.state.products} onIncrementQty={this.incrementQtyHandler} onDecrementQty={this.decrementQtyHandler} onDelete={this.deleteItemHandler}/>
                {this.getTotal() > 0 && <SubTotal subTotal={this.getTotal()} />}
                {this.state.products.length===0 && <h1 style={styles}>Cart is Empty!!</h1>}
                {/* <Store/> */}
            </div>
       )
   }
}

const styles = {   
    color: 'red',
    textAlign:'center',
    
}

export default App;
