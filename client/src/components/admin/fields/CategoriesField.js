import { useEffect, useState } from "react";
import { GETCategories } from "../../../services/api/Categories";

const CategoryField = (props) => {

    const [categoryName, setCategoryName] = useState("No category");
    const [idCategorySelected, setidCategorySelected] = useState(null);
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        async function getData() {
            let response = await GETCategories();
            response.unshift({name: ""});
            setCategories(response);
        }
        getData();
    }, [])

    useEffect(() => {
        if (props.selected) {
            setCategoryName(props.selected)
        }else{
            setCategoryName("")
        }
    }, [props.selected])

    const handleChange = async (e) => {
        if (e.target.selectedOptions[0].label !== "") {
            await setCategoryName(e.target.selectedOptions[0].label);
            const id = await getIdWithName(e.target.selectedOptions[0].label);
            props.handleId(id);
        }
    }

    const getIdWithName = (name) => {
        if (categories && categories.some(item => item.name === name)) {
            const obj = categories.filter(obj => {
                return obj.name === name
            })
            return obj[0].id;
        }
    }

    return (
        <div className="mb-3">
            <label htmlFor="inputState">Categories</label>
            <select value={categoryName} onChange={(e) => handleChange(e)} className="form-control mt-2">
                {
                    categories ? categories.map(item => {
                        return <option key={item.name} value={item.name}>{item.name}</option>
                    })
                        :
                        null
                }
            </select>
        </div>
    );
}

export default CategoryField;