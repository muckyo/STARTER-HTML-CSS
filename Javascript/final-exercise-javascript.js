// Question 1:
{
    /**
     * ### Transformar notas escolares:
     * 
     *      Crie um algoritmo que transforme as notas do sistema
     *      numérico para sistema de notas em caracteres do tipo A B C
     * 
     *          * de 90 para cima = A
     *          * entre 80 a 89   = B
     *          * entre 70 a 79   = C
     *          * entre 60 a 69   = D
     *          * menor que 60    = F
     * 
     */
    function ApplyNote(schoolNote) { 
        let noteA = 100 >= schoolNote && schoolNote >= 90;
        let noteB = schoolNote < 90 && schoolNote >= 80;
        let noteC = schoolNote < 80 && schoolNote >= 70;
        let noteD = 60 <= schoolNote && schoolNote < 70;
        let noteF = 0 <= schoolNote && schoolNote < 60;
        let finalNote;

        if (noteA) {
                finalNote = 'Aluno tirou nota A.';
        }else if (noteB) {
                finalNote = 'Aluno tirou nota B.';
        }else if (noteC) {
                finalNote = 'Aluno tirou nota C.';
        }else if (noteD) {
                finalNote = 'Aluno tirou nota D.';
        }else if (noteF) {
                finalNote = 'Alunou tirou nota F!';
        }else if(schoolNote === undefined) {
            throw 'Aluno sem nota.'
        } else {
                finalNote = 'Nota inválida!';
        }
        return finalNote;
        }

    try {
        // console.log(ApplyNote(101));
        // console.log(ApplyNote(-1));
        // console.log(ApplyNote(0));
        // console.log(ApplyNote(1));
        // console.log(ApplyNote(45));
        // console.log(ApplyNote(60));
        // console.log(ApplyNote(61));
        // console.log(ApplyNote(75));
        // console.log(ApplyNote(85));
        // console.log(ApplyNote(95));
        // console.log(ApplyNote());
        
    // Exceção para tratar aluno sem nota.
    } catch (errorUndefinedNote) {
        console.log(errorUndefinedNote)
    }
}

// Question 2:
{
        /**
         * ### Sistema de gastos familiar
         * 
         * Crie um objeto que possuirá 2 propriedades, ambas do tipo 
         * array:
         *      * receitas: []
         *      * despesas: []
         * 
         * Agora, crie uma função que irá calcular o total de receitas 
         * e despesas e irá mostrar uma mensagem se a família está com 
         * saldo positivo ou negativo, seguido do valor do saldo.
         */
        let familyData = {
                recipes: [8000.00, 5000.00, 1600.00],
                expenses: [2800.00, 200.00, 80.00, 120.00, 400.00, 11000.00],
                totalRecipes: 0,
                totalExpenses: 0,
        }

        // familyData.totalRecipes = CalcTotalRecipes(familyData.recipes);
        // familyData.totalExpenses = CalcTotalExpenses(familyData.expenses);
        // console.log(CalcTotalBalance(familyData.totalRecipes, familyData.totalExpenses));

        // função para calcular total da receita da família.
        function CalcTotalRecipes(familyRecipes) {
                let totalRecipes = 0;
                
                for(let i = 0; i < familyRecipes.length; i++) {
                        totalRecipes += familyRecipes[i];
                }
                console.log(`O total da Receita da família é de: R$${totalRecipes.toFixed(2).replace('.', ',')}.`)

                return totalRecipes;
        }

        // função para calcular total das despesas da família.
        function CalcTotalExpenses(familyExpenses) {
                let totalExpenses = 0;

                for(let i = 0; i < familyExpenses.length; i++) {
                        totalExpenses += familyExpenses[i];
                }
                console.log(`O total das Despesas da família é de: R$${totalExpenses.toFixed(2).replace('.', ',')}.`)

                return totalExpenses;
        }

        // função que irá calcular o saldo total da família, e se está com saldo positivo ou negativo.
        function CalcTotalBalance(totalRecipes, totalExpenses) {
                let totalBalance = totalRecipes - totalExpenses;

                if(totalBalance < 0) {
                        return `O Saldo Final da família é negativo: R$${totalBalance}.`;
                }else {
                        return `O Saldo Final da família é positivo: R$${totalBalance}.`;
                }
        }
}

