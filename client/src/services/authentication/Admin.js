export const isAdmin = (token) => {
    return token.roles[0] === "ROLE_ADMIN" ? true : false; 
}