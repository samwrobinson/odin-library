// Initialize necessary DOM items & Variables
myLibrary = [];
let button = document.querySelector('#add-book');
let formDisplayed = false;
let libraryContainer = document.querySelector('.library-container');
let removeBook = document.querySelector("#remove-book");

// Initalize Obkect constructor to creat new books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBooktoLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook);
}

function displayBooks() {

    libraryContainer.innerHTML = ''; // Clear the library container

    myLibrary.forEach((book, index) => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card'); // Fix class name (remove the dot)
        bookCard.innerHTML = `
            <ul>
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Read: ${book.read ? 'Yes' : 'No'}</li>
            </ul>
            <button class="remove-book" data-index="${index}">Remove Book</button>
        `;
        libraryContainer.appendChild(bookCard);;
    }
    )};

libraryContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-book')) {
        const bookIndex = event.target.getAttribute('data-index');
        myLibrary.splice(bookIndex, 1);
        displayBooks();
    }
});

button.addEventListener('click', () => {
    let form = document.querySelector('.book-form');
    
    // If the form doesn't exist, create it
    if (!form) {
        formDisplayed = true;
        form = document.createElement('form');
        form.classList.add('book-form');
    form.innerHTML = `
        <div>
            <label for='title'>Title:<strong>*</strong></label>
            <input type="text" id="title" name="title" required>
        </div>
        <div>
            <label for="author">Author:<strong>*</strong></label>
            <input type="text" id="author" name="author" required>
        </div>
        <div>
            <label for="pages">Pages:<strong>*</strong></label>
            <input type="number" id="pages" name="pages" required>
        </div>
        <div>
            <label for="read">Read:<strong>*</strong></label>
            <input type="checkbox" id="read" name="read">
        </div>
        <button id="submitBook">Submit</button>`;
    document.querySelector('.container').appendChild(form)

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        this.style.display = 'block';
        addBooktoLibrary (
            document.querySelector('#title').value,
            document.querySelector('#author').value,
            document.querySelector('#pages').value,
            document.querySelector('#read').checked
        );
        displayBooks();
        this.reset();
        this.style.display = 'none';
        formDisplayed = false; // Update visibility tracking
    });
    } else if (formDisplayed) {
    // If the form is already displayed and the button is clicked, hide it
    form.style.display = 'none';
    formDisplayed = false;
    } else {
    // If the form is hidden and the button is clicked, show it
    form.style.display = 'block';
    formDisplayed = true;
    }
});
