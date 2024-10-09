const Banner = ({ imageUrl, text }) => {
    return (
        <div className="banner">
            <img src={imageUrl} alt="Bannière" />
            <h1>{text}</h1>
        </div>
    )
}

export default Banner