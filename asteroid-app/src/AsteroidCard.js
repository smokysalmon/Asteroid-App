const AsteroidCard = props => {
    return (
        <div>
            <h3 className="id">ID: {props.asteroid.id}</h3>
            <p className="is-hazardous">Hazardous: {props.asteroid.isHazardous ? "Yes" : "No"}</p>
            <p className="magnitude">Magnitude: {props.asteroid.magnitude}</p>
        </div>
    );
};

export default AsteroidCard;