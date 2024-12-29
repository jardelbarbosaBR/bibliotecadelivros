import CardBook from "@/components/CardBook/CardBook";

import style from "./page.module.css";
import { api } from "@/Service/LivroService";

export async function generateStaticParams() {
  const books = await api.get("/listar").then((response) => response.data);

  return books.map((book: any) => ({
    id: book.livroID.toString(),
  }));
}

export default async function livroPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id;

  await new Promise((resolve) => setTimeout(resolve, 4000));
  const findBook = await api.get(`/${id}`).then((response) => response.data);

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
          title={findBook.titulo}
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
