import { Link } from "react-router-dom";
import './TitleBar.css';

const TitleBar = (props) => {
    return (
        <div className="title-bar">
            <h1><Link to="/">Asteroid Tracker</Link></h1>
        </div>
    );
}

export default TitleBar;