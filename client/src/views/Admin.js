import { useEffect, useState } from "react";
import AdminProduct from "../components/admin/Product";

const Admin = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        async function getData() {
            await getProducts();
        }
        getData();
    }, [])

    const getProducts = async () => {
        const response = await fetch('https://localhost:8000/api/products', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        const products = await response.json();
        setProducts(products);
    }

    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">created_at</th>
                        <th scope="col">modified_at</th>
                    </tr>
                </thead>
                <tbody>
                    {products ? products.map(item => <AdminProduct key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} created_at={item.created_at} modified_at={item.modified_at} />) : <tr><th><p>Aucun produit enregistré</p></th></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;