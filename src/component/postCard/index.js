import styles from './postCard.module.css';

export function PostCard(props) {

  return (
    <div className={styles.container}>
      <span>{props.element.title}</span>
      <span>{props.element.body}</span>
    </div>
  )
}
