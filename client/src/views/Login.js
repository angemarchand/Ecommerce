import React, { useState } from "react";
import { GETToken, setToken } from "../services/authentication/User";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const token = await GETToken(email, password)
        const response = await setToken(token);
        console.log(response);
    }
        
    return (
        <div id="form">
                <form onSubmit = {handleSubmit} method="POST">
                    <h2>Connexion</h2>

                    <div id="register">
                        <label htmlFor="email"> Email </label>
                        <input id="email" type="email" required onChange={e => setEmail(e.target.value)} 
                                placeholder="Entrer votre addresse mail"></input>

                        <label htmlFor="password"> Mot de passe </label>
                        <input id="password" type="password" required onChange={e => setPassword(e.target.value)} 
                                placeholder="Entrer votre mot de passe"></input>
                    </div>

                    <button type="submit">Se connecter</button>
                </form>
        </div>
    );       
  }
  export default Login;
