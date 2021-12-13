import AsteroidContainer from "./AsteroidContainer";
import "./Container.css";
import PictureOfTheDay from "./PictureOfTheDay";
import SearchBar from "./SearchBar";

const Container = props => {
    return (
        <div className="container">
            <PictureOfTheDay imageInfo={props.imageInfo}/>
            <SearchBar 
                start={props.start}
                end={props.end}
                isSearching={props.isSearching}
                setAsteroidList={props.setAsteroidList}
                setStart={props.setStart}
                setEnd={props.setEnd}
                setIsSearching={props.setIsSearching}
            />
            <AsteroidContainer asteroids={props.asteroidList} />
        </div>
    );
}

export default Container;