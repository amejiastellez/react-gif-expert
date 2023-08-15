
import { GifItem } from './GifItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    //ESTO ES LO QUE HAREMOS COMO CUSTOM HOOKS
    // const [images, setImages] = useState([]);
  
    // const getImages =  async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // };

    // useEffect ( () => {
    //     getImages();
    // }, [])

 
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map( (image) => (

                        <GifItem 
                            // key={ image.id }        //Así esta bien para acceder a la propiedades, pero imaginaros que necesitamos 100 propiedades
                            // title={ image.url }
                            // url={ image.url }

                            { ...image }    //de está forma, propagamos todas las propiedades, y no nos haría falta escribirlas todas
                        />

                    ))
                }
            </div>
        </>
    )
};
