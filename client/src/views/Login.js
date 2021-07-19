import React from "react";

function Login (){

    return (
        <div>
            <h1> Connection </h1>
            <label htmlFor="name"> Nom d'utilisateur </label>
                        <input id="name" type="text" required 
                                placeholder="Entrer votre nom d'utilisateur" />

                        <label htmlFor="email"> Email </label>
                        <input id="email" type="email" required 
                                placeholder="Entrer votre addresse mail" />

                        <label htmlFor="password"> Mot de passe </label>
                        <input id="password" type="password" required 
                                placeholder="Entrer votre mot de passe" />
        </div>
    )

}

export default Login;