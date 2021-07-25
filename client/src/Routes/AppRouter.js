import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "../views/Admin";
import ListingProducts from "../views/ListingProducts";
import Registration from "../views/Registration";
import Login from "../views/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function AppRouter() {
    return (
        <BrowserRouter>
            <Fragment>
                <Navbar />
                <Switch>
                    <Route path="/admin" component={Admin} exact={true} />
                    <Route path="/users/register" component={Registration} exact={true} />
                    <Route path="/users/login" component={Login} exact={true} />
                    <Route path="/" component={ListingProducts} exact={true} />
                </Switch>
                <Footer />
            </Fragment>
        </BrowserRouter>
    );
};
