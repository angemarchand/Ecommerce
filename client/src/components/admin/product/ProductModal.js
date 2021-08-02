import { useEffect, useState, useRef } from "react";
import { PATCHProducts, POSTProducts, DELETEProducts } from "../../../services/api/Products";
import { POSTPicture } from "../../../services/api/Pictures";
import { Redirect } from "react-router-dom";


const AdminProductModal = props => {

    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [pictures, setPictures] = useState(null);
    const [stock, setStock] = useState(props.stock);
    const [fileLists, setFilesLists] = useState(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (fileLists.length) {
                const ftp = async () => {
                    const test = await fileListsToPictures();
                    setPictures(test);
                }
                ftp();
            }
        }
    }, [fileLists])

    const fileListsToPictures = async () => {
        let cache = [];
        let filePathsPromises = [];
        if (fileLists) {
            Array.from(fileLists).forEach(file => {
                filePathsPromises.push(toBase64(file));
            });
            const filePaths = await Promise.all(filePathsPromises);
            for (let i = 0; i < fileLists.length; i++) {
                cache.push({
                    name: fileLists[i].name,
                    src: filePaths[i]
                })
            }
        }
        if (pictures) {
            pictures.forEach(item => {
                if (cache.some(e => e.name != item.name)) {
                    cache.push({
                        name: item.name,
                        src: item.src
                    })
                }
            })
        }
        return cache;
    };

    const patch = async () => {
        const resp = await PATCHProducts(props.id, name, description, price, stock);
        // document.location.reload();
    }

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const post = async () => {
        console.log(props)
        const product = await POSTProducts(name, description, price, stock);
        if (pictures) {
            for (const item of pictures) {
                const resp = await POSTPicture(product.id, item.name, item.src);
              }
        }
    }

    const rmPictureFromTab = (idImg) => {

        console.log(pictures);
        const test = pictures.filter((image, id) => id !== idImg);
        console.log(test);

        setPictures(test)
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
                                <input type="file" multiple onChange={() => setFilesLists(document.getElementById('customFile').files)} className="custom-file-input ml-3" id="customFile" />
                                {pictures ?
                                    Array.from(pictures).map(item => {
                                        return <img className="m-2" id={item.name} key={item.name} name={item.name} src={item.src} style={{ width: "175px" }} onClick={(e) => rmPictureFromTab(e.target.id)} />
                                    })
                                    :
                                    null
                                }
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