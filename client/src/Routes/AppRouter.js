import  { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home"
import Admin from "../views/Admin";
import ListingProducts from "../views/ListingProducts";
import Registration from "../views/Registration";
import Login from "../views/Login";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/admin" component={Admin} exact={true} />
                    <Route path="/users/register" component={Registration} exact={true} />
                    <Route path="/users/login" component={Login} exact={true} />
                    <Route path="/products" component={ListingProducts} exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};
