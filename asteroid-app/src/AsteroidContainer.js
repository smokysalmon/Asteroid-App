import AsteroidCard from "./AsteroidCard";

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
        <div>
            {generateAsteroidCards(props.asteroids)}
        </div>
    );
};

export default AsteroidContainer;