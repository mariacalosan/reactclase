import react, {useState,useEffect} from "react"
import pet from "@frontendmasters/pet"
import Carousel from "./Carousel"


const Detail = ({id}) =>{
    const [currenTanimal, setAnimal] = useState()
    const [loading, setloading] = useState(true);
    
    useEffect(() => {
        pet.animal(id).then(({animal}) =>{
            setAnimal({
                url: animal.url,
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city},${animal.contact.address.state}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
            })
            setloading(false);
        });
    },[])

    if (loading){
        return(<p>loading..</p>)
    }
    const {animal,breed,location,name,media,description} = currenTanimal;
    return(
        <>
        <pre>
        <code>{JSON.stringify(currenTanimal,null,3)}</code>
        </pre>
        <div className="details">
        <Carousel media={media}/>
        <h1>{name}</h1>
        <h2>{`${animal}-${breed}-${location}`}</h2>
        <p>{description}</p>
        </div>
        </>
    )
}
export default Detail