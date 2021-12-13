import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import TitleBar from "./TitleBar";
import "./AsteroidPage.css"

const AsteroidPage = () => {
    let params = useParams();
    const [id, setId] = useState("");
    const [designation, setDesignation] = useState("");
    const [minMeter, setMinMeter] = useState("");
    const [maxMeter, setMaxMeter] = useState("");
    const [isHazardous, setIsHazardous] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);

    useEffect(() => {
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${params.asteroidId}?api_key=yfJmwR0jhJqgSdDwQAYv8tSBjOtL2OYaB6bZMlQ5`)
        .then(res => res.json())
        .then(data => {
            setId(data.id);
            setDesignation(data.designation);
            let min = parseFloat(data.estimated_diameter.meters.estimated_diameter_min);
            setMinMeter(Math.round(min));
            let max = parseFloat(data.estimated_diameter.meters.estimated_diameter_max);
            setMaxMeter(Math.round(max));
            setIsHazardous(data.is_potentially_hazardous_asteroid);
            setHasLoaded(true);
        })
        .catch(err => setHasFailed(true));
    }, [])

    return (
        <div>
            <TitleBar />
            {hasLoaded ? 
            <div className="asteroid-card-container">
                <h4>{id}</h4>
                <p>{`Name: ${designation}`}</p>
                <p>{`Diameter: ${minMeter} - ${maxMeter} meter(s)`}</p>
                <p>{`Hazardous: ${isHazardous}`}</p>
                <Link to="/">Back to Home</Link>
            </div>
            : hasFailed ? <div>"Couldn't find asteroid"</div> : <div>"Loading..."</div>}
        </div>
    );
}

export default AsteroidPage;