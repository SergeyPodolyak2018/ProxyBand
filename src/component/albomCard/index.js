import styles from './albomCard.module.css';

export function AlbomCard(props) {

  return (
    <div className={styles.container}>
      <span>{props.element.title}</span>
      <span>{props.element.body}</span>
    </div>
  )
}
