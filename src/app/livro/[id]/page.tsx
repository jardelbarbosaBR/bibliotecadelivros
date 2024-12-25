import CardBook from "@/components/CardBook/CardBook";
import books from "@/Service/api";
import style from "./page.module.css";

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

export default async function livroPage({ params }: { params: any }) {
  const id = (await params).id;

  const findBook = books.find((book) => book.id == id);

  if (!findBook) {
    return (
      <>
        <h1>livro nao encontrado: {id}</h1>
      </>
    );
  }
  return (
    <>
      <section className={style.containerDetalhesLivro}>
        <CardBook
          key={findBook.id}
          title={findBook.title}
          autor={findBook.autor}
          imagemCapa={findBook.imagemCapa}
          anoPublicacao={findBook.anoPublicacao}
          isbn={findBook.isbn}
          descricao={findBook.descricao}
        ></CardBook>
      </section>
    </>
  );
}
