import "./Container.css";
import PictureOfTheDay from "./PictureOfTheDay";
import SearchBar from "./SearchBar";

const Container = props => {
    return (
        <div className="container">
            <PictureOfTheDay imageInfo={props.imageInfo}/>
            <SearchBar setAsteroidList={props.setAsteroidList}/>
        </div>
    );
}

export default Container;