import Image from "next/image";
import styles from "./page.module.css";
import api from "@/Service/api";
export default function Home() {
  return (
    <div>
      <h1>Pagina inicial</h1>
      {api.map((book) => {
        return (
          <div key={book.id}>
            <p>{book.title}</p>
            <img src={book.imagemCapa} alt="livro" width={200} height={200} />
          </div>
        );
      })}
    </div>
  );
}
