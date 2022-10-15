import React from "react";
import styles from "../../styles/Home.module.css";
function feed(props) {
  return (
    <div className="page-container">
      <div className={styles.main}>Feed</div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.id;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        article: [],
        pageNumber: 1,
      },
    };
  }
};

export default feed;
