import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/paulorfsantos17.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Paulo Santos</strong>
            <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:30">
              Publicado há 1h
            </time>
          </div>

          <button title="Deletar comentário">
            <Trash fontSize={24}/>
          </button>
        </header>

        <p>Muito bom Devon, parabéns!! </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
