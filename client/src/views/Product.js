import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


function Product (){
    const {id} = useParams();
    const url = 'http://localhost:8000/api/product/{id}';
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProduct({
            loading: false,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProduct({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setProduct({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url]);

    if (product.error){
        return <div> <p style="color: red">Vous rencontrez une erreur, veuillez réessayer</p></div>
    }

    if (product.loading){
        return <div> <p style="color: red"> veuillez patienter </p></div>
    }
    if (product.data) {
        return (    
        <div>
            <h5> {product.data.name} </h5>
            <div>
                  <img  src= {product.data.imageUrl} alt={product.data.name} />
            </div>
            <div> <p>{product.data.description}</p></div>
            <div>{product.data.price} $</div>
        </div>
    
    )}
}