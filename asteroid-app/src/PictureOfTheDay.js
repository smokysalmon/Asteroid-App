import "./PictureOfTheDay.css"

const PictureOfTheDay = props => {
    return (
        <a href={props.imageInfo.hdlink}>
            <img className="picture-of-the-day" src={props.imageInfo.link} alt={props.imageInfo.caption}/>
        </a>
    );
}

export default PictureOfTheDay;