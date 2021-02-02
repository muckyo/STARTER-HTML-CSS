# Shorthand

    * junção de propriedades
    * resumido
    * legível

```CSS
{
    /*background properties*/
    
    background-color: deepskyblue;
    background-image: url(image.png);
    background-repeat: no-repeat;
    background-position: left top;
    
    /*background shorthand*/
    background: #000 url(image.png) no-repeat left top;

    /*font properties*/
    
    font-style: italic;
    font-weight: 100;
    font-size: large;
    line-height: normal;
    font-family: Arial, Helvetica, sans-serif;
    
    /*font shorthand*/
    font: italic 100 large/normal Arial, Helvetica, sans-serif;
}
```

## Detalhes

    * não irá considerar propriedades anteriores;
    * valores não especificados irão assumir o valor padrão;
    * geralmente, a ordem descrita não importa, mas, se houver muitas propriedades 
    com valores semelhantes, poderemos encontrar problemas.

## Propriedades que aceitam shorthand

    animation, background, border, border-bottom, border-color, border-left,
    border-radius, border-right, border-style, border-top, border-width,
    column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column,
    grid-row, grid-template, list-style, margin, offset, outline, overflow, padding,
    place-content, place-items, place-self, text-decoration, transiton

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**