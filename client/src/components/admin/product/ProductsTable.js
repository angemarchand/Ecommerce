import { useEffect, useState } from "react";
import AdminProductLine from "./ProductLine";
import ProductModal from "./ProductModal"
import {GETProducts} from "../../../services/api/Products"

const AdminProductTable = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        async function getData() {
            setProducts(await GETProducts());
        }
        getData();
    }, [])

    return (
        <div className="container-fluid">
            <ProductModal />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">STOCK</th>
                        <th className="col-button" scope="col">
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#add-product">
                                Ajouter
                            </button>
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {products ?
                        products.map(item => <AdminProductLine
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            created_at={item.created_at}
                            modified_at={item.modified_at}
                            stock={item.stock}
                            category={item.categories}
                        />)
                        :
                        <tr><th><p>No data</p></th></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default AdminProductTable;