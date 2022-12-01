let allBooks = [
    id1={
        title:'A cabana',
        img: './images/aCabana.jpg'
    },
    id2={
        title:'De volta para o futuro'
    } 


]
let i = 0;

function mais(){
    let books = document.querySelector('.books')
    let newBook = `
    <article class="book">
    <div class="information-book">
        <p class="book-title">${allBooks[i].title}</p>
        <ul class="list-information">
            <li class="author">
                <label for="Author-name">Author:</label>
                <span class="author-name">JRR Tolkien</span>
            </li>
            <li class="date">
                <label for="date-book">Date:</label>
                <span class="date-book">July 29, 1954</span>
            </li>
            <li class="genres">
                <label for="genres-book">Genres:</label>
                <span class="genres-book">Fantasy</span>
            </li>
            <li class="type">
                <label for="type-book">Type:</label>
                <span class="type-book">E-book</span>
            </li>
        </ul>
    </div>
    <img src="${allBooks[i].img || './images/noImg.jpg'}" alt="image the book">
</article>
    
    `
  
    books.innerHTML += newBook
    i +=1;
    
   

}