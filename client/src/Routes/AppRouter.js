import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "../views/Admin";
import ListingProducts from "../views/ListingProducts";
import Registration from "../views/Registration";
import Login from "../views/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// useEffect(() => {
    
// }, [])
// console.log(window.location.pathname);

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Fragment>
                <Navbar />
                <Switch>
                    <Route path="/admin" component={Admin} exact={true} />
                    <Route path="/users/register" component={Registration} exact={true} />
                    <Route path="/users/login" component={Login} exact={true} />
                    <Route path="/products" component={ListingProducts} exact={true} />
                    <Route path="/" component={ListingProducts} exact={true} />
                </Switch>
                <Footer />
            </Fragment>
        </BrowserRouter>
    );
};
