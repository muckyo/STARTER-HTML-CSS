# Scope
    * Escopo determina a visibilidade de alguma variável no JS.

# Block Statement (Escopo de Bloco)
```JS
    {//vamos iniciar um bloco
        /* aqui dentro é um bloco e posso colocar qualquer
        *código
        */
    } // aqui fechamos o bloco
```
    * O bloco também criará um novo escopo. Chamamos de 
    * `block-scoped` = `escopo de bloco`

## var
```JS
    /* var é um tipo de declaração global e poderá funcionar fora de um escopo de bloco,
    * pois ela é acessível por todo o escopo da aplicação, mesmo antes de ser declarada.
    */
    console.log('> existe x antes do bloco? ', x)

    {
        var x = 0
        console.log('> existe x dentro do bloco? ', x)
    }

    console.log('> existe x depois do bloco? ', x)
```

## let e const
```JS
    /* tipo left e const: 
    * const e let são tipos de declaração locais e só funcionam dentro do
    * escopo onde foram criadas, sendo assim, se forem criadas dentro de 
    * um determinado bloco, não podem ser acessadas fora do escopo desse bloco
    * onde foram criadas, as outras partes do código da aplicação não possuem 
    * acesso a elas.
    */
   console.log('> existe valor de z antes do bloco? ', z)

   {
       let y = 5;
       console.log('> existe valor de z dentro do bloco? ', z)
   }

   console.log('> existe valor de z depois do bloco? ', z)