import { useEffect, useState, useRef } from "react";
import { PATCHProducts, POSTProducts, DELETEProducts } from "../../../services/api/Products";
import { POSTPicture, GETPicturesByProductId, DELETEPictures } from "../../../services/api/Pictures";
import { GETCategory } from "../../../services/api/Categories";
import CategoriesField from "../fields/CategoriesField";

const AdminProductModal = props => {

    const [name, setName] = useState(props.name ? props.name : null);
    const [description, setDescription] = useState(props.description);
    const [price, setPrice] = useState(props.price);
    const [pictures, setPictures] = useState(null);
    const [idCategory, setIdCategory] = useState(null);
    const [picturesToDb, setPicturesToDb] = useState(null);
    const [picturesFromDb, setPicturesFromDb] = useState(null);
    const [stock, setStock] = useState(props.stock);
    const [fileLists, setFilesLists] = useState(null);
    const [removePicture, setRemovePicture] = useState(null);
    const [productCategory, setProductCategory] = useState(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        let id;
        if (props.category && props.category.length) {
            id = props.category[0];
            id = id.substring(id.lastIndexOf('/') + 1);
            if (id) {
                async function getData() {
                    const response = await GETCategory(id);
                    setProductCategory(response.name);
                }
                getData();
            }
        }
    }, [props.category])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            const mountPictures = async () => {
                if (props.id) {
                    const response = await GETPicturesByProductId(props.id);
                    if (response.length) {
                        setPictures(response);
                        setPicturesFromDb(response);
                        setPicturesToDb(response);
                    }
                }
            }
            mountPictures();
        } else {
            if (fileLists) {
                if (fileLists.length) {
                    const filterData = async () => {
                        const responsePictures = await fileListsToPictures();
                        const newPicture = await rmDoubleInFileLists(responsePictures);
                        const newPatch = await rmDoubleInPicturesDb(responsePictures);
                        await setPicturesToDb(newPatch);
                        const response = await pushToPictures(newPicture);
                        await setPictures(response);
                    }
                    let test = filterData();
                    setPictures(test);
                }
            }
        }
    }, [fileLists])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (removePicture) {
                const response = rmPicture(removePicture);
                setPictures(response);
                setRemovePicture(null)
            }
        }
    }, [removePicture])

    const pushToPictures = (items) => {
        if (pictures) {
            let cache = pictures;
            items.forEach(item => {
                cache.push(item);
            })
            return cache;
        } else {
            return items;
        }
    }

    const rmDoubleInPicturesDb = async (data) => {
        let cache = data;
        if (picturesToDb) {
            picturesToDb.forEach(item => {
                if (cache.some(e => e.name === item.name)) {
                    let index = cache.findIndex(o => o.name === item.name)
                    cache.splice(index, 1);
                }
            })
        }
        return cache.length ? cache : data;
    }

    const rmDoubleInFileLists = async (data) => {
        let cache = data;
        if (picturesToDb) {
            picturesToDb.forEach(item => {
                if (cache.some(e => e.name === item.name)) {
                    let index = cache.findIndex(o => o.name === item.name)
                    cache.splice(index, 1);
                }
            })
        }
        if (pictures && cache.length) {
            pictures.forEach(item => {
                if (cache.some(e => e.name === item.name)) {
                    let index = cache.findIndex(o => o.name === item.name)
                    cache.splice(index, 1);
                }
            })
        }
        return cache.length ? cache : data;
    }

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
                    name: Array.from(fileLists)[i].name,
                    imageB64: filePaths[i]
                })
            }
        }
        return cache;
    };

    const patch = async () => {
        const body = {
            name: name,
            description: description,
            price: parseInt(price, 10),
            stock: parseInt(stock, 10),
            visits: parseInt(props.visits, 10)
        }
        if (idCategory !== null) body.categories = [`/api/categories/${idCategory}`]
        if (window.confirm("Apply modification ?")) {
            const test = await PATCHProducts(props.id, JSON.stringify(body));
        }
        if (picturesToDb) {
            if (picturesToDb !== picturesFromDb) {
                for (const item of picturesToDb) {
                    await POSTPicture(props.id, item.name, item.imageB64);
                }
            }
        }
        document.location.reload();
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
        const product = await POSTProducts(name, description, price, stock);
        if (pictures) {
            for (const item of pictures) {
                await POSTPicture(product.id, item.name, item.imageB64);
            }
        }
        document.location.reload();
    }

    const rmPictureInDb = async (name) => {
        if (picturesFromDb) {
            picturesFromDb.forEach(async item => {
                if (item.name === name) {
                    await DELETEPictures(item.id);
                }
            })
        }
    }

    const rmPicture = (name) => {
        rmPictureInDb(name);
        const index = pictures.findIndex(item => item.name === name);
        let cache = pictures;
        cache.splice(index, 1);
        return cache;
    }

    const del = async () => {
        await DELETEProducts(props.id);
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
                                <input type="file"
                                    multiple onChange={props.name ? () => setFilesLists(document.getElementById(`${props.name.replace(/\s+/g, '')}-customFile`).files)
                                        :
                                        () => setFilesLists(document.getElementById("add-product-customFile").files)}
                                    className="custom-file-input ml-3" id={props.name ? props.name.replace(/\s+/g, '') + "-customFile" : "add-product-customFile"} />
                                {pictures ?
                                    Array.from(pictures).map(item => {
                                        return <img alt={item.name} className="m-2" id={item.name} key={item.name} name={item.name} src={item.imageB64} style={{ width: "175px" }} onClick={(e) => setRemovePicture(e.target.name)} />
                                    })
                                    :
                                    null
                                }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Stock</label>
                                <input placeholder={props.stock} onChange={(e) => setStock(e.target.value)} type="number" className="form-control" />
                            </div>
                            <CategoriesField handleId={(e) => setIdCategory(e)} selected={productCategory} />
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