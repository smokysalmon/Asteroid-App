import { Link } from "react-router-dom";
import "./AsteroidCard.css";

const AsteroidCard = props => {
    return (
        <div className="asteroid-card">
            <Link to={`/${props.asteroid.id}`}><h3 className="id">ID: {props.asteroid.id}</h3></Link>
            <p className="is-hazardous">Hazardous: {props.asteroid.isHazardous ? "Yes" : "No"}</p>
            <p className="magnitude">Magnitude: {props.asteroid.magnitude}</p>
        </div>
    );
};

export default AsteroidCard;