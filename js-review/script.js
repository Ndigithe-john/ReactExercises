const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*

const book=getBook(3);
console.log(book)
const {title, author, genres, pages,publicationDate, hasMovieAdaptation}=book;
console.log(title, author,genres,pages)
 
const [first, second, third, ...theRest]=genres
console.log(`${first} and ${second} and ${third} genre`)
console.log(theRest)
const newarr=[...genres,'added','new','array',3]
newarr
const newObj= {...book,moviePublicationDate:'23-08-1997'}
newObj
const getYear = (str) => str.split("-")[0];

const summary=`${title} a book written by ${author} with ${pages} pages and was published in ${getYear(publicationDate)}. The book has ${hasMovieAdaptation?"been":"not"} adapted as a movie}`
summary
const condition=pages>100?'over a hundred pages':'less than 100 pages'
console.log(condition)

console.log(true && 'someString') //shortcircuiting
console.log(hasMovieAdaptation && 'This book has a movie')
console.log(hasMovieAdaptation || true)
console.log(book.translations.spanish || "no traslation" )
const spanishTranslation =book.translations.spanish || "NOT TRANSLATED"
spanishTranslation

// book.reviews?.librarything.reviewsCount || "No Data"
// const countWrong=book.reviews?.librarything.reviewsCount || 'No Data'
// countWrong
// const rightCount=book.reviews.librarything.reviewsCount?? "No Data"
// rightCount

const reviewNullish= undefined ?? "2ndOption" //nullish coalescing operator
reviewNullish

function getTotoalReviewsCount(book){
const goodread=book.reviews?.goodreads?.reviewsCount ?? 0
const libthig=book.reviews?.librarything?.reviewsCount ?? 0
return goodread+libthig
}

console.log(getTotoalReviewsCount(book))
*/
function getTotoalReviewsCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount ?? 0;
  const libthig = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + libthig;
}
const books=getBooks();
books
const booksTitles=books.map(book=>book.title)
console.log(booksTitles)
const booksInfo=books.map(book=> (
  { 
    title:book.title,
    author:book.author,
    totalRevies:getTotoalReviewsCount(book)
  }
))

console.log(booksInfo)
const longBooksWithMovieAdaptations= books
.filter(book=> book.pages>500 )
.filter(book=>book.hasMovieAdaptation)
longBooksWithMovieAdaptations

const adventureBooks=books.filter(book=>book.genres.includes('adventure')).map(book=>book.title)
adventureBooks

const allPages=books.reduce((acc, book)=> acc+book.pages,0)
allPages

const arr=[8,15,72,3,6,3,7,9,12,9]

const sortedArr=arr.slice().sort((a,b)=>a-b)
sortedArr
arr

const sortedByPages=books.slice().sort((a,b)=>a.pages-b.pages)
sortedByPages

//Working with immutable arrays
  // 1. Add a book object to array
  const newBook={
    id:6,
    title:'Harry potter and the Chamber of Secrets',
    author:'J.K Rowling'
  }

  const booksAfterAdding=[...books,newBook];
  console.log(booksAfterAdding)

  //  2. Delete a book from original array

const bookAfterDeleting= booksAfterAdding.filter(book=>book.id !==3)
console.log(bookAfterDeleting)

//3. Update a book update in the array

const booksAfterUpdate=bookAfterDeleting.map(book=>book.id===1? {...book, pages:10}: book)
booksAfterUpdate

// fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>console.log(data));
// console.log("john")

async function getTodos(){
  const res=await fetch("https://jsonplaceholder.typicode.com/todos");
  const data=await res.json()
  console.log(data)
}
console.log(getTodos())