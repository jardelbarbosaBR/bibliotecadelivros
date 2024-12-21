import FormAddBook from "@/components/formAddBook/FormAddBook";
import "./style.css";
export default function pageAdcionarLivro() {
  return (
    <>
      <section className="page-add-livro">
        <h1>Adicionar livro</h1>
        <div className="content">
          <FormAddBook></FormAddBook>
        </div>
      </section>
    </>
  );
}
