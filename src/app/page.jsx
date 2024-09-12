import Image from "next/image";
import listaCursos from "./data";
// import Link from "next/link";
// import styles from "./page.module.css";

export default function Home() {
  return (
    // <div className={styles.page}>
    <div>
      {listaCursos.map(({ nome, preco, cargaHoraria, precoComDesconto, conteudo, imagem }, index) => (
        <div className="container-curso" key={index}>
          <Image src={imagem} alt={nome} width={100} height={100}/>
          <p>{nome}</p>
          <p>{preco}</p>
          <p>{cargaHoraria}</p>
          <p>{precoComDesconto}</p>
          <p>{conteudo}</p>
        </div>
      ))}
    </div>
  );
}
