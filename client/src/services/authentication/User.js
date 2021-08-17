export const GETToken = async (email, password) => {
    const response = await fetch(`https://localhost:8000/authentication_token`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    const token = await response.json();
    return token;
}

export const retrieveToken = () => {
    const token = localStorage.getItem('token');
    return JSON.parse(token);
}

export const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    return true;
}

export const getEmailFromToken = (token) => {
    const base64Url = localStorage.token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    let email = JSON.parse(window.atob(base64)).username;

    return email;
}