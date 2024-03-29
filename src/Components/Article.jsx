import React, { useEffect } from "react";
import { Container, Card } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ArticlesAPI from "../modules/ArticlesAPI";

const Article = () => {
  let navigate = useNavigate();
  const params = useParams();
  const { activeArticle, userAuthenticated } = useSelector((state) => state);
  let article = activeArticle;
  useEffect(() => {
    if (!userAuthenticated) {
      navigate("/login");
      toast.error("Please login to view full articles", {
        toastId: "message-box",
      });
    }
  }, []);
  useEffect(() => {
    ArticlesAPI.show(parseInt(params.id));
  }, []);

  return (
    <Container text>
      <Card
        sx={{ width: "100%", maxWidth: 700 }}
        header={article?.title}
        meta={`By: ${article?.author}`}
        image={article?.image}
        description={() => (
          <>
            <h2>{article?.headline}</h2>
            <p data-cy="article-body">{article?.body}</p>
          </>
        )}
      ></Card>
    </Container>
  );
};

export default Article;
