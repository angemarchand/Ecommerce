import  { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home"
import Admin from "../views/Admin";
import Registration from "../views/Registration";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/users" component={Registration} exact={true} />
                    <Route path="/admin" component={Admin} exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
};
