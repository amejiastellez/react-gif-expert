import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";



describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('debe de regresar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs( 'SpiderMan' ) );
        //console.log( result );  //{ current: { images: [], isLoading: true } }

        const { images, isLoading } = result.current;   //desestructuramos lo que contiene

        expect( images.length).toBe(0);
        expect( isLoading).toBeTruthy();

    });

    test('debe de devolver un array de arrays y el isloading en false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs( 'SpiderMan' ) );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 1000   //1 segundo
            }
        );
        const { images, isLoading } = result.current;   //desestructuramos lo que contiene

        expect( images.length).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();
    });

});