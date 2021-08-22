import { useEffect } from "react";
import ProductModal from "./ProductModal"

const AdminProductLine = props => {

    return (
        <tr>
            <td scope="col" className="mt-4">{props.id}</td>
            <td scope="col">{props.name}</td>
            <td scope="col">{props.price}</td>
            <td scope="col">{props.stock}</td>
            <td className="col-button" scope="col">
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#${props.name.replace(/\s+/g, '')}`}>
                    modifier
                </button>
            </td>
            <td>
            <ProductModal
                id={props.id} 
                name={props.name} 
                description={props.description} 
                price={props.price} 
                created_at={props.created_at} 
                modified_at={props.modified_at} 
                stock={props.stock}
                category={props.category}
                visits={props.visits}
                discount={props.discount}
                />
            </td>
        </tr >
    );
}

export default AdminProductLine;