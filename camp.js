const shelf = [];

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    shelf.push(book);
}

const head = document.querySelector(".mylib");
const form = document.querySelector("#addition");
const showFormBtn = document.querySelector("#showForm");

showFormBtn.addEventListener("click", () => {
    form.hidden = false;
});

function displayBooks() {

    head.innerHTML = "";

    for (const book of shelf) {

        const card = document.createElement("div");

        card.dataset.id = book.id;

        const titleEl = document.createElement("h3");
        titleEl.textContent = book.title;

        const authorEl = document.createElement("p");
        authorEl.textContent = `Author: ${book.author}`;

        const pagesEl = document.createElement("p");
        pagesEl.textContent = `Pages: ${book.pages}`;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.dataset.id = book.id;

        removeBtn.addEventListener("click", () => {

            const index = shelf.findIndex(
                item => item.id === removeBtn.dataset.id
            );

            if (index !== -1) {
                shelf.splice(index, 1);
            }

            displayBooks();
        });

        card.append(
            titleEl,
            authorEl,
            pagesEl,
            removeBtn
        );

        head.appendChild(card);
    }
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;

    addBook(title, author, pages);

    displayBooks();

    form.reset();

    form.hidden = true;
});