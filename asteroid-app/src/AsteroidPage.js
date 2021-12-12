import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import TitleBar from "./TitleBar";

const AsteroidPage = () => {
    let params = useParams();
    const [id, setId] = useState("");
    const [designation, setDesignation] = useState("");
    const [minMeter, setMinMeter] = useState("");
    const [maxMeter, setMaxMeter] = useState("");
    const [isHazardous, setIsHazardous] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);

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
        });
    }, [])

    return (
        <div>
            <TitleBar />
            <h4>{hasLoaded ? id : "Loading..."}</h4>
            <p>{hasLoaded ? `Name: ${designation}` : ""}</p>
            <p>{hasLoaded ? `Diameter: ${minMeter} - ${maxMeter} meter(s)` : ""}</p>
            <p>{hasLoaded ? `Hazardous: ${isHazardous}` : ""}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default AsteroidPage;