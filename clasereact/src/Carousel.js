import react ,{useEffect,useState} from "react";


const Carousel=({media}) =>{
    const[active,setActive] = useState(0);
    const[photos,setPhoto] = useState([]);

    useEffect(() => {
        let photosArray = ['http://placecorgi.com/600/600'];

        if (media.length){
            photosArray = media.map(({large}) => large)
        }
        setPhoto(photosArray);

    }, [media]);
    const handleIndexClick = (event)=> setActive(+event.target.dataset.index)
    return(
        <div className="carousel">
            <img src={photos[active]} alt="animal"/>
            <div className="carousel-smaller">
            {photos.map((photo,index) =>(
                <img key={photo}
                src={photo}
                data-index={index}
                alt="animal thumbanil"
                className={index=== active? "active" : ""}
                onClick={handleIndexClick}
                />
                ))}
            </div>
        </div>
    )
        

    


}
export default Carousel