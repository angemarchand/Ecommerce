import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Grid} from "@material-ui/core";


// const products = [
    // { id:"1", name: "ange", picture: '',  description: "PC portable ", price: "120$" },
    // { id:"2", name: "lydie", picture: '', description: "Clavier", price: "30$" }
// ]


const MainProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts =  () => {
    const { data } = Axios.get("http://localhost:8000/api/products");
    const products = data;
    setProducts(products);
    console.log(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div>
            Filtre des produits par catégorie
      </div>
      <div>
          <ul>
            
            {products.map(item => (
              <li key={item.id}>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>
                  <img  src= {item.picture} alt= {item.name} />
                </div>
                <div>{item.description}</div>
                <div>{item.price} $</div>
              </li>
            ))}
          </ul>
      </div>

    </main>
  )
}
export default  MainProducts;