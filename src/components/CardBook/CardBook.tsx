import "./styleCardBook.css";

export default function CardBook(book: any) {
  return (
    <>
      <div className="card-book" key={book.id}>
        <img src={book.imagemCapa} alt="livro" width={200}></img>
        <div className="card-book-info">
          <div className="card-book-title-author-ano">
            <h1 className="card-book-title">{book.title}</h1>
            <h3 className="card-book-author">By {book.autor}</h3>
            <span className="card-book-ano">{book.anoPublicacao}</span>
            <div className="card-book-description-isbn">
              <p className="card-book-description">"{book.descricao}"</p>
            </div>
          </div>
          <div className="card-book-footer">
            <span className="card-book-isbn">ISBN-13: {book.isbn}</span>
          </div>
        </div>
      </div>
    </>
  );
}
