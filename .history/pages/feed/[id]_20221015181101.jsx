/* eslint-disable @next/next/no-img-element */
import React from "react";
import NavBar from "../../component/NavBar";
import styles from "../../styles/Feed.module.css";
function feed({pageNumber, articles}) {
  return (
    <div className="page-container">
      <NavBar />
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="Cant load image.......... Sorry"
              />
            )}
          </div>
        ))}
      </div>
      <div className={styles.paginator}>
        <div className={pageNumber === 1 ? styles.disabled : styles.active}>
          Previous
        </div>
        <div className={styles.page}>{pageNumber}</div>
        <div className={pageNumber === 5 ? styles.disabled : styles.active}>
          Next
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.id;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  let data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  data = await data.json();

  const {articles} = data;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default feed;
