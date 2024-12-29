"use client";

import styles from "./page.module.css";

import Card from "@/components/Card/Card";
import { api } from "@/Service/LivroService";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export interface Livros {
  livroID: number;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  isbn: number;
  descricao: string;
  imagemCapa: string;
}

export default function Home() {
  const [livros, setLivros] = useState<Livros[]>([]); // useState([]);

  useEffect(() => {
    api.get("/listar").then((response) => setLivros(response.data));
  });

  return (
    <>
      <section className={styles.container}>
        {livros.map((book) => {
          return (
            <Link key={book.livroID} href={`/livro/${book.livroID}`}>
              <Card
                key={book.livroID}
                title={book.titulo}
                imagemCapa={book.imagemCapa}
                autor={book.autor}
              ></Card>
            </Link>
          );
        })}
      </section>
    </>
  );
}
