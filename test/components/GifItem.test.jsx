import { render, screen } from "@testing-library/react";
import { GifItem }        from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => { 
  
  const titulo = 'Soy un título';
  const url = 'Soy una url'

  test('Debe de hacer match con el snapshot', () => {

    const { container } = render ( <GifItem title={ titulo } url={ url } /> );
    expect ( container ).toMatchSnapshot();
  });

  test('Debe de mostar la imagen con el URL y el ALT indicado', () => {

    render( <GifItem title={ titulo } url={ url } />);
    screen.debug(); //Pa ver lo que renderiza

    // expect( screen.getByRole('img').src).toBe( url );
    // expect( screen.getByRole('img').alt).toBe( alt );

    //ASI MAS LIMPIO
    const { src, alt } = screen.getByRole('img');

    expect( src ).toBe( url );
    expect( alt ).toBe( alt );

  });

  test('Debe de contener un titulo', () => {

    render( <GifItem title={ titulo } url={ url } />);
    expect( screen.getByText( titulo ) ).toBeTruthy();
  
  });

});