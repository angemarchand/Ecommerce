export const POSTPicture = async (id_product, name, base64) => {
    const response = await fetch('https://localhost:8000/api/pictures', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            name: name,
            id_product: parseInt(id_product, 10),
            alt: null,
            imageB64: base64
        })
    })
    const picture = await response.json();
    return picture;
}

export const GETPicturesByProductId = async (id) => {
    const response = await fetch('https://localhost:8000/api/pictures/product?productId=' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const pictures = await response.json();
    return pictures;
}

//// DELETE ONE ////
export const DELETEPictures = async (id) => {
    const response = await fetch(`https://localhost:8000/api/pictures/${id}`, {
        method: "DELETE"
    })
}

