import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { POSTUsers } from "../services/api/Users";

function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [plainPassword, setPlainPassword] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        const response = await POSTUsers(name, email, plainPassword);
        history.push("/users/login");
    }



    return (
        <div id="registration-background" className="container-fluid vh-100">
            <div className="row g-0 h-100 align-items-center justify-content-center">
                <div className="col-sm-6 w-75">
                    <div id="form" className="card p-4 mx-auto">
                        <div className="card-body">
                            <div className="card-title">
                                <h2>Inscription</h2>
                            </div>
                            <label htmlFor="email"> Nom d'utilisateur </label>
                            <input id="email" type="email" required onChange={e => setName(e.target.value)}
                                placeholder="Entrer votre nom d'utilisateur">
                            </input>

                            <label htmlFor="email"> Email </label>
                            <input id="email" type="email" required onChange={e => setEmail(e.target.value)}
                                placeholder="Entrer votre addresse mail">
                            </input>

                            <label htmlFor="password"> Mot de passe </label>
                            <input id="password" type="password" required onChange={e => setPlainPassword(e.target.value)}
                                placeholder="Entrer votre mot de passe">
                            </input>
                            <button onClick={() => handleSubmit()}>S'inscrire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;