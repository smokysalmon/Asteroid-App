import "./PictureOfTheDay.css"

const PictureOfTheDay = props => {
    return (
        <div className="picture-of-the-day-container">
            <a href={props.imageInfo.hdlink}>
                <img className="picture-of-the-day" src={props.imageInfo.link} alt={props.imageInfo.caption}/>
            </a>
        </div>
    );
}

export default PictureOfTheDay;