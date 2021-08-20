import { useEffect, useState } from "react";
import AdminProductTable from "../components/admin/product/ProductsTable";
import AdminCategoriesTable from "../components/admin/category/CategoriesTable";
import { MenuOpen } from '@material-ui/icons';
import { decodeToken, retrieveToken } from "../services/authentication/User";
import { isAdmin } from "../services/authentication/Admin";
import { useHistory } from "react-router";

const Admin = () => {

    const [active, setActive] = useState(false);
    const [content, setContent] = useState("products");
    const history = useHistory();

    const displayContent = () => {

        if (checkRoleAdmin()) {
            if (content === "products") return <AdminProductTable />
            if (content === "categories") return <AdminCategoriesTable />
        } else {
            history.push("/products");
        }
    }

    const checkRoleAdmin = () => {
        let token = retrieveToken();
        if(token){
            token = decodeToken(token.token);
            return isAdmin(token) ? true : false
        }
        return false;
    }

    return (
        <div className="wrapper">

            <nav id={active ? "sidebar" : "sidebarActive"}>
                <div className="sidebar-header">
                    <h3>Omega Admin</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className={content === "products" ? "linkActive" : null}>
                        <p className="button-sidebar" onClick={() => setContent("products")} >Products</p>
                    </li>
                    <li className={content === "categories" ? "linkActive" : null}>
                        <p className="button-sidebar" onClick={() => setContent("categories")} >Categories</p>
                    </li>
                </ul>
            </nav>

            <div id={active ? "contentActive" : "content"}>
                <nav id="navbarTop" className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button type="button" id="sidebarButton" onClick={() => active ? setActive(false) : setActive(true)} className="btn">
                            <MenuOpen />
                        </button>
                    </div>
                </nav>
                {
                    displayContent()
                }
            </div>

        </div>
    );
}

export default Admin;