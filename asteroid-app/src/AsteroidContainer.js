import AsteroidCard from "./AsteroidCard";
import "./AsteroidContainer.css";

const AsteroidContainer = props => {
    const generateAsteroidCards = asteroids => {
        let asteroidCards = [];
        asteroids.forEach(asteroid => {
            let asteroidCard = <AsteroidCard asteroid={asteroid}/>;
            asteroidCards.push(asteroidCard);
        });
        return asteroidCards;
    };

    return (
        <div className="asteroid-cards-container">
            {generateAsteroidCards(props.asteroids)}
        </div>
    );
};

export default AsteroidContainer;