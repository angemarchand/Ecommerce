import React, { useState } from "react";
import Axios from 'axios';
import HeaderRegister from "../components/HeaderRegister";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom"
// import logo from "../assets/img/logo.png";

function Registration() {
    const url="https://localhost:8000/api/users";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [plainPassword, setPlainPassword] = useState('');
    
    const history = useHistory();

    const handleSubmit = e =>{
        e.preventDefault();
        Axios.post(url, {
            name: name,
            email: email,
            plainPassword: plainPassword
        })
        .then(response => {
            console.log(response);
            history.push("/users/login");
            return response;

        })
        .catch(error => {
            console.log(error);
            return error;
        })            
    }

    
    
    return (
        <div>
            <div>
                <HeaderRegister />
            </div>
            <div id="form">
                <form onSubmit = {handleSubmit}>
                    <h1> INSCRIPTION </h1>
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