interface Book{
    id: number,
    title: string,
    author: string,
    published: Date,
    available: boolean
}

const books: Book[] = [];

books.push({
    id: 1,
    title: 'The Omnivore’s Dilemma: A Natural History of Four Meals.',
    author:  'MichaelPollan',
    published: new Date('2006-01-16'),
    available: true,
});

books.push({
    id: 2,
    title: 'The Modern Prometheus',
    author:  'James Rieger',
    published: new Date('1982-01-16'),
    available: false,
});

console.log(books);

function addBook(book: Book): void {
    books.push(book);
}

const newBook: Book = {
    id: 3,
    title: 'The Great Gatsby',
    author: "F. Scott Fitzgerald",
    published: new Date("1925-04-10"),
    available: true,
};

addBook(newBook);
console.log(books);

//Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
function findBookById(id: number): Book | undefined {
    return books.find(book => book.id === id)
}

console.log('The book by ID is: ');
console.log(findBookById(1));

//Define a function updateBook(book: Book):
//boolean that takes a Book object as a parameter, 
//finds the book with the same id in the books array,
// and updates its properties.
//The function should return true if the book was
//updated successfully or false if the book was not found.

function updateBook(book: Book): boolean {
    const index = books.findIndex(b => b.id === book.id);
    if (index !== -1) { 
        books[index] = book;
        return true;
    } else {
    return false;
}
}

