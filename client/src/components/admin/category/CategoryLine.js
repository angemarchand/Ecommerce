import AdminCategoryModal from "./CategoryModal"
import { DELETECategories } from "../../../services/api/Categories";

const AdminCategoryLine = props => {

    const del = async () => {
        const resp = await DELETECategories(props.id);
        document.location.reload();
    }

    return (
        <tr>
            <td scope="col" className="mt-4">{props.id}</td>
            <td scope="col">{props.name}</td>
            <td className="col-button" scope="col">
                <button type="button" className="btn btn-danger" onClick={() => del()}>
                    Delete
                </button>
            </td>
            <td>
                <AdminCategoryModal
                    id={props.id}
                    name={props.name}
                    description={props.description}
                    price={props.price}
                    created_at={props.created_at}
                    modified_at={props.modified_at}
                    stock={props.stock}
                />
            </td>
        </tr >
    );
}

export default AdminCategoryLine;