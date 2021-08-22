import jwt_decode from "jwt-decode";

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
    let email = jwt_decode(token.token);
    return email.username;
}