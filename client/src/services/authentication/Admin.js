export const isAdmin = (token) => {
    return token.roles == "admin" ? true : false; 
}