import React from "react";
import Navbar from "./Components/Navbar.jsx";
import HeaderImage from "./Components/HeaderImage";
import Articles from "./Components/Articles";
import Article from "./Components/Article.jsx";
import ArticleCategory from "./Components/ArticleCategory.jsx";
import Login from "./Components/Login.jsx";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <HeaderImage title="NewsChannel" subTitle="Latest Updates" />

      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/:category" element={<ArticleCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
