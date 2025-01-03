"use client";

import { api } from "@/Service/LivroService";
import "./FormAddBook.css";
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
  isbn: number;
  descricao: string;
  imagemCapa: string;
}

export default function formAddBook() {
  const ano: Date = new Date();
  async function handlerFormAddLivro(e: any) {
    e.preventDefault();
    const dadosLivro: Livro = {
      titulo: e.target.title.value,
      autor: e.target.autor.value,
      anoPublicacao: parseInt(e.target.anoPublicacao.value),
      isbn: parseInt(e.target.isbn.value),
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ipsum ultricies, pulvinar nunc sed, rutrum tellus. Maecenas tincidunt, nunc",
      imagemCapa: e.target.imagemCapa.value,
    };

    const response = await api.post("/add", dadosLivro);
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          handlerFormAddLivro(e);
        }}
      >
        <label htmlFor="title">Título do livro:</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="autor">Autor do livro:</label>
        <input type="text" id="autor" name="autor" required />
        <label htmlFor="anoPublicacao">Ano de Publicação: </label>
        <input
          type="number"
          defaultValue={`${ano.getFullYear().toString()}`}
          min={1900}
          max={2025}
          id="anoPublicacao"
          name="anoPublicacao"
          required
        />
        <label htmlFor="isbn">ISBN-13 do livro</label>
        <input
          type="text"
          name="isbn"
          title="ISBN-13 é composto por 13 dígitos"
          placeholder="Ex: 9780470059029"
          maxLength={13}
          minLength={13}
          id="isbn"
          required
        />
        <label htmlFor="imagemCapa">URL da capa livro:</label>
        <input type="text" name="imagemCapa" id="imagemCapa" required />
        <button className="bntAddLivro" type="submit">
          Adicionar Livro
        </button>
      </form>
    </>
  );
}
