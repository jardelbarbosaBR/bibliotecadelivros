import FormLogin from "@/components/FormLogin/FormLogin";
import "./style.css";
export default function loginPage() {
  return (
    <>
      <section className="page-login">
        <h1>Seja bem-vindo</h1>
        <p className="page-description">Faça login para acessar a biblioteca</p>
        <FormLogin></FormLogin>
      </section>
    </>
  );
}
