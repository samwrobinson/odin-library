myLibrary = [];
let button = document.querySelector('#add-book');

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

button.addEventListener('click', () => {
    let main = document.querySelector('.container');
    const form = document.createElement('form');
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
    main.appendChild(form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addBooktoLibrary (
            document.querySelector('#title').value,
            document.querySelector('#author').value,
            document.querySelector('#pages').value,
            document.querySelector('#read').checked
        );
    });
});
