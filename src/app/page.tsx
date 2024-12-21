import Image from "next/image";
import styles from "./page.module.css";
import api from "@/Service/api";
import CardBook from "@/components/CardBook/CardBook";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <section className={styles.container}>
        {api.map((book) => {
          return (
            <Link href={`/${book.id}`}>
              <CardBook
                key={book.id}
                title={book.title}
                imagemCapa={book.imagemCapa}
                autor={book.autor}
              ></CardBook>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
