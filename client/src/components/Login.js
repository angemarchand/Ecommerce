import React, { useState } from "react";
import Axios from 'axios';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        
        const data = {
            email: email,
            password: password
        }

        Axios.post('http://localhost:40303/api/users', data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    return (
        <div id="form">
                <form onSubmit = {handleSubmit} method="POST">
                    <h2>Connexion</h2>

                    <div id="register">
                        <label for="email"> Email </label>
                        <input id="email" type="email" required onChange={e => setEmail(e.target.value)} 
                                placeholder="Entrer votre addresse mail"></input>

                        <label for="password"> Mot de passe </label>
                        <input id="password" type="password" required onChange={e => setPassword(e.target.value)} 
                                placeholder="Entrer votre mot de passe"></input>
                    </div>

                    <button type="submit">Se connecter</button>
                </form>
        </div>
    );       
  }
  export default Login;
