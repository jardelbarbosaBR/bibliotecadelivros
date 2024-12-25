import "./stylesCard.css";

export default function CardBook(book: any) {
  return (
    <>
      <div key={book.id} className="card">
        <img
          className="card-image"
          src={book.imagemCapa}
          alt="livro"
          width={200}
        />
        <h1 className="card-title">{book.title}</h1>
        <p className="card-author">{book.autor}</p>
      </div>
    </>
  );
}
