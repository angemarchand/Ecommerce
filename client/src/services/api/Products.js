//// GET ALL ////
export const GETProducts = async () => {
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
export const POSTProducts = async (name, description, price, stock) => {
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
                stock: parseInt(stock, 10)
            })
        })
        const product = await response.json();
        return product;
    }
}

//// UPDATE ONE ////
export const PATCHProducts = async (id, name, description, price, stock, visits) => {
    console.log(id, name, description, price, stock, visits);
    if (window.confirm("Apply modification ?")) {
        const response = await fetch(`https://localhost:8000/api/products/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/merge-patch+json',
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price: parseInt(price, 10),
                stock: parseInt(stock, 10),
                visits: parseInt(visits, 10)
            })
        })
        const product = await response.json();
        return product;
    }
}

// ADD VISITS //

export const PATCHProductVisits = async (id, visits) => {
    // console.log(id, visits);
    const response = await fetch(`https://localhost:8000/api/products/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/merge-patch+json',
        },
        body: JSON.stringify({
            visits: parseInt(visits, 10)
        })
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
    }
}

//// GET MOST VISITED ////

export const GETMostVisitedProducts = async (id) => {
    const response = await fetch(`https://localhost:8000/api/products/mostVisited?page=2`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const products = await response.json();
    return products;
}