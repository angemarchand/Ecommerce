import React, { useState } from "react";
import { GETToken, setToken } from "../services/authentication/User";
import { useHistory } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        const token = await GETToken(email, password)
        await setToken(token);
        history.push("/products");

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
                            <button onClick={() => handleSubmit()} type="submit">Se connecter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
