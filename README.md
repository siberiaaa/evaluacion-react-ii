# Evaluación ReactJS Unidad III - Agregar interactividad a la UI

1. Cree una aplicación ReactJS con configuración básica inicial usando
el siguiente comando: npx create-react-app mi-proyectoII-react

   
2. Cree un componente de función ReactJS que renderice un botón
cuyo texto sea una props y con un controlador de evento que
responda al evento onClick sobre el botón en cuestión, esta función
debe mostrar un alert con el texto del botón.
   
3. Cree un componente de función ReactJS con un controlador de
evento que lea y muestre en pantalla al menos 3 props, que
responda al evento onClick sobre un botón tanto en el componente
padre como en el componente hijo. Debe pasarle el valor de una de
las props al componente Padre.
   
4. Cree en un mismo archivo dos componentes, donde uno renderice
el otro de manera que el evento onClick sea activado en el
componente hijo se propague hasta el componente padre.

5. En el requerimiento anterior detenga la propagación del evento
onClick.

6. Utilice la función setTimeout y muestre las instantáneas de un
estado de un componente antes creado, use un contador y un
botón para cambiar el estado del componente y a media que
cambie o se actualice (el contador) muestre en pantalla el valor del
estado que está controlando, también imprima el valor de la
instantánea anterior de dicho estado.
   
7.  Dado el siguiente objeto cree un componente de función React de tal manera que se pueda
actualizar ese objeto en el estado, modifique las propiedades
nombre y marca (haga uso del operador de propagación para no
referenciar ni el objeto principal ni los objetos anidados), haciendo
uso de inputs tipo text para pasar los valores de las propiedades a
modificar.

` {
 "producto": {
 "nombre": "Laptop",
 "precio": 1200,
 "detalles": {
 "marca": "XYZ",
 "modelo": "Pro 15"
 }
 }
}`


8. Resuelva el requerimiento anterior haciendo uso de la librería
Immer.
    
9. Actualice en el estado de React el siguiente arreglo:
["perro", "gato", "pato", "caballo", "conejo"];
Agregando "Ganso", evite modificar el arreglo original.

10. Use el operador de propagación (…) y modifique del objeto dado en
el requerimiento (7) la propiedad precio por referencia y la
propiedad modelo por valor. Use los console.log necesarios para
comprobar las actualizaciones solicitadas.

11. Cree un repositorio git en el directorio de su aplicación luego de
resolver todos los requerimientos anteriores y súbalo a su cuenta
github, suba el enlace del mismo al apartado correspondiente de
entrega de esta evaluación en el aula virtual de este curso en la
plataforma virtual de GracoSoft.



### Siberia
##### 15-05-25