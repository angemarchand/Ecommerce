import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import { POSTUsers } from "../services/api/Users";

function Registration() {
    const url="http://localhost:8000/api/users";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [plainPassword, setPlainPassword] = useState('');
    
    const history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await POSTUsers(name, email, plainPassword);
        history.push("/users/login");
    }

    
    
    return (
        <div id="registration-background">
            <div>
                <Navbar />
            </div>
            <div id="form">
                <form onSubmit = {handleSubmit}>
                    <h2> INSCRIPTION </h2>
                    <div id="register">
                        <label htmlFor="name"> Nom d'utilisateur </label>
                        <input id="name" type="text" required onChange={e => setName(e.target.value)} 
                                placeholder="Entrer votre nom d'utilisateur"></input>
                        <label htmlFor="email"> Email </label>
                        <input id="email" type="email" required onChange={e => setEmail(e.target.value)} 
                                placeholder="Entrer votre addresse mail"></input>
                        <label htmlFor="password"> Mot de passe </label>
                        <input id="password" type="password" required onChange={e => setPlainPassword(e.target.value)} 
                                placeholder="Entrer votre mot de passe"></input>
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <div>
                 <Footer />
            </div>
        </div>
    );       
  }
  
  export default Registration;