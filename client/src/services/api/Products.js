//// GET ALL ////
export const    GETProducts = async () => {
    const response = await fetch('https://localhost:8000/api/products', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const products = await response.json();
    return products;
}

//// GET ONE ////
export const GETProduct = async (id) => {
    const response = await fetch(`https://localhost:8000/api/products/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const product = await response.json();
    return product;
}

//// POST ONE ////
export const POSTProducts = async (name, description, price, stock, discount = null) => {
    if (window.confirm("Create a new product ?")) {
        const response = await fetch('https://localhost:8000/api/products', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price: parseInt(price, 10),
                stock: parseInt(stock, 10),
                discount: parseInt(discount, 10)
            })
        })
        const product = await response.json();
        return product;
    }
}

//// UPDATE ONE ////
export const PATCHProducts = async (id, body) => {
        const response = await fetch(`https://localhost:8000/api/products/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/merge-patch+json',
            },
            body
        })
        const product = await response.json();
        return product;
}

//// DELETE ONE ////
export const DELETEProducts = async (id) => {
    if (window.confirm("Valider la suppression du produit ?")) {
        const response = await fetch(`https://localhost:8000/api/products/${id}`, {
            method: "DELETE"
        })
        return response;
    }
}

//// GET MOST VISITED ////

export const GETMostVisitedProducts = async (id) => {
    const response = await fetch(`https://localhost:8000/api/products/mostVisited`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const products = await response.json();
    return products;
}

//// GET PRODUCT BY ID /////

export const GETProductById = async (link) => {
    const response = await fetch(`https://localhost:8000${link}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const product = await response.json();
    return product;
}