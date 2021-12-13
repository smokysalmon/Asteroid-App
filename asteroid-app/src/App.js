import './App.css';
import Container from './Container';
import TitleBar from "./TitleBar.js";
import { useState, useEffect } from 'react';
import ImageInfo from './ImageInfo';

const App = () => {
  const [imageInfo, setImageInfo] = useState(new ImageInfo("", "", "Loading..."));
  const [asteroidList, setAsteroidList] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=yfJmwR0jhJqgSdDwQAYv8tSBjOtL2OYaB6bZMlQ5")
      .then(res => res.json())
      .then(data => setImageInfo(new ImageInfo(
        data.url, 
        data.hdurl, 
        data.explanation)
      ))
      .catch(err => setImageInfo(new ImageInfo("", "", "Image failed to load.")));
  }, []);

  return (
    <div className="App">
      <TitleBar />
      <Container 
        imageInfo={imageInfo} 
        start={start}
        end={end}
        asteroidList={asteroidList}
        setAsteroidList={setAsteroidList.bind(this)}
        setStart={setStart.bind(this)}
        setEnd={setEnd.bind(this)}
      />
    </div>
  );
}

export default App;
