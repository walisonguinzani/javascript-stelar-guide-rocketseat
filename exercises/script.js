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
    }
    console.log(`${indexCategory + 1}  - Categoria: ${booksByCategory[indexCategory].category} - Qtd. Livros: ${indexBook}`)
}

function CountAuthors() {
    let authors = []

    for (let Category of booksByCategory) {
        for (let book of Category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(`Total de autores: ${authors.length}`)
}

CountAuthors()

function ShowAugustCury() {
    let AugustCury = []

    for (let Category of booksByCategory) {
        for (let book of Category.books) {
            if (AugustCury.indexOf(book.author) == -1 && book.author === "Augusto Cury") {
                AugustCury.push(book.title)
            }
        }
    }
        console.log(`Livros de Agusto Cury: ${AugustCury.join("\n")}`)  
   
}

ShowAugustCury()

function ShowAuthor(author) {
    let BooksOfAuthor = []

    for (let Category of booksByCategory) {
        for (let book of Category.books) {
            if (BooksOfAuthor.indexOf(book.author) == -1 && book.author === author) {
                BooksOfAuthor.push(book.title)
            }
        }
    }
        console.log(`Livros do Autor ${author}: ${BooksOfAuthor.join("\n")}`)  
   
}

ShowAuthor('Napoleon Hill')