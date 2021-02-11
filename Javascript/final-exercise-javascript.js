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
                recipes: [8000.00, 5000.00, 1000.00],
                expenses: [2800.00, 200.00, 80.00, 120.00, 400.00, 11000.00],
                totalRecipes: 0,
                totalExpenses: 0,
        }

        familyData.totalRecipes = calcTotalRecipes(familyData);
        familyData.totalExpenses = calcTotalExpenses(familyData);
        console.log(calcTotalBalance(familyData.totalRecipes, familyData.totalExpenses));

        // função para calcular total da receita da família.
        function calcTotalRecipes(familyData) {
                let totalRecipes = 0;
                let lengthRecipes = familyData.recipes.length;
                
                for(let i = 0; i < lengthRecipes; i++) {
                        totalRecipes += familyData.recipes[i];
                }
                console.log(`O total da Receita da família é de: R$${totalRecipes.toFixed(2).replace('.', ',')}.`)

                return totalRecipes;
        }

        // função para calcular total das despesas da família.
        function calcTotalExpenses(familyData) {
                let totalExpenses = 0;
                let lengthExpenses = familyData.expenses.length;

                for(let i = 0; i < lengthExpenses; i++) {
                        totalExpenses += familyData.expenses[i];
                }
                console.log(`O total das Despesas da família é de: R$${totalExpenses.toFixed(2).replace('.', ',')}.`)

                return totalExpenses;
        }

        // função que irá calcular o saldo total da família, e se está com saldo positivo ou negativo.
        function calcTotalBalance(totalRecipes, totalExpenses) {
                let totalBalance = totalRecipes - totalExpenses;

                if(totalBalance < 0) {
                        return `O Saldo Final da família é negativo: R$${totalBalance}.`;
                }else {
                        return `O Saldo Final da família é positivo: R$${totalBalance}.`;
                }
        }
}