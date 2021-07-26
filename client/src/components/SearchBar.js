
const SearchBar = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <input id="search-bar-input" className="form-control me-2 rounded-0" type="" placeholder="À la recherche d'un produit, d'une catégorie, d'un animal de compagnie ?" aria-label="Search" />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;