import  { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home"
import Products from "../views/Products";
import Registration from "../views/Registration";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/users/register" component={Registration} exact={true} />
                    <Route path="/products" component={Products} exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};
