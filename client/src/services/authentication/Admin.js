export const isAdmin = (token) => {
    console.log(token)
    return token.roles[0] === "ROLE_ADMIN" ? true : false; 
}