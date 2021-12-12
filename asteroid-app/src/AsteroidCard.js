import { Link } from "react-router-dom";

const AsteroidCard = props => {
    return (
        <div>
            <Link to={`/${props.asteroid.id}`}><h3 className="id">ID: {props.asteroid.id}</h3></Link>
            <p className="is-hazardous">Hazardous: {props.asteroid.isHazardous ? "Yes" : "No"}</p>
            <p className="magnitude">Magnitude: {props.asteroid.magnitude}</p>
        </div>
    );
};

export default AsteroidCard;