import { Search } from '@material-ui/icons';

const SearchBar = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <input id="search-bar-input" className="form-control me-2 rounded-0 w-75" type="" placeholder="À la recherche d'un produit, d'une catégorie, d'un animal de compagnie ?" aria-label="Search" />
                    <Search className="position-relative" id="search-icon"/>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;