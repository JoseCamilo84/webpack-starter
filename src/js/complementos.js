import '../css/complementos.css';


export const saludar = ( nombre ) => {

   console.log( 'Creando la etiqueta h1' );

   const h1 = document.createElement( 'h1' );
   h1.innerHTML = `Hola ${nombre}, buenas tardes!!!`;
   document.body.append( h1 );
}