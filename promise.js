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
const addBook = (newBook) => {

    const promise1=new Promise((resolve,reject) => {
        books.push(newBook);
        resolve(books);
        reject('hata');
    })
        return promise1;
};

addBook({name: 'kitap5', yazar: 'yazar5'}).then(() => {
        console.log('Yeni Liste');
        listBooks();
    }).catch((error) => {
        console.log(error);
    });