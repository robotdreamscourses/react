import { useState, useEffect } from "react";
import styles from "./card.module.css";
import CTAButton from '../button/cta-button';

function Card({name, description, teacher,quota: limit }) {
    const [studentRemainingCount, setStudentRemainingCount] = useState(limit);

  const reserveHandler = () => {
   setStudentRemainingCount(studentRemainingCount - 1);
  }
  // useEffect(() => {
  //   console.log('Kurs bilgisi güncellendi.');
  // }, [studentRemainingCount]);

  return (
   <div className={styles.course} style={{
      backgroundColor: studentRemainingCount === 0 ? 'red' : '#efefef'
   }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{teacher}</p>
      <CTAButton text={`Student Limit: ${studentRemainingCount}`} onClickAction={reserveHandler}/>
    </div>
  );
}

export default Card;
