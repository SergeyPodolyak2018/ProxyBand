import styles from './userCard.module.css';
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {setActiveAlbom} from "../../features/users/usersSlice";

export function UsersCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openPosts = ()=>{
    console.log(`/posts/${props.element.id}`);
    navigate(`/posts/${props.element.id}`);
  }

  const openAlboms = ()=>{
    dispatch(setActiveAlbom(props.element.id));
  }

  return (
    <div className={styles.container}>
      <span>{props.element.name}</span>
      <span>{props.element.email}</span>
      <span>{props.element.phone}</span>
      <span className={styles.cardContainer}>
        <span className={styles.button} onClick={openPosts}>Posts</span> <span className={styles.button} onClick={openAlboms}>Albums</span>
      </span>
    </div>
  )
}
