import { useEffect, useState } from "react";
import AdminCategoryLine from "./CategoryLine";
import AdminCategoryModal from "./CategoryModal"
import {GETCategories} from "../../../api/Categories"

const CategoriesTable = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        async function getData() {
            setCategories(await GETCategories());
            console.log(categories)
        }
        getData();
    }, [])

    return (
        <div className="container-fluid">
            <AdminCategoryModal />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th className="col-button" scope="col">
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#add-category">
                                Ajouter
                            </button>
                        </th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {categories ?
                        categories.map(item => <AdminCategoryLine
                            key={item.id}
                            id={item.id}
                            name={item.name}
                        />)
                        :
                        <tr><th><p>No data</p></th></tr>}
                </tbody>
            </table>
        </div>
    );
}

export default CategoriesTable;