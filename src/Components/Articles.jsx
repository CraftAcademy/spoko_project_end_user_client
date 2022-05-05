import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ArticlesAPI from "../modules/ArticlesAPI";
import { Link } from "react-router-dom";
import { Container,Image, Grid} from "semantic-ui-react";
import "./Articles.css";

const Articles = () => {
  const { articles } = useSelector((state) => state);

  const displayArticles = (articles) => {
    let articlesArray = [];
    Object.entries(articles).map((category) => {
      articlesArray.push(category[1]);
    });
    return articlesArray.flat();
  };

  useEffect(() => {
    ArticlesAPI.index();
  }, []);

  const articleList = displayArticles(articles).map((article) => {
    return (
      <div key={article.id} style={{ listStyleType: "none" }}>
        <Grid className="center" columns={3} divided>
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
                      <span className="title">{article.title}</span>
                      <br />

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
    <Grid columns={3} divided>
      <div data-cy="articles-list">
        <Grid.Column>{articleList}</Grid.Column>
      </div>
    </Grid>
  );
};

export default Articles;
