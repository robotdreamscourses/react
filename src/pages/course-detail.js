import { useParams } from "react-router-dom";

function CourseDetail() {
  let { name } = useParams();

  return (
    <div>
      <h1>{name} Course Detail</h1>
      <p>Here you can find  the course deatils</p>
    </div>
  );
}
export default CourseDetail;
