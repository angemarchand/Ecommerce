import React, { useState } from "react";
import { GETToken, setToken } from "../services/authentication/User";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = await GETToken(email, password)
        const response = await setToken(token);
        console.log(response);
    }

    return (
        <div id="registration-background" className="container-fluid vh-100">
            <div className="row g-0 h-100 align-items-center justify-content-center">
                <div className="col-sm-6 w-75">
                    <div id="form" className="card p-4 mx-auto">
                        <div className="card-body">
                            <div className="card-title">
                                <h2>Connexion</h2>
                            </div>
                            <label htmlFor="email"> Email </label>
                            <input id="email" type="email" required onChange={e => setEmail(e.target.value)}
                                placeholder="Entrer votre addresse mail"></input>

                            <label htmlFor="password"> Mot de passe </label>
                            <input id="password" type="password" required onChange={e => setPassword(e.target.value)}
                                placeholder="Entrer votre mot de passe"></input>
                            <button onClick={() => handleSubmit} type="submit">Se connecter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
