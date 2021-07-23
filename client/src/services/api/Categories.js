export const GETCategories = async () => {
    const response = await fetch('https://localhost:8000/api/categories', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const categories = await response.json();
    return categories;
}

export const POSTCategories = async (name) => {
    if (window.confirm("Create a new category ?")) {
        const response = await fetch('https://localhost:8000/api/categories', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: name
            })
        })
        const product = await response.json();
        return product;
    }
}

export const DELETECategories = async (id) => {
    if (window.confirm("Delete this category ?")) {
        const response = await fetch(`https://localhost:8000/api/categories/${id}`, {
            method: "DELETE"
        })
    }
}