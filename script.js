console.log("jsloaded")
const shelf = [];
function books(title,author,pages){
    this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
}
function addbook(title,author,pages){
    const book = new books(title,author,pages);
    shelf.push(book);
}
const head = document.querySelector(".mylib");
console.log(head)

const showFormBtn = document.querySelector("#showForm");
const form = document.querySelector("#addition")
showFormBtn.addEventListener("click", () => {
    form.hidden = false; });
    function displayBooks(){
        head.innerHTML = "";
for (const book of shelf) {
    console.log("success")
    const card = document.createElement("div");
    card.classList.add("book-card")

    const titleEl = document.createElement("h3");
    titleEl.textContent = book.title;

    const authorEl = document.createElement("p");
    authorEl.textContent = `Author: ${book.author}`;

    const pagesEl = document.createElement("p");
    pagesEl.textContent = `Pages: ${book.pages}`;


    card.append(titleEl, authorEl, pagesEl);
    head.appendChild(card);
};
    }


form.addEventListener("submit" ,(e) => {
    console.log("fired");
    e.preventDefault();
    
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;

    addbook(title, author, pages);
    displayBooks();
    form.reset();
    form.hidden = true;

    console.log(shelf);
})






