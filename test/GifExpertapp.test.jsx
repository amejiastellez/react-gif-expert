import { render, screen }   from "@testing-library/react";
import { GifExpertApp }     from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 

    test('Debe tener un h1 específico', () => { 

        render( <GifExpertApp />);
        // screen.debug();

        const title = 'GifExpertApp';
        
        expect( screen.getByText( title ) );
    });

});