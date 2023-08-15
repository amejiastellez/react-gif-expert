import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => {

        render ( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target: { value: 'SpiderMan'}} );  //Simulamos la entrada de valor
        expect( input.value ).toBe('SpiderMan')

        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue    = 'SpiderMan';
        const onNewCategory = jest.fn();    //hacemos un mock(simulacion de entrada de datos)

        render ( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled(); //Evalua que se llame
        expect( onNewCategory ).toHaveBeenCalledTimes(1);   //Evalua que se llame 1 vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //Evalua que se llame con

    });

    test('No debe de llamar el onNewCategory si el input está vacio', () => {

        const onNewCategory = jest.fn();    //hacemos un mock(simulacion de entrada de datos)
        render ( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);   //Evalua que se llame 0 vez
        expect( onNewCategory ).not.toHaveBeenCalled();     //Evalua que no se llame



    });

})