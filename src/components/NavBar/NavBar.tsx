import Link from "next/link";
import "./NavBar.css";
import logo from "../../../public/logo-white.svg";

import Image from "next/image";
export default function NavBar() {
  return (
    <>
      <nav>
        <div className="logobutton">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={200} />
          </Link>
          <Link href={"/adicionar"}>
            <button className="cssbuttons-io-button">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Add Livro</span>
            </button>
          </Link>
        </div>
        <div className="barraDePesquisa">
          <div className="group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              className="input"
              type="search"
              placeholder="Pesquisar livro"
            />
          </div>
        </div>

        <div className="buttoEntrar">
          <Link href={"/auth"}>
            <button>Entrar</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
