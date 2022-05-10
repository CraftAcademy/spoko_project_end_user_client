import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Styling/Articles.css";

const ArticleCategory = () => {
  const { category } = useParams();
  const { articles } = useSelector((state) => state);
  //const { userCountry } = useSelector((state) => state);
  //const country = userCountry;

  const articlesList = articles[category]?.map((article) => {
    return (
      <div key={article.id} style={{ listStyleType: "none" }}>
        <Grid columns={3} divided>
          <Grid.Column>
            <Container>
              <div className="content">
                <Link to={`/article/${article.id}`}>
                  <div className="newsCard">
                    <Image
                      src={article.image}
                      alt=""
                      className="newsImage"
                      size="small"
                    />
                    <div className="newsText">
                      <div>
                        <br />
                        <span data-cy="article-title" className="title">
                          {article.title}
                        </span>
                      </div>

                      <div className="lowerNewsText">
                        <div className="description">{article.body}</div>
                        <span className="readmore">
                          read more <a target="__blank" className="source"></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  });
  return (
    <Container text>
      <div data-cy="category_header">
        <h2>The latest {category} news.</h2>
      </div>
      <Grid columns={3} divided>
        <div data-cy="articles-list">
          <Grid.Column>{articlesList}</Grid.Column>
        </div>
      </Grid>
    </Container>
  );
  //   return (
  //     <li key={article.id} style={{ listStyleType: "none" }}>
  //       <Card>
  //         <Link to={`/article/${article.id}`}>
  //           <div>
  //             <h1 data-cy="article-title">{article.title}</h1>{" "}
  //           </div>
  //           <img
  //             src={article.image}
  //             alt=""
  //             style={{ height: 200 + "px", width: "auto" }}
  //           />

  //         </Link>
  //       </Card>
  //     </li>
  //   );
  // });

  // return (
  //   <Container text>
  //     <div data-cy="category_header">
  //       The latest {category} news.
  //     </div>
  //     <ul data-cy="articles-list">{articlesList}</ul>
  //   </Container>
  // );
};

export default ArticleCategory;
