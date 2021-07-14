import React, { useState } from "react";
import Axios from 'react-axios';

function Registration() {
    const url="";


const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
})

    function Submit (e){
        e.preventDefault();
        Axios.post('url', {
            name: data.name,
            email: data.email,
            password: data.name
        })
        .then(response => {
            console.log(response.data)
        })
    }
    function handleSubmit(e){
        const newData = {...data};
        newData[e.target.name] = e.target.value;
        setData(newData);
        console.log(newData);
    }


    return (
        <div id="form">
                <form onSubmit = {(e) => Submit}>
                    <h2> Inscription </h2>
                    <div id="register">
                        <label for="name"> Nom d'utilisateur </label>
                        <input id="name" type="text" onChange={(e) => handleSubmit(e)} value={data.name}
                                placeholder="Entrer votre nom d'utilisateur"></input>
                        <label for="email"> Email </label>
                        <input id="email" type="email" onChange={(e) => handleSubmit(e)} value={data.email}
                                placeholder="Entrer votre addresse mail"></input>
                        <label for="password"> Mot de passe </label>
                        <input id="password" type="password"  onChange={(e) => handleSubmit(e)} value={data.password} 
                                placeholder="Entrer votre mot de passe"></input>
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
        </div>
    );       
  }
  
  export default Registration;