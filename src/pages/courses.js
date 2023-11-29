import { NavLink, Outlet } from "react-router-dom";

import Card from '../components/card/card';
import styles from "./courses.module.css";

function Courses() {

  const courses = [
    {
      id: 1,
      name: 'React',
      description: 'React dersleri',
      teacher: 'Filiz',
      quota: 10,
    },
    {
      id: 2,
      name: 'Angular',
      description: 'Angular dersleri',
      teacher: 'Ayşe',
      quota: 15,
    },
    {
      id: 3,
      name: 'Vue',
      description: 'Vue dersleri',
      teacher: 'Tolga',
      quota: 20,
    },
    {
      id: 4,
      name: 'Svelte',
      description: 'Svelte dersleri',
      teacher: 'Mehmet',
      quota: 25,
    }
  ];

  let allCourses =  <p>Henüz kurs bulunmamaktadır.</p>;
  if(courses.length > 0 ) {
    allCourses = (
      <div className={styles.courses}>
        {courses.map((course) => (
          <div key={course.id} className={styles.cardWrapper}>
            <Card name={course.name} description={course.description} teacher={course.teacher} quota={course.quota}/>
             <NavLink className={styles.courseLink} to={`/courses/${course.name}`} > Go to course detail </NavLink>
          </div>
        ))}
      </div>
    )
  }
  return (
    <>
      <h1>Courses</h1>
      <div>{allCourses}</div>
      <Outlet/>
    </>
  )
}

export default Courses;
