import "./SearchBar.css";
import Asteroid from './Asteroid.js';

const SearchBar = props => {
    const handleSubmit = event => {
        event.preventDefault();
        props.setIsSearching(true);
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${props.start}&end_date=${props.end}-08&api_key=yfJmwR0jhJqgSdDwQAYv8tSBjOtL2OYaB6bZMlQ5`)
            .then(res => res.json())
            .then(data => {
                props.setIsSearching(false);
                let list = [];
                for (const key in data.near_earth_objects) {
                    let day = data.near_earth_objects[key];
                    for (let k = 0; k < day.length; k++) {
                        let a = new Asteroid(
                            day[k].id, 
                            day[k].absolute_magnitude_h, 
                            day[k].is_potentially_hazardous_asteroid
                        );
                        list.push(a);
                    }
                }
                list.length ? props.setAsteroidList(list) : alert("No asteroids found.");
            })
            .catch(err => {
                props.setIsSearching(false);
                alert("There was an error in searching.");
            });
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-bar-container">
                    <label className="search-label"><div>Start date:</div>
                        <input 
                            className="search-bar"
                            type="text" 
                            placeholder="YYYY-MM-DD" 
                            value={props.start}
                            onChange={event => props.setStart(event.target.value)}
                        />
                    </label>
                </div>
                <div className="search-bar-container">
                    <label className="search-label"><div>End date:</div>
                        <input 
                            className="search-bar"
                            type="text" 
                            placeholder="YYYY-MM-DD"
                            value={props.end}
                            onChange={event => props.setEnd(event.target.value)}
                        />
                    </label>
                </div>
                <input type="submit"/>
            </form>
            <div className="searching">{props.isSearching ? "Searching" : ""}</div>
        </div>
    );
};

export default SearchBar;