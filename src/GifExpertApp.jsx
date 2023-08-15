import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories ] = useState(['F1', 'Zelda']);
    
    const onAddCategory = (newCategory) => {
        // categories.push('Zelda'); //No funciona esto, ya que esto muta el estado

        // setCategories( [ ...categories, 'Zelda']); //Copiamos el array categoria e insertamos la nueva categoria
        
        // setCategories( cat => [...categories, 'Zelda' ] ); //Copiamos el array categoria e insertamos la nueva categoria
        if ( categories.includes(newCategory) ) return;

        setCategories([newCategory, ...categories]);
    
    
    };

    return (
        <>
        {/* TITULO */}
            <h1>GifExpertApp</h1>
        
        {/*INPUT*/}
        <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
                currentCategories= { categories  }
        />
        
        {/*LISTADO DE GIFs*/}
        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />
                
            ) ) 
        }
        {/*GIF*/}
        
        
        </>
    );
};