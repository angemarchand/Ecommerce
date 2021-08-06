export const GETUsers = async () => {
    const response = await fetch('https://localhost:8000/api/users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    const users = await response.json();
    return users;
}

export const POSTUsers = async (name, email, plainPassword) => {
    const response = await fetch('https://localhost:8000/api/users', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            plainPassword: plainPassword
        })
    })
    const users = await response.json();
    return users;
}