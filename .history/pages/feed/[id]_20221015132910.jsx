import React from "react";
import styles from "../../styles/Home.module.css";
function feed() {
  return (
    <div className="page-container">
      <div className={styles.main}>Feed</div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  console.log(pageContext);
  return { props: { title: 'My Title', content: '...' }
};

export default feed;
