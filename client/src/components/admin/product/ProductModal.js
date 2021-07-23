import { useState } from "react";
import { PATCHProducts, POSTProducts, DELETEProducts } from "../../../services/api/Products";
import { Redirect } from "react-router-dom";

const AdminProductModal = props => {

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [stock, setStock] = useState(props.stock);

    const patch = async () => {
        const resp = await PATCHProducts(props.id, name, description, price, stock);
        document.location.reload();
    }

    const post = async () => {
        const resp = await POSTProducts(name, description, price, stock);
        document.location.reload();
    }

    const del = async () => {
        const resp = await DELETEProducts(props.id);
        document.location.reload();
    }

    return (
        <div className="modal fade" id={props.name ? props.name.replace(/\s+/g, '') : "add-product"} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-body">
                        <form className="container">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input placeholder={props.name} onChange={(e) => setName(e.target.value)} type="text" id="name" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea rows="10" placeholder={props.description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Price</label>
                                <input placeholder={props.price} onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" />
                            </div>
                            <label className="custom-file-label" htmlFor="customFile">Choose picture</label>
                            <div className="mb-4 custom-file">
                                <input type="file" className="custom-file-input ml-3" id="customFile" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Stock</label>
                                <input placeholder={props.stock} onChange={(e) => setStock(e.target.value)} type="number" className="form-control" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="btn-del" className="btn btn-danger" data-bs-dismiss="modal" onClick={props.name ? () => del() : null}>Supprimer</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={props.name ? () => patch() : () => post()}>Sauvegarder</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProductModal;