import { useState } from "react";
import ProductTable from "../components/admin/product/ProductTable";
import { MenuOpen } from '@material-ui/icons';

const Admin = () => {

    const [active, setActive] = useState(false)
    const [content, setContent] = useState("products")

    const displayContent = () => {
        if(content == "products") return <ProductTable />
        if(content == "categories") return <categoriesTable />
    }

    return (
        <div className="wrapper">

            <nav id={active ? "sidebar" : "sidebarActive"}>
                <div className="sidebar-header">
                    <h3>Omega Admin</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className={content == "products" ? "linkActive" : null}>
                        <a onClick={() => setContent("products")} >Products</a>
                    </li>
                    <li className={content == "categories" ? "linkActive" : null}>
                        <a onClick={() => setContent("categories")} >Categories</a>
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