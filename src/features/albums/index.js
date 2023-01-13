import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getAlboms, selectAlboms,selectActiveAlbom,resetActiveAlbom} from "../users/usersSlice";
import styles from './alboms.module.css';
import {AlbomCard} from '../../component/albomCard'



export function Alboms() {
  const dispatch = useDispatch();
  const alboms = useSelector(selectAlboms);
  const id = useSelector(selectActiveAlbom);



  useEffect(() => {
    if(!alboms[id]){
      dispatch(getAlboms(id))
    }
  }, []);

  const getsomeAlboms=()=>{return alboms[id] || []};

  const resetSomeAlboms=()=>{dispatch(resetActiveAlbom())};
  return (
    <div className={styles.container} onClick={resetSomeAlboms}>
      <div>
        {getsomeAlboms().map((el,i) => <AlbomCard key={''+i+el.id} element={el}/>)}
      </div>
    </div>
  )
}


