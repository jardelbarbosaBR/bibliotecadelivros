"use client";

import "./FormLogin.css";

export default function FormLogin() {
  function handlerFormLogin(e: any) {
    e.preventDefault();
    console.log("Login feito");
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          handlerFormLogin(e);
        }}
      >
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          required
        ></input>
        <input
          type="password"
          placeholder="Senha"
          id="senha"
          name="senha"
          required
        ></input>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