// Question 3:
{
        /**
         *      ### Celsius em Fahrenheit
         * 
         *              Crie uma função que receba uma String em Celsius ou Fahrenheit 
         *              e faça a transformação de uma unidade para outra:
         * 
         *                      C = (F - 32) * 5/9
         *                      F = 32 + C * 9/5
        */
       let temperature = '10C';

       function ConvertTemperature(temperature) {  
               let arrayTemperature = Array.from(temperature);
               let celsius = '';
               let fahrenheit = '';
               if(temperature.toUpperCase().includes('C')) {
                       for(let i = 0; i < arrayTemperature.length; i++) {
                               if(!isNaN(Number(arrayTemperature[i]))) {
                                        celsius += arrayTemperature[i];
                               }
                       }
                       celsius = Number(celsius);
                       fahrenheit = 32 + celsius * 9/5;
                       console.log(`A temperatura de ${celsius}º Celsius é: ${fahrenheit.toFixed(0)}º Fahrenheit.`)
               }else if(temperature.toUpperCase().includes('F')) {
                       for(let i = 0; i < arrayTemperature.length; i++) {
                               if(!isNaN(Number(arrayTemperature[i]))) {
                                       fahrenheit += arrayTemperature[i];
                               }
                       }
                       fahrenheit = Number(fahrenheit);
                       celsius = (fahrenheit - 32) * 5/9;
                       console.log(`A temperatura de ${fahrenheit}º Fahrenheit é: ${celsius.toFixed(0)}º Celsius.`)
                }else if(!temperature.toUpperCase().includes('C') && !temperature.toUpperCase().includes('F')) {
                        throw new Error('Temperatura não identificada!')
                }
       }

       try {
               // ConvertTemperature('10C');
               // ConvertTemperature('50F');
               // ConvertTemperature('10D');
        }catch(error) {
                console.log(error.message);
        }
}

// Question 4:
{
        /**
         * ### Buscando e contando dados em arrays
         * 
         *      Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:
         * 
         *              * Contar o número de categorias e o número de livros em cada categoria;
         *              * Contar o número de autores;
         *              * Mostrar livros do autor Augusto Cury;
         *              * Transformar a função acima em uma função que irá receber o nome do autor 
         *                      e devolver os livros desse autor.
         */

         const booksByCategory = [
                 {
                        category: 'Riqueza',
                        books: [
                                {
                                        title: 'Os segredos da mente milionária',
                                        author: 'T. Harv Eker',
                                },
                                {
                                        title: 'O homem mais rico da Babilônia',
                                        author: 'George S. Clason',
                                },
                                {
                                        title: 'Pai rico, pai pobre',
                                        author: 'Robert T. Kiyosaki e Sharon L. Lenchter',
                                },
                        ],
                },
                {
                        category: 'Inteligência Artificial',
                        books: [
                                {
                                        title: 'Você é Insubstituível',
                                        author: 'Augusto Cury',
                                },
                                {
                                        title: 'Ansiedade - Como enfrentar o mal do século',
                                        author: 'Augusto Cury',
                                },
                                {
                                        title: 'Os 7 hábitos das pessoas altamente eficazes',
                                        author: 'Stephen R. Covey',
                                },
                                {
                                        title: 'Avanços Tecnológicos de IA',
                                        author: 'Autor Desconhecido',
                                },
                                {
                                        title: 'outro livro',
                                        author: 'Augusto Cury',
                                },
                        ],
                },
                {
                        category: 'Romance',
                        books: [
                                {
                                        title: 'Call Me By Your Name',
                                        author: 'Autor Desconhecido',
                                },
                                {
                                        title: 'Jogos Vorazes',
                                        author: 'Suzanne Collins',
                                },
                                {
                                        title: 'A Cantiga dos Pássaros e das Serpentes',
                                        author: 'suzanne collins',
                                },
                        ],
                },
         ];

         function CountCategorys() {
                 console.log(`Existe atualmente ${booksByCategory.length} Categorias de Livros.\n`);
                 for(let i = 0; i < booksByCategory.length; i++) {
                        console.log(`Categoria ${i+1}: ${booksByCategory[i].category}, ${booksByCategory[i].books.length} livros.`)       
                 }
         }

         function CountAuthors() {
                 let totalAuthors = [];

                 for(let i = 0; i < booksByCategory.length; i++) {
                        for(let j = 0; j < booksByCategory[i].books.length; j++) {
                                if(totalAuthors.indexOf(booksByCategory[i].books[j].author.toUpperCase()) == -1) {
                                        totalAuthors.push(booksByCategory[i].books[j].author.toUpperCase());
                                }
                        }
                 }
                 console.log(`\nExiste atualmente um total de ${totalAuthors.length} Autores.`);
         }

         function ShowBooksFromAugustoCury() {
                console.log(`\nLivros do autor "Augusto Cury":`);
                
                for(let i = 0; i < booksByCategory.length; i++) {
                        for(let j = 0; j < booksByCategory[i].books.length; j++) {
                                if(booksByCategory[i].books[j].author.toUpperCase().includes('Augusto Cury'.toUpperCase())) {
                                        console.log(`${booksByCategory[i].books[j].title}`);
                                }
                        }
                }
         }

         function ShowBooksFromAuthor(author) {
                console.log(`\nLivros do(a) autor(a) "${author}":`);
                
                for(let i = 0; i < booksByCategory.length; i++) {
                        for(let j = 0; j < booksByCategory[i].books.length; j++) {
                                if(booksByCategory[i].books[j].author.toUpperCase().includes(author.toUpperCase())) {
                                        console.log(`${booksByCategory[i].books[j].title}`);
                                }
                        }
                }
         }

         CountCategorys();
         CountAuthors();
         ShowBooksFromAugustoCury();
         ShowBooksFromAuthor('Suzanne Collins');
}