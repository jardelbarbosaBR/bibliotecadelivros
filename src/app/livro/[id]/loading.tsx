import { CompLoading } from "@/components/Loading/CompLoading";
import style from "./page.module.css";
export default function Loading() {
  return (
    <>
      <div className={style.containerloading}>
        <CompLoading></CompLoading>
      </div>
    </>
  );
}
