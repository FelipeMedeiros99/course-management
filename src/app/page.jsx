import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import listaCursos from "./data";

export default function Home() {
  return (
    <div className={styles.page}>
      {listaCursos.map(({ nome, preco, cargaHoraria, precoComDesconto, conteudo, imagem }, index) => (
        <div className="container-curso" key={index}>
          {/* <Link href={conteudo}> */}
          <Image src={imagem} alt={nome} width={100} height={100}/>
          {/* </Link> */}
          <p>{nome}</p>
          <p>{preco}</p>
          <p>{cargaHoraria}</p>
          <p>{precoComDesconto}</p>
        </div>
      ))}
    </div>
  );
}
