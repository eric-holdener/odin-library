let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = Boolean(read)
}

function addBookToLibrary() {
  let book = new Book(title, author, pages, read)
  myLibrary.push(book)
}

function displayBooks() {
  bookshelf = document.getElementsByClassName('bookshelf')
  myLibrary.forEach(function (item, index) {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let bookName = document.createElement('h2');
    bookName.classList.add('card-title');
    bookName.innerHTML = item.title;

    let bookAuthor = document.createElement('h3');
    bookAuthor.classList.add('card-subtitle');
    bookAuthor.innerHTML = item.author;

    let bookPages = document.createElement('p');
    bookPages.classList.add('card-text');
    bookPages.innerHTML = item.pages;

    cardBody.appendChild(bookName);
    cardBody.appendChild(bookAuthor);
    cardBody.appendChild(bookPages);

    card.appendChild(cardBody);

    bookshelf.appendChild(card);
  })
}