import styles from "./page.module.css";
import api from "@/Service/api";
import Card from "@/components/Card/Card";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <section className={styles.container}>
        {api.map((book) => {
          return (
            <Link key={book.id} href={`/livro/${book.id}`}>
              <Card
                key={book.id}
                title={book.title}
                imagemCapa={book.imagemCapa}
                autor={book.autor}
              ></Card>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
