# Todo lo que tienes que saber de html

## Introduccion

Html es un tipo de archivo para la web, este coprende la estructura base de toda pagina web.

el html se compone por grupos de datos llamados etiquetas que se representan porque estan entre un "<" y ">".

cada etiqueta cumple su propia funcion, las mas usadas son los divisores los parrafos las listas y las imagenes. Existen muchas mas y dependera de cada proyecto o cada pagina cuales vas a utilizar.

```html
    <!-- Divisores -->
    <div> </div>
    <!-- Parrafos -->
    <p> </p>
    <!-- Listas e items -->
    <ol><li></li></ol><ul><li></li></ul>
    <!-- img -->
    <img>
```

la mayoria de etiquestas deben cerrarse de la siguiente manera "</" + nombre de la etiqueta +  ">"
```html
    <!-- Ejemplo de cierre -->
    <div> </div>
```

## Atributos

las etiquetas aparete de agrupar contenido, tienen ciertas caracteristicas que modifican su funcionamiento o su estetica. a estos se les conoce como *__atributos__*

Para colocar un atributo a una etiqueta se debe posicionar Despues del **nombre**, Dar un **espacio** y escribir el **nombre del atributo** junto a un "**=**" y una apertura de comillas **_""_**

```html
<!-- Ejemplo de atributo -->
<div class=""> </div>
```
La declaracion de atributos solo tiene que ser en la etiqueta de cierre (la que no tiene la /) y cada atributo tiene que estar sepadado por espacios

```html
<!-- Ejemplo de multiples atributos -->
<div class="" style="" id=""></div>
```

Uno de estos atributos que mas se usan son el "**class**" y el "__id__", que si bien no añaden una funcionalidad, son utlilizados para idenfiticar esa etique en un grupo o de manera unica.

### **Atributo class**

El Atributo class nos permite agrupar nuestras etiqueta en un conjunto aparte, esto se usa frecuentemente para darle estilos y transformaciones.

para aplicar una class se tiene que declarar el atributo y en las comillas el nobre de la class a la que desee que pertenesca la etiqueta.

```html
<!-- Ejemplo de class -->
<div class=" class "></div>
```

el atributo soporta multiples classes para eso, dentro de las comillas se tienen que colocar separadas por espacios

```html
<!-- Ejemplo de class -->
<div class=" class-1 class-2 "></div>
```
_Es importante destacar que los nobres de las clases no pueden contener espacios, porque estos serian interpretados como dos clases distintas para solucionarlo puedes usar un guionmedio "-"_

```html
<!-- Ejemplo Eroneo -->
<div class=" class 1"></div>

<!-- Ejemplo Correcto -->
<div class=" class-1"></div>
<div class=" class1"></div>
```
### Atributto id

el atributo id es parecido al class, solo que este debe ser unico y sirve para identificar de manera exacta a una etiqueta, esto es muy util al momento de añadir interactividad e nuestra pagina web.

```html
<!-- Ejemplo id -->
<div id="identificador"></div>
```
_Es recomendable tener un solo identificador por etiqueta y que cada identificador sea unico. Si necesitas englobarlos en un grupo a varias etiquetas usa **class**_


