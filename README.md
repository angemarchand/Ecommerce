# SITE DE ECOMMERCE OMEGA GAMING

*OMEGA GAMING est un site Web de commerce de produits électroniques crée à l'aide des technologies symfony et de reactjs*


**INSTALLATION**

_Pour intaller l'application taper sur le terminal les commandes suivantes_
- _Dans le dossier server faire la commande **composer install**_
- _Dans le dossier client faire la commande **npm install**_

**EXECUTION**

Pour lancer le site il faut exécuter les commandes dans le terminal suivants:
- _Dans le dossier server sur le terminal taper **symfony server:start**._ 

    Aller dans son navigateur  et taper cette URL **http://localhost:8000/api**
- _Dans le dossier client sur le terminal taper **npm start**._ 

    Aller dans son navigateur  et taper cette URL **http://localhost:3000**

**TECHNOLOGIES**
**Framework symfony** 
_Côté  Back ou récuperation et insertion des données dans la base de données_

**API platform** 
_Protocole qui facilite la communication entre le coté client et le coté backend_

**Reactjs** 
_Pour le côté  client ou l'affichage dans le navigateur_




# PRESENTATION DU PROJET

Omega Gaming se décompose en deux parties :
1. Le front office ou côté client qui est la partie visible par les internautes.
    - home: c'est la vitrine du site, présente l'enseigne et ses produits **http://localhost:3000/**
    - products: présente tous les produits en stock **http://localhost:3000/products**
    - product: donne la description d'un produit et la fiche technique de celui-ci **http://localhost:3000/product?id=4**
    - register: contient un formulaire d'incription pour l'utilisateur **http://localhost:3000/users/register**



    ![register](./register.PNG)

    - login: contient un formulaire de connexion pour l'utilisateur **http://localhost:3000/users/login**




    ![login](./login.PNG)


2. Le back office ou l'espace d'administration qui est uniquement visible par l'administrateur.
    - Ici il pourra gérer le contenu et les fonctionnalités du site.
    
    - **Comment y accéder ?**
        - _Vous recevrez un e-mail pour vous confirmer que votre site est bien créé qui contiendra:_
            - Un indentifiant
            - Un mot de passe)
        - _Vous pouvez accéder à cette page en tapant sur la barre de recherche de votre navigateur l'url  suivante:  **http://localhost:3000/admin**_

    - **Les recommandations**
       - _Mettre des photos à fond blanc ou les images en format png transparent_




