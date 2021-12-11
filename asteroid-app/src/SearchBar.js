import "./SearchBar.css";

const SearchBar = props => {
    return (
        <div className="search-container">
            <form className="search-form">
                <input type="text" placeholder="Enter the start date in YYYY-MM-DD."/>
                <input type="text" placeholder="Enter the end date in YYYY-MM-DD."/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default SearchBar;