let myLibrary = []

class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = Boolean(read)
  }
}

function addBookToLibrary() {
  title = document.getElementById('title').value;
  author = document.getElementById('author').value;
  pages = document.getElementById('pages').value;
  read = document.getElementById('read').value;
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  index = myLibrary.length - 1
  displayBook(book, index);

  document.getElementById('title').value = ""
  document.getElementById('author').value = ""
  document.getElementById('pages').value = ""
  document.getElementById('read').value = ""
}

function initializeBooks() {
  book1 = new Book('Narnia', 'C.S Lewis', 100, false);
  book2 = new Book('Harry Potter', 'JK Rowling', 100, true);
  myLibrary.push(book1);
  myLibrary.push(book2);
  myLibrary.forEach(function (item, index) {
    displayBook(item, index);
  });
}

function displayBook(item, index) {
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

  let read = document.createElement('p');
  read.classList.add('card-text');
  read.classList.add('read');
  if(item.read == true) {
    read.innerHTML = 'I have read this book'
  } else {
    read.innerHTML = 'I have not read this book'
  };

  let delete_button = document.createElement('button')
  delete_button.classList.add('btn');
  delete_button.innerHTML = "Delete Book";
  delete_button.addEventListener("click", function() {
    deleteBook(index);
  });

  let read_button = document.createElement('button');
  read_button.classList.add('btn');
  read_button.innerHTML = "Mark as Read / Unread";
  read_button.addEventListener("click", function() {
    markAsRead(item, index);
  });

  cardBody.appendChild(bookName);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(bookPages);
  cardBody.appendChild(read);
  cardBody.appendChild(delete_button);
  cardBody.appendChild(read_button);

  card.appendChild(cardBody);

  card.dataset.id = index;

  document.getElementById('bookshelf').appendChild(card)
}

function deleteBook(index) {
  card = document.querySelector(`[data-id="${index}"]`);
  myLibrary.splice(index, 1);
  card.remove();
}

function markAsRead(book, index) {
  text = '';
  if(book.read == true) {
    book.read = false
    text = 'I have read this book';
  } else {
    book.read = true
    text = 'I have not read this book';
  };
  card = document.querySelector(`[data-id="${index}"]`);
  card_body = card.firstChild;
  read = card_body.querySelector('.read')
  read.innerHTML = text
}

document.addEventListener("load", initializeBooks());
add_button = document.getElementById("add-book");
add_button.addEventListener("click", addBookToLibrary)
