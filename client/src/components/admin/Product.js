import { useState } from "react";

const AdminProduct = props => {

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [disabled, setDisabled] = useState(true);

    const postChange = async () => {
        setDisabled(true);
        if (window.confirm("Appliquer les modifications ?")) {
            console.log(name, description, price)
            const response = await fetch(`https://localhost:8000/api/products/1`, {
                method: "PATCH",
                headers: {

                    'Content-Type': 'application/merge-patch+json',
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    price: price
                })
            })
            console.log(response);
        }
    }

    // const activateInput = () => {
    //     setState({
    //         disabled: false
    //     })
    // }

    return (
        <tr>
            <th scope="col">{props.id}</th>
            <th scope="col">
                <input name="name" onChange={(e) => setName(e.target.value)} value={name} placeholder={props.name} disabled={disabled} />
            </th>
            <th scope="col">
                <input name="description" onChange={(e) => setDescription(e.target.value)} value={description} placeholder={props.description} disabled={disabled} />
            </th>
            <th scope="col">
                <input name="price" onChange={(e) => setPrice(e.target.value)} value={price} placeholder={props.price} disabled={disabled} />
            </th>
            <th scope="col">{props.created_at}</th>
            <th scope="col">{props.modified_at}</th>
            <th scope="col">
                {disabled ?
                    <button onClick={() => setDisabled(false)} className="btn btn-danger">modifier</button>
                    :
                    <button onClick={postChange} className="btn btn-success">confirmer</button>
                }
            </th>
        </tr >
    );
}

export default AdminProduct;