const books = [
    {name: 'kitap1', yazar: 'yazar1'},
    {name: 'kitap2', yazar: 'yazar2'},
    {name: 'kitap3', yazar: 'yazar3'}
    ];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    });
};

// listBooks();

const addBook = (newBook, callback) => {
        books.push(newBook);
        callback();
};

addBook({name: 'kitap4', yazar: 'yazar4'},listBooks);