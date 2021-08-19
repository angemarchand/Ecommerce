import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "../views/Admin";
import ListingProducts from "../views/ListingProducts";
import OneProduct from "../views/OneProduct";
import Registration from "../views/Registration";
import Login from "../views/Login";
import Navbar from "../components/Navbar";
import Home from "../views/Home";
import Footer from "../components/Footer";
import Cart from "../views/Cart";




export default function AppRouter() {

    const [admin, setAdmin] = useState(null)

    useEffect(() => {

        const url = window.location.pathname;
        url === "/admin" ? setAdmin(true) : setAdmin(null);
        
    }, [])

    return (
        <BrowserRouter>
            <Fragment>
                {admin ? null : <Navbar />}
                <Switch>
                    <Route path="/admin" component={Admin} exact={true} />
                    <Route path="/users/register" component={Registration} exact={true} />
                    <Route path="/users/login" component={Login} exact={true} />
                    <Route path="/products" component={ListingProducts} exact={true} />
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/product" component={OneProduct} exact={true} />
                    <Route path="/cart/id" component={Cart} exact={true} />
                </Switch>
                {admin ? null : <Footer />}
            </Fragment>
        </BrowserRouter>
    );
};
