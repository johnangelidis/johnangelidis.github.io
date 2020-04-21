async function displayBooks(){
    let response = await fetch('api/books');
    let booksJSON = await response.json();
    let booksDiv = document.getElementById("book-list");
    booksDiv.innerHTML="";

    for(i in booksJSON){
        let book = booksJSON[i];
        booksDiv.append(getBookItem(book));
    }
}


function switchDiv(show) {  
    document.getElementById("show_"+show).style.display = "block";
    document.getElementById("show_"+((show==1)?2:1)).style.display = "none";
}

function getBookItem(book){
    let bookSection = document.createElement("section");
    bookSection.classList.add("book");
    let aTitle = document.createElement("a");
    aTitle.href="#";
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = book.title;
    aTitle.append(h3Elem);

    let btnElem = document.createElement("button");
    btnElem.innerHTML = "Edit";
    btnElem.setAttribute("data-id", book._id);
    btnElem.onclick = showBookDetails;

    let btnElem2 = document.createElement("button");
    btnElem2.innerHTML = "Delete";
    
    bookSection.append(btnElem);
    bookSection.append(btnElem2);
    bookSection.append(aTitle);
    

    //hoverDiv
    let hoverDiv = document.createElement("div");
    hoverDiv.classList.add("detailsDiv");
    let pAuthor = document.createElement("p");
    pAuthor.textContent = `Author: ${book.author}`;
    let pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${book.genre}`;
    let br1 = document.createElement("br");
    let pYear = document.createElement("p");
    pYear.textContent = `Year: ${book.year}`;
    let br2 = document.createElement("br");
    let pPublisher = document.createElement("p");
    pPublisher.textContent = `Publisher: ${book.publisher}`;
    let br3 = document.createElement("br");
    let pRating = document.createElement("p");
    pRating.textContent = `Rating: ${book.rating}`;
    
    hoverDiv.append(pAuthor);
    hoverDiv.append(pGenre);
    hoverDiv.append(br1);
    hoverDiv.append(pYear);
    hoverDiv.append(br2);
    hoverDiv.append(pPublisher);
    hoverDiv.append(br3);
    hoverDiv.append(pRating);
    bookSection.append(hoverDiv);
    return bookSection;
}


async function showBookDetails(){
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/books/${id}`);

    if(response.status != 200){
        //display an error
        console.log("Error receiving book");
        return;
    }
    
    let book = await response.json();
    document.getElementById("book-id").textContent = book._id;
    document.getElementById("txt-title").value = book.title;
    document.getElementById("txt-author").value = book.author;
    document.getElementById("txt-genre").value = book.genre;
    document.getElementById("txt-year").value = book.year;
    document.getElementById("txt-publisher").value = book.publisher;
    document.getElementById("txt-rating").value = book.rating;
    
}

async function addBook(){
    let bookTitle = document.getElementById("txt-add-title").value;
    let bookAuthor = document.getElementById("txt-add-author").value;
    let bookGenre = document.getElementById("txt-add-genre").value;
    let bookYear = document.getElementById("txt-add-year").value;
    let bookPublisher = document.getElementById("txt-add-publisher").value;
    let bookRating = document.getElementById("txt-add-rating").value;

    let book = {"title":bookTitle, "author":bookAuthor, "genre":bookGenre, "year":bookYear, "publisher":bookPublisher, "rating":bookRating};

    let response = await fetch('/api/books', {
        method:"POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(book)
    });

    if(response.status!=200){
        console.log("Error posting data");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayBooks();
}

async function editBook(){
    let bookID = document.getElementById("book-id").textContent;
    let bookTitle = document.getElementById("txt-title").value;
    let bookAuthor = document.getElementById("txt-author").value;
    let bookGenre = document.getElementById("txt-genre").value;
    let bookYear = document.getElementById("txt-year").value;
    let bookPublisher = document.getElementById("txt-publisher").value;
    let bookRating = document.getElementById("txt-rating").value;

    let book = {"title": bookTitle, "author":bookAuthor, "genre":bookGenre, "year":bookYear, "publisher":bookPublisher, "rating": bookRating};

    let response = await fetch(`/api/books/${bookID}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body:JSON.stringify(book)
    });

    if(response.status!=200){
        return;
    }

    let result = await response.json();
    displayBooks();
}

async function deleteBook(){
    let bookID = document.getElementById("book-id").textContent;

    let response = await fetch(`/api/videobooks/${bookID}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        return;
    }

    let result = await response.json();
    displayBooks();
}

window.onload = function(){
    this.displayBooks();
    let addBtn = document.getElementById("btn-add");
    addBtn.onclick = addBook;

    let editBtn = document.getElementById("btn-edit");
    editBtn.onclick = editBook;
    
    let deleteBtn = document.getElementById("btn-delete");
    deleteBtn.onclick = deleteBook;
    


}
