import { useState } from "react";

const AdminProduct = props => {

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [stock, setStock] = useState(props.stock);
    const [disabled, setDisabled] = useState(true);

    const postChange = async () => {
        setDisabled(true);
        if (window.confirm("Appliquer les modifications ?")) {
            const response = await fetch(`https://localhost:8000/api/products/1`, {
                method: "PATCH",
                headers: {

                    'Content-Type': 'application/merge-patch+json',
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    price: price,
                    stock: stock
                })
            })
        }
    }

    return (
        <tr>
            <td scope="col">{props.id}</td>
            <td scope="col">{props.name}</td>
            <td scope="col">{props.price}</td>
            <td scope="col">{props.stock}</td>
            <td className="col-button" scope="col">
                <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    modifier
                </button>
            </td>
            <td>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form className="container">
                                    <div className="mb-3">
                                        <label className="form-label" for="name">Name</label>
                                        <input placeholder={props.name} type="text" id="name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea rows="10" placeholder={props.description} type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input placeholder={props.name} type="number" className="form-control" />
                                    </div>
                                    <div className="mb-3 custom-file">
                                        <label className="custom-file-label mr-3" for="customFile">Choose picture</label>
                                        <input type="file" className="custom-file-input ml-3" id="customFile" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-lg btn-success">Sauvegarder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr >
    );
}

export default AdminProduct;