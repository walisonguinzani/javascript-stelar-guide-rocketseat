/*11.4 Exercicio 4 - Find Books and Count with Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios.

    * Contar o número de categorias e o número de livros em cada categoria.
    * Contar o número de autores.
    * Mostrar livros do autor Augusto Cury.
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

const booksByCategory = [
    { 
        category: 'Riqueza',
        books: [
            {
                author: 'Augusto Cury',
                title: 'Armadilhas da Mente',
            },
            {
                author: 'Napoleon Hill',
                title: 'Quem Pensa Enriqueçe',
            },
            {
                author: 'Augusto Cury',
                title: 'O Vendedor de Sonhos',
            },
            {
                author: 'Augusto Cury',
                title: 'O Mestre dos Mestres',
            },

        ],
    },
    {   
        category: 'Inteligência Emocional',
        books: [
            {
                author: 'Augusto Cury',
                title: 'Ansiedade',
            },
            {
                author: 'Augusto Cury',
                title: 'Nunca Desista de Seus Sonhos',
            },
            {
                author: 'Augusto Cury',
                title: 'Você é Insubstituível',
            },
            {
                author: 'Augusto Neto Cury',
                title: 'Gestão da Emoção',
            },
        ],
    }

]

for (var indexCategory = 0 ; indexCategory < booksByCategory.length ; indexCategory++) {
    for (var indexBook = 0 ; indexBook < booksByCategory[indexCategory].books.length ; indexBook++) {
        for (var indexAuthor of booksByCategory[indexCategory].books) {
            indexAuthor++
        }
    }
    console.log(`${indexCategory + 1}  - Categoria: ${booksByCategory[indexCategory].category} - Qtd. Livros: ${indexBook} - Qtd. Autores: ${indexAuthor}`)
}

//for (var indexAuthor = 0 ; indexBook < booksByCategory[indexCategory].books[indexAuthor].length ; indexAuthor++) {}