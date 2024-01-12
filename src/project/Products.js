import React, { useEffect, useState } from "react";
import { useCart } from './CartContext';


function Products() {
    const { addToCart } = useCart();
    // console.log("addToCart",addToCart)
  
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                console.log(data)
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    function handleAdd(product) {
        
        addToCart(product)
        // console.log     ("product",product);
    }

    return (
        <div>
            <h2>Product list</h2>
            <table border="2px">
                <thead>
                    <tr>
                        
                        <th>Category</th>
                        <th>Title</th>
                        <th>Price</th>
                        
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((Product, i) => (
                        <tr key={i}>
                            <td><h3>{Product.category}</h3></td>
                            <td><h4>{Product.title}</h4></td>
                            <td><h4>{Product.price}</h4></td>
                            
                            <td><img src={Product.image} alt={Product.title} /></td>
                            <td><button onClick={() => handleAdd(Product)}>Add to Cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;



