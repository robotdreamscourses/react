import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <p>Welcome to courses home page</p>
      <p>We offer a wide range of courses to help you enhance your skills and achieve your goals.</p>
      <p>Explore our course catalog and start your learning journey today!</p>
    </div>
  );
}

export default Home;
